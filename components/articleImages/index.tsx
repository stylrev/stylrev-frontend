"use client";
import Image from "next/image";
import React, { useState } from "react";
import article1 from "@/assets/images/anime1.png";
import article2 from "@/assets/images/anime2.png";
import article3 from "@/assets/images/anime3.png";
import article4 from "@/assets/images/anime4.jpg";
import article5 from "@/assets/images/anime5.png";
import article6 from "@/assets/images/anime6.jpg";
import article7 from "@/assets/images/anime7.png";
import article8 from "@/assets/images/anime8.png";
import article9 from "@/assets/images/anime9.png";
import article10 from "@/assets/images/anime10.png";

export default function ArticleImages() {
  const box1 = [article1, article4, article7];
  const box2 = [article2, article5, article8];
  const box3 = [article5, article6, article9];
  const box4 = [article3, article7, article6];
  const box5 = [article4, article8, article5];
  const box6 = [article10, article9, article1];
  const box7 = [article7, article3, article2];
  const box8 = [article8, article2, article3];
  const box9 = [article9, article1, article4];
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => (prevCounter + 1) % 3);
  //   }, 20 * 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="hidden md:grid mt-32 grid-cols-6 grid-rows-[300px_95px_400px] gap-5">
      <div className="col-span-2 overflow-hidden container-img bg-[#000]">
        <Image
          className="object-cover h-full w-full"
          src={box1[counter]}
          alt="articles 1"
        />
      </div>
      <div className="overflow-hidden bg-[#000]">
        <Image
          className="object-cover h-full w-full"
          src={box2[counter]}
          alt="articles 2"
        />
      </div>
      <div className="overflow-hidden bg-[#000] row-span-2">
        <Image
          className="object-cover h-full w-full"
          src={box3[counter]}
          alt="articles 3"
        />
      </div>
      <div className="overflow-hidden bg-[#000] row-span-2">
        <Image
          className="object-cover h-full w-full"
          src={box4[counter]}
          alt="articles 4"
        />
      </div>
      <div className="grid row-span-2 gap-5 ">
        <div className="overflow-hidden bg-[#000]">
          <Image
            className="object-cover h-full w-full"
            src={box5[counter]}
            alt="articles 5"
          />
        </div>
        <div className="overflow-hidden bg-[#000] ">
          <Image
            className="object-cover h-full w-full"
            src={box7[counter]}
            alt="articles 7"
          />
        </div>
      </div>
      <div className="overflow-hidden bg-[#000] row-span-2 col-span-3">
        <Image
          className="object-cover h-full w-full"
          src={box6[counter]}
          alt="articles 6"
        />
      </div>
      <div className="flex gap-7 col-span-3">
        <div className="overflow-hidden bg-[#000] max-w-[322px] max-h-[400px]">
          <Image
            className="object-cover h-full w-full"
            src={box8[counter]}
            alt="articles 8"
          />
        </div>
        <div className="overflow-hidden bg-[#000]">
          <Image
            className="object-cover h-full w-full"
            src={box9[counter]}
            alt="articles 9"
          />
        </div>
      </div>
    </div>
  );
}
