import React from "react";
import FooterCol from "./FooterCol";
import logo from "/public/Footer/LogoFooter.svg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = ({ data }) => {
  return (
    <footer
      className="bg-[#18181b] px-4 py-10 text-white md:px-[9.5%] scroll-mt-20"
      id="Contact">
      <div className="mb-16">
        <ul className="flex flex-wrap justify-between gap-y-10 items-baseline">
          <li className="py-4">
            <FooterCol
              title={"Company"}
              array={["About", "Features", "Works", "Career"]}
            />
          </li>
          <li>
            <FooterCol
              title={"Help"}
              array={[
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ]}
            />
          </li>
          <li>
            <FooterCol
              title={"Resources"}
              array={[
                "Free eBooks",
                "Development Tutorial",
                "How to - Blog",
                "Youtube Playlist",
              ]}
            />
          </li>
          <li>
            <FooterCol
              title={"Extra Links"}
              array={[
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ]}
            />
          </li>
        </ul>
      </div>
      <div className="flex flex-row flex-wrap justify-between gap-y-9 items-center md:flex-nowrap">
        <img src={logo} alt="" />
        <p className="order-3 text-center w-full md:max-w-[308px] md:order-2">
          © Copyright 2021, All Rights Reserved
        </p>
        <ul className="flex gap-3 justify-center items-center order-2 md:order-3">
          <li className="group max-w-fit">
            <FaTwitter className="px-2 w-auto py-2 h-auto border-1 border-gray-600 rounded-[50%] group-hover:bg-[#2563eb] transition-all duration-300 cursor-pointer" />
          </li>
          <li className="group max-w-fit">
            <FaFacebookF className="px-2 w-auto py-2 h-auto border-1 border-gray-600 rounded-[50%] group-hover:bg-[#2563eb] transition-all duration-300 cursor-pointer" />
          </li>
          <li className="group max-w-fit">
            <FaInstagram className="px-2 w-auto py-2 h-auto border-1 border-gray-600 rounded-[50%] group-hover:bg-[#2563eb] transition-all duration-300 cursor-pointer" />
          </li>
          <li className="group max-w-fit">
            <FaGithub className="px-2 w-auto py-2 h-auto border-1 border-gray-600 rounded-[50%] group-hover:bg-[#2563eb] transition-all duration-300 cursor-pointer" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
