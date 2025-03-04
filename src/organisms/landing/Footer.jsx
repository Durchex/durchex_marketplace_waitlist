import React from "react";
import { EnvelopeSimpleOpen, Phone } from "@phosphor-icons/react";

//* images & metadata
import logo from "../../assets/durchex.svg";
import brand from "../../assets/brand.svg";

const Footer = () => {
  return (
    <footer className="pt-10">
      <div className="md:max-w-9xl md:mx-auto md:px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-36">
        <div>
          <div className="flex items-center mb-4">
            <img
              src={logo}
              alt="DURCHEX Logo"
              className=""
            />
          </div>
          <p className="text-[#CAC7D1] mb-5">
            The most secure and scalable multi-chain
            <br /> marketplace for crypto collectibles and NFTs
          </p>
          <p className="text-white mb-5">
            <span className="font-semibold">Launch date:</span> 15th March, 2025
          </p>
          <p className="text-[#CAC7D1]">© All rights reserved. 2025</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact us</h3>
          <p className="flex items-center text-[#CAC7D1] mb-4">
            <span className="mr-2">
              <EnvelopeSimpleOpen size={18} weight="fill" />
            </span>
            discoveroffice@durchex.com
          </p>
          <p className="flex items-center text-[#CAC7D1]">
            <span className="mr-2">
              <Phone size={18} weight="fill" />
            </span>
            +234 801 342 5496
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Features</h3>
          <ul className="text-[#CAC7D1] space-y-5">
            <li>Low Gas fees</li>
            <li>Lightning-fast transactions</li>
            <li>Multi-chain and fiat payment support</li>
            <li>Growing community</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={brand} alt="DURCHEX" />
      </div>
    </footer>
  );
};

export default Footer;
