import imgMob from "/public/Hero/hero-mob.png";
import img from "/public/Hero/hero.png";
import { IoIosSearch } from "react-icons/io";
import s from "./Hero.module.css"; //grid template areas only
import bg from "/public/Hero/BG.png";
import { useState, useEffect } from "react";

const Hero = () => {
  const [bgStyle, setbgStyle] = useState({});
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1280) {
        setbgStyle({
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "contain",
        });
      } else {
        setbgStyle({});
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      style={bgStyle}
      className="bg-[#fafafa] w-full bg-no-repeat bg-right bg-contain px-4 flex flex-col items-center lg:px-[9.5%] lg:flex-row-reverse pt-12 lg:gap-12 lg:items-center lg:justify-center mb-15 md:mb-20 xl:pb-25">
      <div className="flex flex-col items-center justify-center mb-11 gap-4 lg:items-start lg:max-w-[60%] xxl:max-w-[40%]">
        <p className="text-[#F43F5E] text-xl mb-1 font-medium leading-7 text-center lg:text-start">
          Ensuring maximum security
        </p>
        <h1 className="text-[#12141D] font-bold text-[40px] text-center leading-13 md:text-[51px] md:leading-[120%] lg:text-start lg:text-[62px] lg:leading-[115%] xl:text-[72px] xl:leading-[110%] xxl:text-[80px] xxl:leading-[100%]">
          Protect all your data with strong security access
        </h1>
        <p className="text-[#12141D] text-xl font-normal leading-[160%] text-center mb-4 lg:text-start">
          This is software that protects all your data, including strong
          security access. Use data as needed and provide security.
        </p>
        <button className="flex gap-2.5 justify-center items-center px-5 py-4 bg-[#EF4444] text-white rounded-[3px] font-semibold max-w-68 transition-all duration-300 hover:bg-red-600 active:bg-red-600 hover:scale-102 cursor-pointer">
          <IoIosSearch />
          Scan Your Website - Free!
        </button>
      </div>

      <picture className="lg:max-w-[38%] en:min-w-[606px]">
        <source srcSet={img} media="(min-width: 768px)" />
        <img src={imgMob} alt="heroImg" />
      </picture>
    </section>
  );
};

export default Hero;
