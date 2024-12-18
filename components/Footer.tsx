"use client";
import React from "react";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full py-7 border-t border-black-300" id="contact">
      <div className="flex md:flex-row flex-col-reverse justify-between  items-center gap-5">
        <p className="md:text-base text-sm md:font-normal font-extralight">
          Copyright © 2024 Hugo Marecal
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              onClick={() => window.open(profile.href, "_blank")}
            >
              <img src={profile.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
