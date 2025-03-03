import React, { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Button from "../../atoms/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex justify-between items-center mb-6 px-4 md:px-0">
      <img
        src="src/assets/durchex.svg"
        alt="Durchex Logo"
        className="w-32 md:w-auto"
      />
      <button className="text-white text-2xl md:hidden" onClick={toggleMenu}>
        <List size={28} weight="bold" />
      </button>
      <div className="hidden md:flex gap-6 items-center">
        <p className="text-[#D0CBDC] text-lg cursor-pointer">Contact us</p>
        <Button>Join Waitlist</Button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-20">
          <div className="fixed top-0 right-0 w-64 h-full bg-[#1C1A1E] shadow-lg p-6 z-30 transition-transform transform translate-x-0">
            <button className="text-white text-2xl mb-6" onClick={toggleMenu}>
              <X size={28} weight="bold" />
            </button>

            <div className="flex flex-col gap-6">
              <p className="text-[#D0CBDC] text-lg cursor-pointer">
                Contact us
              </p>
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
