"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../ui/button";
import article1 from "@/assets/images/anime1.png";
import article2 from "@/assets/images/anime2.png";
import article3 from "@/assets/images/anime3.png";
import article4 from "@/assets/images/anime4.jpg";
import article5 from "@/assets/images/anime5.png";
import article6 from "@/assets/images/anime10.png";
import article7 from "@/assets/images/anime7.png";
import article8 from "@/assets/images/anime8.png";
import article9 from "@/assets/images/anime9.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
export default function ArticleSlider() {
  const [activeSlide, setActiveSlide] = useState(1);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next + 1);
    },
  };

  let sliderRef1 = useRef<Slider | null>(null);

  const next = () => {
    if (activeSlide === 9) return;
    //@ts-ignore
    sliderRef1.slickNext();
  };
  const previous = () => {
    if (activeSlide === 1) return;
    //@ts-ignore
    sliderRef1.slickPrev();
  };

  return (
    <div className="relative mb-6">
      <Slider
        ref={(slider) => {
          //@ts-ignore
          sliderRef1 = slider;
        }}
        {...settings}
      >
        {[
          article1,
          article2,
          article3,
          article4,
          article5,
          article6,
          article7,
          article8,
          article9,
        ]?.map((pic, item) => (
          <Image
            key={crypto.randomUUID()}
            className={cn(
              "w-full max-h-[200px] min-h-[200px] object-cover px-2",
              item === 8 || item === 4 || item === 6 || item === 3
                ? ""
                : "object-top"
            )}
            src={pic}
            alt="service"
          />
        ))}
      </Slider>
      <div className="pl-0 md:pl-16 flex gap-2 absolute top-full pt-10 md:pt-20">
        <Button
          size="icon"
          variant={activeSlide === 1 ? "outline" : "default"}
          className="rounded-full"
          onClick={previous}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.53033 9.93023C6.82322 9.63734 6.82322 9.16246 6.53033 8.86957C6.23744 8.57668 5.76256 8.57668 5.46967 8.86957L2.47175 11.8675C2.465 11.8742 2.45838 11.881 2.45189 11.888C2.32665 12.022 2.25 12.202 2.25 12.3999C2.25 12.5005 2.26981 12.5965 2.30573 12.6841C2.34234 12.7737 2.39699 12.8576 2.46967 12.9302L5.46967 15.9302C5.76256 16.2231 6.23744 16.2231 6.53033 15.9302C6.82322 15.6373 6.82322 15.1625 6.53033 14.8696L4.81065 13.1499H21C21.4142 13.1499 21.75 12.8141 21.75 12.3999C21.75 11.9857 21.4142 11.6499 21 11.6499H4.81067L6.53033 9.93023Z"
              fill="currentColor"
            />
          </svg>
        </Button>
        <Button
          size="icon"
          variant={activeSlide === 9 ? "outline" : "default"}
          className="rounded-full"
          onClick={next}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4697 9.93023C17.1768 9.63734 17.1768 9.16246 17.4697 8.86957C17.7626 8.57668 18.2374 8.57668 18.5303 8.86957L21.5283 11.8675C21.535 11.8742 21.5416 11.881 21.5481 11.888C21.6733 12.022 21.75 12.202 21.75 12.3999C21.75 12.5005 21.7302 12.5965 21.6943 12.6841C21.6577 12.7737 21.603 12.8576 21.5303 12.9302L18.5303 15.9302C18.2374 16.2231 17.7626 16.2231 17.4697 15.9302C17.1768 15.6373 17.1768 15.1625 17.4697 14.8696L19.1893 13.1499H3C2.58579 13.1499 2.25 12.8141 2.25 12.3999C2.25 11.9857 2.58579 11.6499 3 11.6499H19.1893L17.4697 9.93023Z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
