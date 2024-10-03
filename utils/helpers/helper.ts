import { StaticImageData } from "next/image";

export function changeImg(e: any, myImages: StaticImageData[]) {
  setInterval(function () {
    const randomNum = Math.floor(Math.random() * myImages.length);
    e.src = myImages[randomNum];
  }, 1000);
}
