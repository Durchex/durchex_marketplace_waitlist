import React from "react";
import { Carousel } from "antd";

//* images & metadata
import gas from "../../assets/gas.svg";
import flash from "../../assets/flash.svg";
import wallet from "../../assets/wallet.svg";
import community from "../../assets/community.svg";

const FeatureCarousel = () => {
  const cardStyle =
    "w-full max-w-[1200px] mx-auto h-auto bg-[#1C1A1E] bg-opacity-60 rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center justify-center shadow-lg gap-4 md:gap-12";

  const features = [
    {
      icon: gas,
      title: "Low gas fees",
      description:
        "Buy and sell NFTs with zero gas fees and ultra-low transaction costs.",
    },
    {
      icon: flash,
      title: "Lightning-fast transactions",
      description:
        "Durchex is built on Polygon for extreme speed and efficiency.",
    },
    {
      icon: wallet,
      title: "Secure Wallet Integration",
      description: "Experience seamless and secure wallet integrations.",
    },
    {
      icon: community,
      title: "Community Driven",
      description: "Join a thriving community of creators and collectors.",
    },
  ];

  return (
    <Carousel autoplay dots className="mt-10 px-4">
      {features.map((feature, index) => (
        <div key={index}>
          <div className={cardStyle}>
            <img
              src={feature.icon}
              alt={`${feature.title} Icon`}
              className="object-contain mb-4 md:mb-0 w-[333px] h-[261px] md:w-auto"
            />
            <div className="text-center md:text-left">
              <h2 className="text-white text-xl md:text-2xl font-semibold">
                {feature.title}
              </h2>
              <p className="text-[#CAC7D1] mt-2 text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default FeatureCarousel;
