import Header from "@/components/header";

import bannerImgNew from "@/assets/images/banner-img-new.jpg";
import whoWeAre from "@/assets/images/who-we-are.png";
import ourMission from "@/assets/images/our-mission.png";
import placeholder from "@/assets/images/placeholder.png";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "@/components/footer";

import OurServices from "@/components/ourServices";
import ArticleSlider from "@/components/articleSlider";
import Subscription from "@/components/subscription";
import { Button1 } from "@/components/getStartedButton/getStartedButton";
import ArticleImages from "@/components/articleImages";
import OurProcess from "@/components/ourProcess";
import { TESTIMONIALS } from "@/utils/constants";

export default async function Index() {
  return (
    <>
      <Header />
      <main>
        <section
          className={`md:bg-[url(./../assets/images/banner-bg.png)] md:bg-no-repeat md:bg-right-top	relative overflow-hidden pt-40 pb-20`}
        >
          <div className="container text-center md:text-left">
            <h2 className="text-2xl	md:text-[44px] mb-6 text-black max-w-4xl uppercase leading-none ">
              Elevate Your{" "}
              <span className={`text-primary block md:inline`}>Style</span> with
              Personalized Fashion Services
            </h2>
            <Button1 />
          </div>
          <Image
            className="hidden md:block w-full mt-6 object-cover px-3"
            src={bannerImgNew}
            alt="bannerImg"
          />
          <Image
            className="md:hidden w-full mt-6 object-cover px-3"
            src={bannerImgNew}
            alt="bannerImg2"
          />
        </section>
        <section className="py-12 md:pb-16">
          <div className="container">
            <h2 className="text-[40px] md:text-[84px] leading-none text-black font-medium text-center md:text-left">
              INTRO
            </h2>
            <p className="max-w-screen-lg	text-center md:text-left mt-6 md:mt-0">
              Stylrev is your go-to solution for personalized fashion and
              wardrobe enhancement. Our mission is to help you express your
              unique style through expert shopping, wardrobe organization, and
              event styling. We offer virtual consultations to tailor our
              services to your needs. Stay ahead with exclusive trend insights
              and personalized advice. Discover how Stylrev can transform your
              style.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-20">
              <div className="border-b hidden md:block"></div>
              <div className="p-6 border md:border-r-0">
                <Image src={whoWeAre} alt="who-we-are" />
              </div>
              <div className="p-6 border -order-1 md:order-none	">
                <h3 className="text-2xl font-semibold text-black">
                  Who we are
                </h3>
                <p className="mt-4">
                  Stylrev is a team of dedicated industry professionals in
                  personal styling, photoshoots, bridal, and runway. We bring
                  this expertise directly to your doorstep, creating a
                  personalized virtual environment where you receive tailored
                  styling recommendations and wardrobe solutions. Our commitment
                  is to make fashion accessible and enjoyable, ensuring you feel
                  empowered and stylish every day.
                </p>
              </div>
              <div className="p-6 border border-t-0">
                <h3 className="text-2xl font-semibold text-black">
                  Our Mission
                </h3>
                <p className="mt-4">
                  At Stylrev, our mission is to revolutionize personal styling
                  by bringing production-level expertise directly to your home.
                  We believe that every individual, regardless of body type or
                  age, deserves a wardrobe that complements their personality
                  and lifestyle. Our goal is to provide a unique and
                  personalized styling experience that lifts a significant
                  burden off your shoulders. You can trust that you are in good
                  hands with Stylrev, where our professional stylists ensure you
                  look and feel your best every day.
                </p>
              </div>
              <div className="p-6 border border-t-0 md:border-l-0">
                <Image src={ourMission} alt="who-we-are" />
              </div>
            </div>
          </div>
          <div className="hr"></div>
          <div></div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="relative py-12 md:py-32 bg-[#080609]">
              {/* <div className="absolute w-full h-full"></div> */}
              <div className="relative z-1 px-4 max-w-[720px] mx-auto">
                <h2 className="text-3xl text-white text-center uppercase font-medium">
                  Look and Feel Your Best with Our Personal Stylists{" "}
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16" id="getstarted">
          <div className="container">
            <OurProcess />
            <ArticleImages />
            <div className="md:hidden mt-12 ">
              <ArticleSlider />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 pb-20 overflow-hidden">
          <div className="container">
            <h2 className="text-[40px] md:text-[84px] leading-none uppercase text-gray-color md:text-center">
              Our <span className="font-medium text-black">Services</span>
            </h2>
            <p className="mt-4 md:text-center max-w-[800px] mx-auto">
              Stylrev is your go-to solution for personalized fashion and
              wardrobe enhancement. Our mission is to help you express your
              unique style through expert shopping, wardrobe organization, and
              event styling. We offer virtual consultations to tailor our
              services to your needs. Stay ahead with exclusive trend insights
              and personalized advice. Discover how Stylrev can transform your
              style.
            </p>
            <OurServices />
          </div>
        </section>
        <section id="booking">
          <br />
          <br />
        </section>
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-[40px] md:text-[64px] leading-none font-medium uppercase text-gray-color max-w-3xl	mx-auto text-center">
              We’ve got a <span className="text-black">perfect plan</span> for
              you
            </h2>
            <Subscription />
          </div>
        </section>
        <div className="bg-[#EEEEEE] py-12 flex overflow-hidden gap-12 justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item) => (
            <Image key={item} src={placeholder} alt="placeholder" />
          ))}
        </div>
        <section className="py-12 md:py-32 md:px-10 max-[768px]:pb-20">
          <div className="container">
            <h2 className="text-[40px] md:text-[64px] leading-none uppercase text-gray-color max-w-xl	mx-auto md:text-center">
              Client{" "}
              <span className="text-black font-medium">Testimonials</span>
            </h2>
            <Carousel className="w-full max-w-4xl mx-auto mt-12">
              <CarouselContent>
                {TESTIMONIALS?.map((feedback, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="rounded-3xl">
                        <CardContent className="p-8">
                          <svg
                            width="105"
                            height="83"
                            viewBox="0 0 105 83"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M45.92 36.7133V82.6333H0V36.0573C0 4.5693 29.52 0.633301 29.52 0.633301L33.456 9.8173C33.456 9.8173 20.336 11.7853 17.712 22.2813C15.088 30.1533 20.336 36.7133 20.336 36.7133H45.92ZM104.96 36.7133V82.6333H59.04V36.0573C59.04 4.5693 88.56 0.633301 88.56 0.633301L92.496 9.8173C92.496 9.8173 79.376 11.7853 76.752 22.2813C74.128 30.1533 79.376 36.7133 79.376 36.7133H104.96Z"
                              fill="white"
                            />
                          </svg>
                          <p className="text-sm text-black mt-12">
                            <strong>{feedback?.title || ""}</strong>
                          </p>
                          <p className="italic text-lg text-lightGray mb-12 mt-5">
                            “{feedback?.description || ""}”
                          </p>
                          <span className="text-2xl text-black block font-semibold">
                            {feedback?.name || ""}
                          </span>
                          {/* <span className="text-sm text-[#828282]">
                            Public Speaker
                          </span> */}
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="max-[768px]:top-[107%] max-[768px]:left-0" />
              <CarouselNext className="max-[768px]:top-[107%] max-[768px]:left-12" />
            </Carousel>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
