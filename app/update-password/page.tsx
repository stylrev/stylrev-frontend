"use client";
import { SubmitButton } from "@/components/login/submit-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import React, { useState } from "react";

function UpdatePassword() {
  const toast = useToast();
  const [isShow, setIsShow] = useState(false);
  const [isShow2, setIsShow2] = useState(false);

  const updatePassword = async (formData: FormData) => {
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    if (password !== confirmPassword) {
      return toast.toast({ description: "Passwords do not match" });
    }
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return toast.toast({
        description:
          "Password must be at least 6 characters long and include at least one digit, one uppercase letter, one lowercase letter, and one special character",
      });
    }
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });
    if (error) return toast.toast({ description: error?.message });
    redirect("/");
  };

  return (
    <div className="flex flex-col items-center  justify-center min-h-[100vh] sm:max-w-[600px] rounded-2xl py-10 px-8 w-[calc(100%-30px)] mx-auto">
      <p className="font-bold uppercase text-black text-3xl text-center">
        Change Password
      </p>
      <p>Please set a secure password.</p>
      <form>
        <div className="mt-5">
          <Label
            htmlFor="password"
            className="text-md text-[#666666] font-[400]"
          >
            Password
          </Label>
          <div className="relative mb-3">
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
          <Label
            htmlFor="confirmPassword"
            className="text-md text-[#666666] font-[400]"
          >
            Confirm Password
          </Label>
          <div className="relative w-100">
            <Input
              id="confirmPassword"
              type={isShow2 ? "text" : "password"}
              name="confirmPassword"
              placeholder="••••••••"
              required
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute inset-y-0 end-0 text-gray-400"
              type="button"
              onClick={() => setIsShow2(!isShow2)}
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
                {isShow2 ? (
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
          <SubmitButton
            formAction={updatePassword}
            className="mt-4 rounded-full"
            pendingText="Signing Up..."
          >
            {"Update Password"}
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default UpdatePassword;
