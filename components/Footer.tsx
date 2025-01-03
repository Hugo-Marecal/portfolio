"use client";
import React from "react";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full c-space" id="contact">
      <div className="max-w-7xl mx-auto border-t border-black-300 py-7 flex md:flex-row flex-col-reverse justify-between items-center gap-5">
        <p className="md:text-base text-sm md:font-normal font-extralight">
          Copyright © 2024 - Hugo Marecal
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.href}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={profile.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
