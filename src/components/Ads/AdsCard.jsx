import React from "react";

const AdsCard = ({ title, subtitle, url }) => {
  return (
    <>
      <img className="mb-3.5 w-[45px]" src={url} alt="" />
      <h3 className="text-center font-bold text-[18px] leading-[133%] text-[#12141d]">
        {title}
      </h3>
      <p className="text-center leading-[162%]">{subtitle}</p>
    </>
  );
};

export default AdsCard;
