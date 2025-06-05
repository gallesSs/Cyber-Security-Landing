import imgMob from "../../assets/Hero/hero-mob.png";
import img from "../../assets/Hero/hero.png";
import { IoIosSearch } from "react-icons/io";
import s from "./Hero.module.css"; //grid template areas only

const Hero = () => {
  return (
    <section
      className={`flex flex-col justify-center items-center gap-4 md:grid ${s.section}`}>
      <p className={s.motto}>Ensuring maximum security</p>
      <h1 className={s.header}>
        Protect all your data with strong security access
      </h1>
      <p className={s.text}>
        This is software that protects all your data, including strong security
        access. Use data as needed and provide security.
      </p>
      <button className={s.btn}>
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
