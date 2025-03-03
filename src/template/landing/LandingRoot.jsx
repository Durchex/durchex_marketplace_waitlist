import React from "react";

//* components
import Header from "../../organisms/landing/Header";
import Button from "../../atoms/Button";
import FeatureCarousel from "../../organisms/landing/FeatureCarousel";
import CountdownTimer from "../../organisms/landing/CountdownTimer";
import Footer from "../../organisms/landing/Footer";

const LandingRoot = () => {
  return (
    <div className="h-[750px] bg-[url('/src/assets/mask.png')] bg-cover bg-center px-6 md:px-12 lg:px-24 pt-6">
      <Header />

      <div className="mt-10 md:mt-20 text-center">
        <h1 className="block md:hidden text-center font-bold text-3xl md:text-5xl mb-4">
          A new way to trade NFTs and Collectibles is coming
        </h1>
        <h1 className="hidden md:block font-bold text-3xl md:text-5xl mb-4">
          A new way to trade NFTs and
        </h1>
        <h1 className=" hidden md:block font-bold text-3xl md:text-5xl mb-6">
          Collectibles is coming
        </h1>
        <p className="block md:hidden text-center text-[#CAC7D1] mb-6 px-4 md:px-0">
          DURCHEX is built for creators, collectors, and traders. Enjoy seamless
          multi-chain support, low fees, and a thriving community. Sign up now
          to be among the first to experience it!
        </p>
        <p className="hidden md:block text-center text-[#CAC7D1] mb-6 px-4 md:px-0">
          DURCHEX is built for creators, collectors, and traders. Enjoy
          <br /> seamless multi-chain support, low fees, and a thriving
          community.
          <br /> Sign up now to be among the first to experience it!
        </p>
        <Button>Join Waitlist</Button>
      </div>


      <div className="flex justify-center items-center mb-10 md:mb-20">
        <img src="src/assets/globe.svg" alt="gl_be" />
      </div>

      <div className="bg-[url('/src/assets/violet.png')] bg-cover bg-center py-12 mb-24 md:mb-36">
        <h1 className="text-[#F2F1F4] text-center font-semibold text-2xl md:text-4xl mb-8">
          Building a feature-packed experience for you
        </h1>
        <FeatureCarousel />
      </div>

      <div className="mb-24 md:mb-36">
        <CountdownTimer />
      </div>

      <Footer />
    </div>
  );
};

export default LandingRoot;
