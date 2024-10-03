"use client";
import { SubmitButton } from "./submit-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { userLogin, userSignUp } from "@/utils/helpers/login";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import UpdatePassword from "../updatePassword";

export default function Login({ children }: any) {
  const [isLogin, setIsLogin] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  const errorMessage = searchParams.get("errorMessage");
  const isResetEmail = searchParams.get("email");

  useEffect(() => {
    if (isResetEmail) {
      setIsOpen(true);
    }
  }, [isResetEmail]);

  const gmailSignUp = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://lrustdadugzpmnmlgbrq.supabase.co/auth/v1/callback",
      },
    });
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] rounded-2xl py-10 px-8 w-[calc(100%-30px)]">
        <DialogHeader>
          <DialogTitle className="font-bold uppercase text-black text-3xl text-center">
            {isLogin ? "Sign In" : "Sign Up"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {isLogin
              ? "Continue you fashion with stylrev"
              : "Join our platform just by signing up with your email."}
          </DialogDescription>
        </DialogHeader>
        <Button
          size="lg"
          className="bg-card text-black hover:bg-card gap-2 items-center rounded-full"
          onClick={gmailSignUp}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.0005 12.7331C23.0005 11.8698 22.9291 11.2398 22.7744 10.5864H12.7148V14.483H18.6196C18.5006 15.4514 17.8577 16.9097 16.4291 17.8897L16.4091 18.0202L19.5897 20.4349L19.8101 20.4564C21.8338 18.6247 23.0005 15.9297 23.0005 12.7331Z"
              fill="#4285F4"
            />
            <path
              d="M12.714 23.0001C15.6068 23.0001 18.0353 22.0667 19.8092 20.4567L16.4282 17.89C15.5235 18.5083 14.3092 18.94 12.714 18.94C9.88069 18.94 7.47596 17.1083 6.61874 14.5767L6.49309 14.5871L3.18583 17.0955L3.14258 17.2133C4.90446 20.6433 8.5235 23.0001 12.714 23.0001Z"
              fill="#34A853"
            />
            <path
              d="M6.62095 14.5767C6.39476 13.9234 6.26386 13.2233 6.26386 12.5C6.26386 11.7767 6.39476 11.0767 6.60905 10.4234L6.60306 10.2842L3.25435 7.7356L3.14478 7.78667C2.41862 9.21002 2.00195 10.8084 2.00195 12.5C2.00195 14.1917 2.41862 15.79 3.14478 17.2133L6.62095 14.5767Z"
              fill="#FBBC05"
            />
            <path
              d="M12.7141 6.05997C14.7259 6.05997 16.083 6.91163 16.8569 7.62335L19.8807 4.73C18.0236 3.03834 15.6069 2 12.7141 2C8.52353 2 4.90447 4.35665 3.14258 7.78662L6.60686 10.4233C7.47598 7.89166 9.88073 6.05997 12.7141 6.05997Z"
              fill="#EB4335"
            />
          </svg>
          Continue with Google
        </Button>
        <div className="flex items-center my-3">
          <div className="border-b flex-1"></div>
          <span className="px-3">OR</span>
          <div className="border-b flex-1"></div>
        </div>
        <form className="flex flex-col w-full justify-center gap-2">
          {!isLogin && (
            <>
              <Label
                htmlFor="name"
                className="text-md text-[#666666] font-[400]"
              >
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Name"
                className="mb-3"
                required
              />
            </>
          )}
          <Label htmlFor="email" className="text-md text-[#666666] font-[400]">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            className="mb-3"
          />
          <Label
            htmlFor="password"
            className="text-md text-[#666666] font-[400]"
          >
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={isShow ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              required
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute inset-y-0 end-0 text-gray-400"
              type="button"
              onClick={() => setIsShow(!isShow)}
            >
              <svg
                className="shrink-0 size-3.5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isShow ? (
                  <>
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </>
                ) : (
                  <>
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </>
                )}
              </svg>
            </Button>
          </div>
          {isLogin && (
            <UpdatePassword isForgot>
              <span className="font-semibold text-black mt-2 text-right text-sm w-max ml-auto cursor-pointer">
                Forgot Password?
              </span>
            </UpdatePassword>
          )}
          {errorMessage && (
            <p className="mt-4 p-2 text-destructive bg-destructive/30 text-center">
              {errorMessage}
            </p>
          )}
          {message && (
            <p className="mt-4 p-2 text-[#15803d] bg-[#f0fdf4] text-center">
              {message}
            </p>
          )}
          {isLogin ? (
            <SubmitButton
              formAction={userLogin}
              className="my-4 rounded-full"
              pendingText="Signing In..."
            >
              Login
            </SubmitButton>
          ) : (
            <SubmitButton
              formAction={userSignUp}
              className="my-4 rounded-full"
              pendingText="Signing Up..."
            >
              Create Account
            </SubmitButton>
          )}
        </form>
        <p className="text-center">
          {isLogin ? "Not registered yet?" : "You are already registered?"}{" "}
          <Button
            className="p-0"
            variant="link"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </Button>
        </p>
      </DialogContent>
    </Dialog>
  );
}
