import React from "react";

const FooterCol = ({ title, array }) => {
  return (
    <ul className="flex flex-col justify-center">
      <li className="mb-4 text-[#71717a] leading-[162%] hover:text-red-600 transition-all duration-300 active:text-red-600 cursor-pointer">
        {title}
      </li>
      {array.map((item, index) => {
        return (
          <li
            className="leading-[275%] hover:text-red-600 transition-all duration-300 active:text-red-600 cursor-pointer"
            key={index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default FooterCol;
