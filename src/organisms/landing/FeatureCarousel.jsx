import React from "react";
import { Carousel } from "antd";

const FeatureCarousel = () => {
  const cardStyle =
    "w-full max-w-[1200px] mx-auto h-auto bg-[#1C1A1E] bg-opacity-60 rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center justify-center shadow-lg gap-4 md:gap-12";

  return (
    <Carousel autoplay dots className="mt-10 px-4">
      {["gas", "flash", "wallet", "community"].map((icon, index) => (
        <div key={index}>
          <div className={cardStyle}>
            <img
              src={`/src/assets/${icon}.svg`}
              alt={`${icon} Icon`}
              className="object-contain mb-4 md:mb-0 w-20 md:w-auto"
            />
            <div className="text-center md:text-left">
              <h2 className="text-white text-xl md:text-2xl font-semibold">
                {icon === "gas" && "Low gas fees"}
                {icon === "flash" && "Lightning-fast transactions"}
                {icon === "wallet" && "Secure Wallet Integration"}
                {icon === "community" && "Community Driven"}
              </h2>
              <p className="text-[#CAC7D1] mt-2 text-sm md:text-base">
                {icon === "gas" &&
                  "Buy and sell NFTs with zero gas fees and ultra-low transaction costs."}
                {icon === "flash" &&
                  "Durchex is built on Polygon for extreme speed and efficiency."}
                {icon === "wallet" &&
                  "Experience seamless and secure wallet integrations."}
                {icon === "community" &&
                  "Join a thriving community of creators and collectors."}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default FeatureCarousel;
