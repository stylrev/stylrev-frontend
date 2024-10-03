"use client";
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
import { redirect, useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { SubmitButton } from "../login/submit-button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useToast } from "../ui/use-toast";
import Countdown from "react-countdown";

export default function UpdatePassword({
  isForgot,
  userEmail,
  children,
}: {
  isForgot?: boolean;
  userEmail?: string;
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const toast = useToast();
  let message = searchParams.get("message");
  let email = "";
  const isResetEmail = searchParams.get("email");

  const [step, setStep] = useState(isResetEmail ? 2 : isForgot ? 1 : 3);
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState("");
  const [resendTimer, setResendTimer] = useState(Date.now() + 60 * 1000);

  useEffect(() => {
    if (isResetEmail) {
      setIsOpen(true);
      sentOTP();
    }
  }, [isResetEmail]);

  const sentOTP = async () => {
    setResendTimer(Date.now() + 60 * 1000);
    const supabase = createClient();
    // const { error } = await supabase.auth.reauthenticate();
    const { error } = await supabase.auth.resetPasswordForEmail(
      userEmail ? userEmail : recoveryEmail,
      {
        redirectTo: `${window.location.origin}`,
      }
    );
    if (error) return toast.toast({ description: error?.message });
  };
  const updatePassword = async (formData: FormData) => {
    if (step === 1) {
      email = formData.get("email") as string;
      const supabase = createClient();
      const { error } = await supabase.auth.resetPasswordForEmail(
        userEmail ? userEmail : email,
        {
          redirectTo: `${window.location.origin}`,
        }
      );
      if (error) return toast.toast({ description: error?.message });
      setStep(2);
    }
    if (step === 2) {
      const supabase = createClient();
      const { data, error } = await supabase.auth.verifyOtp({
        email: isResetEmail || userEmail || email,
        token,
        type: "recovery",
      });
      if (error) return toast.toast({ description: error?.message });
    }
    if (step === 3) {
      const password = formData.get("password") as string;
      const confirmPassword = formData.get("confirmPassword") as string;
      if (password !== confirmPassword) {
        return toast.toast({ description: "Passwords do not match." });
      }
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        return toast.toast({
          description:
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        });
      }
      const supabase = createClient();
      const { error } = await supabase.auth.updateUser({ password });
      if (error) return toast.toast({ description: error?.message });
      setIsOpen(false);
      redirect("/profile");
    }
  };

  useEffect(() => {
    if (userEmail) {
      setStep(3);
    } else {
      setStep(1);
    }
  }, [isOpen, userEmail]);

  useEffect(() => {
    if (step === 2) {
      setResendTimer(Date.now() + 60 * 1000);
    }
  }, [step]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] rounded-2xl py-10 px-8 w-[calc(100%-30px)]">
        <DialogHeader>
          <DialogTitle className="font-bold uppercase text-black text-3xl text-center">
            {step === 1
              ? "Forgot Password"
              : step === 2
              ? "Email Sent"
              : "Change Password"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {step === 1 ? (
              "Enter your email to get verification code, where you can reset your password."
            ) : step === 2 ? (
              <>
                We've sent the reset password link to{" "}
                <span className="font-semibold">
                  {isResetEmail || userEmail || email || recoveryEmail}
                </span>
              </>
            ) : (
              "Please set a secure password."
            )}
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col w-full justify-center gap-2">
          {step === 1 && (
            <>
              <Label
                htmlFor="email"
                className="text-md text-[#666666] font-[400]"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                className="mb-3"
                value={recoveryEmail}
                onChange={(e) => setRecoveryEmail(e.target.value)}
              />
            </>
          )}
          {/* {step === 2 && (
            <>
              <InputOTP
                maxLength={6}
                value={token}
                onChange={(value) => setToken(value)}
              >
                <InputOTPGroup className="gap-4 mx-auto">
                  <InputOTPSlot
                    className="border border-[#EEEEEE] rounded-md h-12 w-12"
                    index={0}
                  />
                  <InputOTPSlot
                    className="border border-[#EEEEEE] rounded-md h-12 w-12"
                    index={1}
                  />
                  <InputOTPSlot
                    className="border border-[#EEEEEE] rounded-md h-12 w-12"
                    index={2}
                  />
                  <InputOTPSlot
                    className="border border-[#EEEEEE] rounded-md h-12 w-12"
                    index={3}
                  />
                  <InputOTPSlot
                    className="border border-[#EEEEEE] rounded-md h-12 w-12"
                    index={4}
                  />
                  <InputOTPSlot
                    className="border border-[#EEEEEE] rounded-md h-12 w-12"
                    index={5}
                  />
                </InputOTPGroup>
              </InputOTP>
            </>
          )} */}
          {step === 3 && (
            <>
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
              <Label
                htmlFor="confirmPassword"
                className="text-md text-[#666666] font-[400]"
              >
                Confirm Password
              </Label>
              <div className="relative">
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
            </>
          )}
          {step !== 2 && (
            <SubmitButton
              formAction={updatePassword}
              className="mt-4 rounded-full"
              pendingText="Signing Up..."
            >
              {step === 1
                ? "Get Verification Code"
                : step === 2
                ? "Change Password"
                : "Update Password"}
            </SubmitButton>
          )}
          {message && (
            <p className="mt-4 p-2 text-destructive bg-destructive/30 text-center">
              {message}
            </p>
          )}
          {step === 2 && (
            <p className="text-center">
              Not received the code yet?{" "}
              <Countdown
                date={resendTimer}
                key={resendTimer}
                zeroPadTime={2}
                renderer={({ minutes, seconds, completed }) => {
                  if (completed) {
                    return (
                      <Button
                        type="button"
                        className="p-0"
                        variant="link"
                        onClick={sentOTP}
                      >
                        Resend Code
                      </Button>
                    );
                  }
                  return (
                    <strong className="text-[#000]">
                      0{minutes}:{seconds < 10 ? "0" : ""}
                      {seconds}
                    </strong>
                  );
                }}
              />
              {/* <Button
                type="button"
                className="p-0"
                variant="link"
                onClick={sentOTP}
              >
                Resend Code
              </Button> */}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
