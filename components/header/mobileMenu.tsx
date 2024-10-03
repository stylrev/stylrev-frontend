"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavItem from "./navItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import Login from "../login";
import userPic from "@/assets/images/user-pic.png";
import UpdatePassword from "../updatePassword";
import Logout from "../logout";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { createUser } from "@/utils/helpers/login";

export default function MobileMenu({
  user,
  pathname,
}: {
  user: User | null;
  pathname: string | null;
}) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/#booking");
  };

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      if (!user) {
        router.refresh();
      }
    }, 3000);
    return () => clearInterval(refreshInterval);
  }, [router, user]);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        createUser();
      }
    });
  }, []);

  return (
    <div className="mobile-menu md:hidden">
      <DropdownMenu onOpenChange={(val) => setIsMenuOpen(val)} modal={false}>
        <DropdownMenuTrigger asChild>
          {pathname === "/profile" ? (
            <Avatar className="h-12 w-12">
              <AvatarImage src={userPic.src} alt="placeholder" />
              <AvatarFallback>
                {(user?.user_metadata?.name?.charAt(0)?.toUpperCase() ?? "P") +
                  (user?.user_metadata?.name?.charAt(1)?.toUpperCase() ?? "P")}
              </AvatarFallback>
            </Avatar>
          ) : (
            <Button size="icon" className="md:hidden rounded-full h-12 w-12">
              {isMenuOpen ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.0718 2.34315L13.6576 0.928939L8.00098 6.58557L2.34434 0.928939L0.93013 2.34315L6.58676 7.99978L0.929688 13.6569L2.3439 15.0711L8.00098 9.414L13.6581 15.0711L15.0723 13.6569L9.41519 7.99978L15.0718 2.34315Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 14V16H2V14H13ZM18 7V9H0V7H18ZM16 0V2H5V0H16Z"
                    fill="white"
                  />
                </svg>
              )}
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="p-4 gap-5 flex-col flex w-full min-w-full overflow-auto h-[calc(100vh-75px)]"
        >
          {user && (
            <div className="border p-3 bg-card border-[#EEEEEE] !rounded-2xl flex flex-col gap-2 items-start focus:bg-card">
              <DropdownMenuItem asChild>
                <div className="flex gap-2 items-center border-b border-b-[#EEEEEE] pb-2">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={userPic.src} alt="placeholder" />
                    <AvatarFallback>
                      {(user?.user_metadata?.name?.charAt(0)?.toUpperCase() ??
                        "P") +
                        (user?.user_metadata?.name?.charAt(1)?.toUpperCase() ??
                          "P")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <span className="text-lg text-black font-semibold leading-none">
                      {user?.user_metadata?.name || "John Sahl"}
                    </span>
                    <span className="text-sm">
                      {user?.email || "test@email.com"}
                    </span>
                  </div>
                </div>
              </DropdownMenuItem>
              <Link href="/profile" className="w-full px-3 py-1 flex gap-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99379 10.4575C10.4665 10.4575 10.9346 10.3644 11.3713 10.1835C11.808 10.0026 12.2049 9.73748 12.5391 9.40322C12.8734 9.06896 13.1385 8.67214 13.3194 8.23542C13.5003 7.79869 13.5934 7.33061 13.5934 6.8579C13.5934 6.38519 13.5003 5.91711 13.3194 5.48038C13.1385 5.04365 12.8734 4.64683 12.5391 4.31258C12.2049 3.97832 11.808 3.71317 11.3713 3.53228C10.9346 3.35138 10.4665 3.25827 9.99379 3.25827C9.03911 3.25827 8.12353 3.63752 7.44846 4.31258C6.7734 4.98764 6.39416 5.90322 6.39416 6.8579C6.39416 7.81258 6.7734 8.72816 7.44846 9.40322C8.12353 10.0783 9.03911 10.4575 9.99379 10.4575ZM9.99939 2C11.053 1.99966 12.0775 2.34605 12.9148 2.98574C13.752 3.62542 14.3555 4.52285 14.6321 5.53955C14.9087 6.55625 14.8431 7.63572 14.4453 8.6114C14.0475 9.58709 13.3397 10.4048 12.4311 10.9383C15.3812 11.8262 17.597 14.3123 17.9946 17.4C18.0322 17.6936 17.8138 17.96 17.5066 17.996C17.2002 18.0319 16.9203 17.824 16.8827 17.5304C16.4507 14.1787 13.5478 11.655 10.0274 11.655C6.48775 11.655 3.54725 14.1835 3.1161 17.5304C3.0785 17.824 2.79853 18.0319 2.49216 17.996C2.18499 17.96 1.96661 17.6936 2.00421 17.4C2.40097 14.3251 4.62874 11.8422 7.58363 10.9463C6.67228 10.4152 5.96126 9.59866 5.56051 8.62294C5.15977 7.64722 5.09162 6.56665 5.3666 5.54831C5.64158 4.52998 6.24437 3.63059 7.08178 2.9892C7.91919 2.34782 8.94457 2.00017 9.99939 2Z"
                    fill="#0D0D0D"
                  />
                </svg>
                Profile
              </Link>
              <DropdownMenuItem asChild>
                <UpdatePassword userEmail={user?.email}>
                  <div className="w-full px-3 py-1 flex gap-4 cursor-pointer">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6875 13.4397C11.8301 13.2781 11.9167 13.0658 11.9167 12.8333C11.9167 12.3271 11.5063 11.9167 11 11.9167C10.4937 11.9167 10.0833 12.3271 10.0833 12.8333C10.0833 13.0658 10.1699 13.2781 10.3125 13.4397V16.5C10.3125 16.8797 10.6203 17.1875 11 17.1875C11.3797 17.1875 11.6875 16.8797 11.6875 16.5V13.4397Z"
                        fill="#535353"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.02083 5.49999C8.02083 3.85465 9.35465 2.52083 11 2.52083C12.6453 2.52083 13.9792 3.85465 13.9792 5.49999C13.9792 5.87969 14.287 6.18749 14.6667 6.18749C15.0464 6.18749 15.3542 5.87969 15.3542 5.49999C15.3542 3.09526 13.4047 1.14583 11 1.14583C8.59526 1.14583 6.64583 3.09526 6.64583 5.49999V7.33333H6.41667C4.39162 7.33333 2.75 8.97495 2.75 11V16.5C2.75 18.525 4.39162 20.1667 6.41667 20.1667H15.5833C17.6084 20.1667 19.25 18.525 19.25 16.5V11C19.25 8.97495 17.6084 7.33333 15.5833 7.33333H8.02083V5.49999ZM4.125 11C4.125 9.73434 5.15101 8.70833 6.41667 8.70833H15.5833C16.849 8.70833 17.875 9.73434 17.875 11V16.5C17.875 17.7656 16.849 18.7917 15.5833 18.7917H6.41667C5.15101 18.7917 4.125 17.7656 4.125 16.5V11Z"
                        fill="#535353"
                      />
                    </svg>
                    Change Password
                  </div>
                </UpdatePassword>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Logout>
                  <div className="w-full px-3 py-1 flex gap-4 cursor-pointer">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6665 14.9999C12.6007 16.6461 11.2292 18.0434 9.39187 17.999C8.96432 17.9883 8.43544 17.839 7.37857 17.5412C4.8355 16.8239 2.62754 15.6177 2.09778 12.9164C2 12.4213 2 11.8622 2 10.744V9.25601C2 8.1387 2 7.5796 2.09778 7.08272C2.62754 4.38232 4.8355 3.17612 7.37857 2.4588C8.43633 2.16103 8.96432 2.0117 9.39187 2.00103C11.2292 1.95659 12.6007 3.3539 12.6665 5.00009M17.9997 10H8.22211M17.9997 10C17.9997 9.37779 16.2273 8.21514 15.7775 7.77782M17.9997 10C17.9997 10.6222 16.2273 11.7849 15.7775 12.2222"
                        stroke="#535353"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Log Out
                  </div>
                </Logout>
              </DropdownMenuItem>
            </div>
          )}
          {pathname !== "/profile" && (
            <DropdownMenuItem className="border p-3 flex flex-col gap-2 !rounded-2xl">
              <NavItem key={1} label="Home" path="/" />
              <NavItem key={3} label="About" path="/about" />
            </DropdownMenuItem>
          )}
          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-full py-6"
            onClick={handleClick}
          >
            Book Now
          </Button>
          {!user && (
            <Login>
              <Button className="rounded-full" size="lg">
                Sign In
              </Button>
            </Login>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
