import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#F2ECFE] text-[#19171C] px-6 py-3.5 rounded-xl font-medium shadow-md hover:bg-[#dcd6f2] transition duration-300 cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
