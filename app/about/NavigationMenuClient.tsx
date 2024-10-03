"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const scrollToSection = (e: any, id: any) => {
  e.preventDefault();
  const section: any = document.getElementById(id);
  const headerOffset = 120; // Adjust this value based on your header height
  const elementPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

const NavigationMenuClient = () => {
  return (
    <NavigationMenu
      orientation="vertical"
      className="hidden w-full lg:grid lg:justify-start lg:items-start lg:grid-cols-1 max-w-52 w-full"
    >
      <NavigationMenuList className="flex-col items-start">
        <NavigationMenuItem className="group/item border-b border-b-[#EEEEEE] w-full">
          <NavigationMenuLink
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="text-black flex py-4"
          >
            About Us
            <div className="transition-all opacity-100 flex-1 overflow-hidden">
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto"
              >
                <path
                  d="M0.84 6L13.09 6L7.84 0.75L8.5 -2.84124e-07L15 6.5L8.5 13L7.84 12.25L13.09 7L0.84 7L0.84 6Z"
                  fill="#0D0D0D"
                />
              </svg>
            </div>
          </NavigationMenuLink>
          <span className="block max-w-full transition-all duration-500 h-0.5 bg-blue-sapphire"></span>
        </NavigationMenuItem>
        <NavigationMenuItem className="group/item border-b border-b-[#EEEEEE] w-full">
          <NavigationMenuLink
            href="#founder"
            onClick={(e) => scrollToSection(e, "founder")}
            className="text-gray-color group-hover/item:text-black flex py-4"
          >
            Our Founder
            <div className="transition-all opacity-0 group-hover/item:opacity-100 flex-0 group-hover/item:flex-1 overflow-hidden">
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto"
              >
                <path
                  d="M0.84 6L13.09 6L7.84 0.75L8.5 -2.84124e-07L15 6.5L8.5 13L7.84 12.25L13.09 7L0.84 7L0.84 6Z"
                  fill="#0D0D0D"
                />
              </svg>
            </div>
          </NavigationMenuLink>
          <span className="block max-w-0 group-hover/item:max-w-full transition-all duration-500 h-0.5 bg-blue-sapphire"></span>
        </NavigationMenuItem>
        <NavigationMenuItem className="group/item border-b border-b-[#EEEEEE] w-full">
          <NavigationMenuLink
            href="#mission"
            onClick={(e) => scrollToSection(e, "mission")}
            className="text-gray-color group-hover/item:text-black flex py-4"
          >
            Mission
            <div className="transition-all opacity-0 group-hover/item:opacity-100 flex-0 group-hover/item:flex-1 overflow-hidden">
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto"
              >
                <path
                  d="M0.84 6L13.09 6L7.84 0.75L8.5 -2.84124e-07L15 6.5L8.5 13L7.84 12.25L13.09 7L0.84 7L0.84 6Z"
                  fill="#0D0D0D"
                />
              </svg>
            </div>
          </NavigationMenuLink>
          <span className="block max-w-0 group-hover/item:max-w-full transition-all duration-500 h-0.5 bg-blue-sapphire"></span>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuClient;
