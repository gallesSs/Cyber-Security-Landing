import clsx from "clsx";
import React from "react";

const Advantages = ({ url, h2, p, reverse }) => {
  return (
    <div
      className={clsx(
        "px-4 flex flex-col justify-center items-center gap-4 xl:justify-between lg:px-[9.5%]",
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      )}>
      <img src={url} alt="image-advantage" className="w-85.75 xl:w-143" />
      <div
        className={clsx(
          "flex flex-col justify-center items-center gap-4 md:items-start lg:gap-7.5 lg:w-full",
          reverse ? "lg:items-start" : "lg:items-end"
        )}>
        <h2 className="text-center text-[32px] color-[#12141D] font-bold leading-10 max-w-73 lg:text-left md:text-[37px] md:max-w-110 md:leading-[120%] lg:leading-[118%] 2xl:text-5xl">
          {h2}
        </h2>
        <p className="text-center leading-6.5 min-w-82 lg:text-left md:max-w-110">
          {p}
        </p>
      </div>
    </div>
  );
};

export default Advantages;
