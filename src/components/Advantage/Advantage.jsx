import clsx from "clsx";
import React from "react";

const Advantages = ({ url, h2, p, reverse }) => {
  return (
    <ul
      className={clsx(
        "px-16 flex flex-col justify-center items-center gap-4 md:px-38 md:justify-between",
        reverse ? "md:flex-row-reverse" : "flex-row"
      )}>
      <img src={url} alt="image-advantage" className="w-85.75 md:w-143" />
      <div className="flex flex-col justify-center items-center gap-4 md:items-start md:gap-7.5">
        <h2 className="text-center text-[32px] color-[#12141D] font-bold leading-10 max-w-73 md:text-left md:text-5xl md:max-w-110 md:leading-14">
          {h2}
        </h2>
        <p className="text-center leading-6.5 min-w-82 md:text-left md:max-w-110">
          {p}
        </p>
      </div>
    </ul>
  );
};

export default Advantages;
