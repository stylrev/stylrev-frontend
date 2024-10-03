"use server";
import { headers } from "next/headers";
import { createClient } from "../supabase/server";
import { redirect } from "next/navigation";

export async function userLogin(formData: FormData) {
  "use server";
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect(`/?errorMessage=${error?.message}`);
  }

  return redirect("/profile");
}

export async function userSignUp(formData: FormData) {
  "use server";
  const origin = headers().get("origin");
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;

  // Check password requirements
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
  if (!passwordRegex.test(password)) {
    return redirect(
      "/?errorMessage=Password must be at least 6 characters long and include at least one digit, one uppercase letter, one lowercase letter, and one special character"
    );
  }
  const supabase = createClient();
  if (!name) return;
  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return redirect(`/?errorMessage=${error?.message}`);
  }

  const { error: userError } = await supabase
    .from("users")
    .insert([
      {
        userId: data?.user?.id,
        loginType: data?.user?.app_metadata?.provider || "email",
        email: data?.user?.email,
        name: data?.user?.user_metadata?.name,
      },
    ])
    .select();

  if (userError) {
    return redirect(`/?errorMessage=${userError?.message}`);
  }

  redirect("/?message=Check email to continue sign in process");

  return window.close();
}

export async function createUser() {
  const supabase = createClient();
  const { data: currentUser } = await supabase.auth.getUser();
  const { data: userData } = await supabase
    .from("users")
    .select()
    .eq("email", currentUser?.user?.email);
  const userInfo = userData?.[0];
  if (!userInfo) {
    await supabase
      .from("users")
      .insert([
        {
          userId: currentUser?.user?.id,
          loginType: currentUser?.user?.app_metadata?.provider || "google",
          email: currentUser?.user?.email,
          name: currentUser?.user?.user_metadata?.name,
        },
      ])
      .select();
  }
}
