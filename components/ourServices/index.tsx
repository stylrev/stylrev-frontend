"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { getSubscription } from "@/utils/helpers/subscriptions";
import { createClient } from "@/utils/supabase/client";
import "./services.css";
import Login from "../login";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { InlineWidget } from "react-calendly";
import Calendly from "../calendly";

type Service = {
  title: string;
  image: string;
  id: number;
  description: string;
};

export default () => {
  const [activeSlide, setActiveSlide] = useState(3);
  const [servicesList, setServicesList] = useState<Service[]>([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState<boolean>(false);
  const [subscriptionResponse, setSubscriptionResponse] = useState<any>(null);

  const subscribe = async (id: number) => {
    setIsLoading(true);
    const response = await getSubscription(setIsLoading, id);
    if (response) {
      setSubscriptionResponse(response);
      setIsCalendlyOpen(true);
    }
  };

  const next = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % servicesList.length);
    nextAnimation();
  };

  const previous = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? servicesList.length - 1 : prevSlide - 1
    );
    prevAnimation();
  };

  const findPrev1Slide = () =>
    activeSlide === 0 ? servicesList.length - 1 : activeSlide - 1;

  const findPrev2Slide = () => {
    if (activeSlide <= 1) {
      return servicesList.length - (2 - activeSlide);
    }
    return activeSlide - 2;
  };

  const prevAnimation = () => {
    const slide = document.getElementById("active-slide");
    if (slide) {
      slide.classList.add("active-slide-image-prev");
      setTimeout(() => {
        slide.classList.remove("active-slide-image-prev");
      }, 500);
    }
  };

  const findNext1Slide = () =>
    activeSlide === servicesList.length - 1 ? 0 : activeSlide + 1;

  const findNext2Slide = () => {
    if (activeSlide >= servicesList.length - 2) {
      return activeSlide + 2 - servicesList.length;
    }
    return activeSlide + 2;
  };

  const nextAnimation = () => {
    const slide = document.getElementById("active-slide");
    if (slide) {
      slide.classList.add("active-slide-image-next");
      setTimeout(() => {
        slide.classList.remove("active-slide-image-next");
      }, 500);
    }
  };

  const getServices = useCallback(async () => {
    try {
      setIsLoader(true);
      const supabase = createClient();
      const { data: services, error } = await supabase
        .from("services")
        .select()
        .eq("subscription", false);

      if (error) {
        throw error;
      }
      if (services) {
        setServicesList([...services]);
      }
    } catch (error) {
      alert("Error loading subscriptions!");
    } finally {
      setIsLoader(false);
    }
  }, []);

  const checkUser = useCallback(async () => {
    const supabase = createClient();
    const { data: user } = await supabase.auth.getUser();

    if (user) {
      setUser(user?.user);
    }
  }, []);

  useEffect(() => {
    getServices();
    checkUser();
  }, []);

  return (
    <div className="grid grid-cols-1 mt-16 items-center">
      {isLoader ? (
        <div className="flex justify-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
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
        </div>
      ) : servicesList?.length ? (
        <>
          <div className="flex relative items-center">
            <div className="flex items-center justify-center w-[1400px] overflow-hidden gap-1 sm:gap-5">
              <div
                className={"relative opacity-15"}
                onClick={() => {
                  setActiveSlide(findPrev2Slide());
                  prevAnimation();
                }}
              >
                <div className="layer flex items-end justify-center">
                  <h5 className="text-lg text-white text-center pb-2">
                    {servicesList[findPrev2Slide()]?.title}
                  </h5>
                </div>
                <Image
                  className={`w-full object-cover max-h-[300px] min-h-[300px] max-w-[200px] min-w-[200px] grayscale`}
                  src={servicesList[findPrev2Slide()]?.image}
                  alt="service"
                  width={200}
                  height={300}
                />
              </div>
              <div
                className={"relative left-slide"}
                onClick={() => {
                  setActiveSlide(findPrev1Slide());
                  prevAnimation();
                }}
              >
                <div className="layer flex items-end justify-center">
                  <h5 className="text-lg text-white pb-2 text-center">
                    {servicesList[findPrev1Slide()]?.title}
                  </h5>
                </div>
                <Image
                  className={`w-full object-cover max-h-[300px] min-h-[300px] max-w-[200px] min-w-[200px] grayscale`}
                  src={servicesList[findPrev1Slide()]?.image}
                  alt="service"
                  width={200}
                  height={300}
                />
              </div>
              <div className={"active-slide"}>
                <span className="text-white text-2xl mb-5 block">
                  <span className="text-3xl">0{activeSlide + 1}</span>/06
                </span>
                <Image
                  id="active-slide"
                  className={`w-full object-cover max-h-[300px] min-h-[300px] md:min-h-[321px] max-w-[398px] min-w-[250px] sm:min-w-[300px] md:min-w-[398px]`}
                  src={servicesList[activeSlide]?.image}
                  alt="service"
                  width={507}
                  height={357}
                />
                <div className="flex justify-between mt-7 flex-col gap-[24px]">
                  <div className="text-white min-h-[100px] md:min-h-[auto]">
                    <h5 className="text-xl">
                      {servicesList[activeSlide]?.title}
                    </h5>
                    <p className="mt-1">
                      {servicesList[activeSlide]?.description}
                    </p>
                  </div>
                  {user ? (
                    <Button
                      size="lg"
                      className="bg-secondary hover:bg-secondary/90 rounded-full w-max mt-3 md:mt-0"
                      onClick={() => subscribe(servicesList[activeSlide]?.id)}
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
                      Get Started
                    </Button>
                  ) : (
                    <Login>
                      <Button
                        size="lg"
                        className="bg-secondary hover:bg-secondary/90 rounded-full w-max mt-3 md:mt-0"
                      >
                        Get Started
                      </Button>
                    </Login>
                  )}
                </div>
              </div>
              <div
                className={"relative right-slide"}
                onClick={() => {
                  setActiveSlide(findNext1Slide());
                  nextAnimation();
                }}
              >
                <div className="layer flex items-end justify-center">
                  <h5 className="text-lg text-white text-center pb-2">
                    {servicesList[findNext1Slide()]?.title}
                  </h5>
                </div>
                <Image
                  className={`w-full object-cover max-h-[300px] min-h-[300px] max-w-[200px] min-w-[200px] grayscale`}
                  src={servicesList[findNext1Slide()]?.image}
                  alt="service"
                  width={200}
                  height={300}
                />
              </div>
              <div
                className={"relative opacity-15"}
                onClick={() => {
                  setActiveSlide(findNext2Slide());
                  nextAnimation();
                }}
              >
                <div className="layer flex items-end justify-center">
                  <h5 className="text-lg text-white text-center pb-2">
                    {servicesList[findNext2Slide()]?.title}
                  </h5>
                </div>
                <Image
                  className={`w-full object-cover max-h-[300px] min-h-[300px] max-w-[200px] min-w-[200px] grayscale`}
                  src={servicesList[findNext2Slide()]?.image}
                  alt="service"
                  width={200}
                  height={300}
                />
              </div>
            </div>
            <div className="flex gap-2 absolute bottom-0 mb-[-50px] sm:m-auto left-0 right-0 sm:justify-between w-[100%] max-w-[560px] z-[10]">
              <Button size="icon" className="rounded-full" onClick={previous}>
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
              <Button size="icon" className="rounded-full" onClick={next}>
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
        </>
      ) : (
        <div className="flex justify-center">No services available</div>
      )}
      {/* {isCalendlyOpen && ( */}
      <Calendly
        isOpen={isCalendlyOpen}
        setIsOpen={setIsCalendlyOpen}
        subscription={subscriptionResponse}
      />
      {/* )} */}
    </div>
  );
};
