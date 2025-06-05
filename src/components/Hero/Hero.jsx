import imgMob from "../../assets/Hero/hero-mob.png";
import img from "../../assets/Hero/hero.png";
import { IoIosSearch } from "react-icons/io";
import s from "./Hero.module.css"; //grid template areas only
import bg from "../../assets/Hero/BG.png";

const Hero = () => {
  return (
    <section
      className={`pt-12.5 bg-[#FAFAFA] px-4 flex flex-col justify-center items-center gap-4 md:grid ${s.section} md:px-38 md:gap-x-12.5 md:pt-42 md:bg-[${bg}]`}>
      <p
        className={`${s.motto} text-[#F43F5E] text-xl font-medium leading-7 mb-1 text-center md:text-start`}>
        Ensuring maximum security
      </p>
      <h1
        className={`${s.header} text-[#12141D] font-bold text-[40px] text-center leading-13 md:text-start md:max-w-159 md:text-[80px] md:leading-20`}>
        Protect all your data with strong security access
      </h1>
      <p
        className={`${s.text} text-[#12141D] text-xl font-normal leading-8 text-center mb-3.5 md:text-start`}>
        This is software that protects all your data, including strong security
        access. Use data as needed and provide security.
      </p>
      <button
        className={`${s.btn} flex gap-2.5 justify-center items-center px-5 py-4 bg-[#EF4444] text-white rounded-[3px] font-semibold max-w-68`}>
        <IoIosSearch />
        Scan Your Website - Free!
      </button>
      <picture className={s.img}>
        <source srcset={img} media="(min-width: 768px)" />
        <img src={imgMob} alt="heroImg" />
      </picture>
    </section>
  );
};

export default Hero;
