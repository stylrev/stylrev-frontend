"use client"
import { Button } from "@/components/ui/button";



const scrollToSection = (e:any, id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  
export const Button1 = ()=>{
    return(
        <Button
        className="rounded-full pr-0 pl-12 gap-5 py-8 mx-auto md:mx-0"
        size="lg"
        onClick={(e) => scrollToSection(e, 'getstarted')}      >
        Get Started
        <svg
          width="68"
          height="66"
          viewBox="0 0 68 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_29_6091)">
            <rect
              x="9"
              y="9"
              width="50"
              height="48"
              rx="24"
              fill="white"
            />
            <path
              d="M39.4697 30.5303C39.1768 30.2374 39.1768 29.7626 39.4697 29.4697C39.7626 29.1768 40.2374 29.1768 40.5303 29.4697L43.5283 32.4676C43.535 32.4743 43.5416 32.4811 43.5481 32.4881C43.6733 32.6221 43.75 32.8021 43.75 33C43.75 33.1006 43.7302 33.1966 43.6943 33.2842C43.6577 33.3738 43.603 33.4577 43.5303 33.5303L40.5303 36.5303C40.2374 36.8232 39.7626 36.8232 39.4697 36.5303C39.1768 36.2374 39.1768 35.7626 39.4697 35.4697L41.1893 33.75H25C24.5858 33.75 24.25 33.4142 24.25 33C24.25 32.5858 24.5858 32.25 25 32.25H41.1893L39.4697 30.5303Z"
              fill="#0F52BA"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_29_6091"
              x="0"
              y="0"
              width="68"
              height="66"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_29_6091"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_29_6091"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Button>
    )

} 