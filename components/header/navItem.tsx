"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  path: string;
}
export default function NavItem({ label, path }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link
      className={`${
        pathname === path
          ? "text-white bg-black"
          : "text-black bg-card md:bg-transparent"
      } px-6 py-4 md:py-1 rounded-md md:rounded-full block font-medium w-full text-center`}
      href={path}
    >
      {label}
    </Link>
  );
}
