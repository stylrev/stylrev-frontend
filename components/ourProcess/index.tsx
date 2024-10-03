"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import process1 from "@/assets/images/process1.jpg";
import process2 from "@/assets/images/process2.jpg";
import process3 from "@/assets/images/process3.jpg";
import process4 from "@/assets/images/process4.jpg";
import processMobile1 from "@/assets/images/process-mobile1.png";
import processMobile2 from "@/assets/images/process-mobile2.png";
import processMobile3 from "@/assets/images/process-mobile3.png";
import processMobile4 from "@/assets/images/process-mobile4.png";
import localFont from "next/font/local";

const bebasNeue = localFont({
  src: [
    {
      path: "../../assets/fonts/bebas_neue/bebasNeue.ttf",
      weight: "400",
    },
  ],
});
function OurProcess() {
  const [flipCard, setFlipCard] = useState(-1);
  return (
    <div>
      <h2 className="text-[40px] md:text-[94px] leading-none uppercase text-gray-color text-center md:text-left">
        Our <span className="text-black font-medium">Process</span>
      </h2>
      <div className="flex gap-5 mt-4 flex-wrap justify-center">
        {[
          {
            title: "Discovery",
            description: `We begin with an in-depth consultation to understand your unique style preferences, body type, and lifestyle needs. Our Stylrev process, designed to uncover the optimal arrangements for your wardrobe, ensures a personalized approach tailored specifically to you.`,
            img: process1,
            mobileImg: processMobile1,
          },
          {
            title: "Virtual Styling",
            description: `Our experienced stylists collaborate with you in a virtual setting, offering real-time advice and styling tips. We utilize our production-level expertise to assist you in visualizing and selecting outfits that perfectly match your needs and preferences.`,
            img: process4,
            mobileImg: processMobile4,
          },
          {
            title: "Recommendations",
            description: `
Using our Stylrev process, we curate a selection of outfits and accessories that enhance your personal style. This step involves meticulous attention to detail, ensuring each recommendation aligns perfectly with your preferences and lifestyle.`,
            img: process2,
            mobileImg: processMobile2,
          },
          {
            title: "Implementation",
            description: `We assist you in integrating these new pieces into your wardrobe, offering tips and tricks for versatile styling. Our virtual guidance ensures you have the confidence to mix and match your new outfits seamlessly.`,
            img: process3,
            mobileImg: processMobile3,
          },
        ].map((item, i) => (
          <Card
            key={i}
            className="card rounded-none w-full max-w-[375px] md:max-w-[319px]"
          >
            <div
              className="card__content relative transition-transform duration-1000"
              style={{
                transform: `rotateY(${flipCard === i ? "0.5turn" : "0"})`,
              }}
            >
              <div className="card__front top-0 bottom-0 right-0 left-0">
                <CardHeader>
                  <Image
                    className="hidden md:block w-full md:max-h-[300px] object-cover"
                    src={item?.img}
                    alt="process1"
                  />
                  <Image
                    className="md:hidden w-full max-h-[180px] object-cover"
                    src={item?.mobileImg}
                    alt="process1"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-black">{item?.title}</CardTitle>
                  <CardDescription className="md:line-clamp-1 my-3">
                    {item?.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between w-[100%]">
                    <span
                      className={`${bebasNeue.className} text-gray-color text-6xl font-semibold underline decoration-4 decoration-[#0D0D0D]`}
                    >
                      0{i + 1}
                    </span>
                    <div
                      className="px-[16px] py-[10px] bg-[#EEEEEE] rounded-full cursor-pointer hidden md:block"
                      onClick={() => {
                        setFlipCard(i);
                      }}
                    >
                      <span className="text-[#0F52BA] text-[12px]">
                        Read More
                      </span>
                    </div>
                  </div>
                </CardFooter>
              </div>
              <div className="card__back absolute top-0 bottom-0 right-0 left-0 bg-[#0D0D0D]">
                <CardContent className="p-8 h-[calc(100%-86px)]">
                  <CardTitle className="text-white ">{item.title}</CardTitle>
                  <CardDescription className="my-3 text-white h-full">
                    {item.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <span
                    className={`${bebasNeue.className} text-[#36B2F8] text-6xl font-semibold underline decoration-4 decoration-white`}
                  >
                    0{i + 1}
                  </span>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default OurProcess;
