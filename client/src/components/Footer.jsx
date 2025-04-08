import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="container flex items-center justify-between gap-4 px-4 py-3 mx-auto mt-20 2xl:px-20">
      <img width={160} src={assets.logo} alt="" />
      <p className="flex-1 pl-4 text-sm text-gray-500 border-gray-400 border-1 max-sm:hidden">
        Copyright @Harshani.dev | All right reserved.
      </p>
      <div className="flex gap-2.5">
        <img width={40} src={assets.facebook_icon} alt="" />
        <img width={40} src={assets.twitter_icon} alt="" />
        <img width={40} src={assets.instagram_icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
