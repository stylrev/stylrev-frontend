"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/client";

export default function Logout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const signOut = async () => {
    setIsLoading(true);
    const supabase = createClient();
    await supabase?.auth?.signOut();
    location.reload();
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] rounded-2xl py-10 px-8 w-[calc(100%-30px)]">
        <DialogHeader className="text-center">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-5"
          >
            <rect width="80" height="80" rx="40" fill="#0F52BA" />
            <path
              d="M56.25 30C56.25 29.3096 55.6904 28.75 55 28.75C54.3096 28.75 53.75 29.3096 53.75 30V50C53.75 50.6904 54.3096 51.25 55 51.25C55.6904 51.25 56.25 50.6904 56.25 50V30Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.855 32.1785C42.3879 32.372 42.0833 32.8278 42.0833 33.3333V38.75H25C24.3096 38.75 23.75 39.3096 23.75 40C23.75 40.6904 24.3096 41.25 25 41.25H42.0833V46.6667C42.0833 47.1723 42.3879 47.6281 42.855 47.8215C43.3221 48.015 43.8597 47.9081 44.2172 47.5506L48.5269 43.2409C50.3168 41.451 50.3168 38.549 48.5269 36.7591L44.2172 32.4494C43.8597 32.092 43.3221 31.985 42.855 32.1785ZM44.5833 40L44.5833 40.0057V43.6489L46.7591 41.4731C47.5727 40.6595 47.5727 39.3405 46.7591 38.5269L44.5833 36.3511V39.9943L44.5833 40Z"
              fill="white"
            />
          </svg>
          <DialogTitle className="font-bold uppercase text-black text-3xl text-center">
            Logout
          </DialogTitle>
        </DialogHeader>{" "}
        <DialogDescription className="text-center">
          Are you sure you want to end this session?
          <div className="flex mt-8 gap-5 border-t-[#EEEEEE] py-5 justify-center">
            <Button
              size="lg"
              variant="primary"
              className="max-w-[220px] w-full rounded-full"
              onClick={() => setIsOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              size="lg"
              className="max-w-[220px] w-full rounded-full"
              onClick={signOut}
              disabled={isLoading}
            >
              {isLoading && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}{" "}
              Confirm Logout
            </Button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
