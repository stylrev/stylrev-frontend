import Header from "@/components/header";
import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Ama from "@/assets/images/Ama-Kalispell-1_.jpg";

export default function About() {
  return (
    <>
      <Header />

      <section className="pt-36 md:pt-36" id="about">
        {/* <div className="md:flex px-4 lg:px-8">
          <NavigationMenuClient/>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-black text-[40px] md:text-6xl font-bold uppercase">
              About
            </h1>
            <p className="md:mt-6">
              Welcome to Stylrev, your ultimate destination for personalized
              fashion and wardrobe transformation. Our mission is to help you
              express your unique style and feel confident in every outfit you
              wear. With our expert services, we make fashion accessible,
              enjoyable, and tailored to your individual needs.
            </p>
            <Image
              src={about1}
              alt="about1"
              className="mt-7 w-full object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto hidden md:block">
          <Image
            src={about2}
            alt="about2"
            className="mt-4 w-full max-w-2xl object-cover"
          />
        </div> */}
        {/* </section>
      <section className="my-12 md:my-32" id="founder"> */}
        <div className="container">
          <h2 className="text-[40px] md:text-[64px] max-w-2xl leading-none font-medium uppercase text-gray-color text-center md:text-left">
            From <br /> <span className="text-black">The Founder</span>
          </h2>
          <div className="md:grid md:grid-cols-2 mt-10 md:mt-20">
            <div className="py-[24px] px-[16px] lg:px-[100px] border mt-4 md:mt-0 max-h-[552px] h-100 flex justify-center flex-col">
              <h3 className="text-2xl font-semibold text-black">Ama Osborne</h3>
              <i className="text-lg text-gray-color">Founder, CEO</i>
              <p className="mt-4 text-base">
                Hi, my name is Ama Osborne. I have been in the fashion industry
                for over a decade, perfecting my skills across various areas of
                styling. My extensive experience spans personal styling, bridal,
                photoshoots, and event styling. I have earned a reputation for
                excellence by having a keen eyefor detail and the ability to
                understand and enhance my clients' unique styles. I have had the
                pleasure of working with thousands of diverse clients, ensuring
                that each individual feelsconfident and stylish, no matter the
                occasion.
              </p>
              <p className="mt-2">
                I am passionate about making personal styling more accessible
                and affordable for everyone. Through the Stylrev process I bring
                the luxury of a personal stylist to your fingertips.
              </p>
            </div>
            <div className="p-[24px] border mt-[24px] md:mt-[0px] max-h-[552px]">
              <Image
                src={Ama}
                className="h-full object-cover"
                alt="who-we-are"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="my-12 md:my-32" id="mission">
        <div className="container">
          <h2 className="text-[40px] md:text-[64px] leading-none font-medium uppercase text-gray-color">
            The <span className="text-black">Mission</span>
          </h2>
          <p className="mt-6 max-w-3xl">
            At Stylrev, our mission is to transform personal styling by
            delivering top-notch expertise directly to your home. We believe
            that everyone, regardless of body type or age, deserves a wardrobe
            that truly reflects who they are. Our goal is to make you feel
            confident and stylish while minimizing the hassle and time
            commitment. You deserve the relief and confidence of being in good
            hands with a professional stylist that understands your needs and
            busy schedule.
          </p>
          <p className="mt-3 max-w-3xl">
            It is imperative that our clients understand the difference between
            Stylrev and other personal styling services: our method is tailored
            specifically to each client, ensuring that your individual needs are
            met. Unlike services that provide a one-size-fits-all approach, we
            offer a personalized human experience crafted by a dedicated
            stylist, not an algorithm. We provide you a seamless and enjoyable
            way to enhance your wardrobe, making fashion accessible and fun.
            With Stylrev, you will have the support and guidance you need to
            look amazing and feel great, every single day.
          </p>
          {/* <Image
            className="block md:hidden w-full mt-7 object-cover"
            src={mission2Mobile}
            alt="mission Mobile"
          />
          <Image
            className="hidden md:block w-full mt-7 object-cover"
            src={mission2}
            alt="mission2"
          /> */}
        </div>
      </section>
      <Footer />
    </>
  );
}
