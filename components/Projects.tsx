"use client";
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/Pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20 w-full c-space" id="projets">
      <h1 className="heading">
        Voici un éventail de mets{" "}
        <span className="text-purple">récents projets</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            onClick={() => window.open(link, "_blank")}
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl rounded-3xl">
                  {/* <img src="/bg.png" alt="bg-img" /> */}
                  <Image
                    src="/bg.png"
                    alt="bg-img"
                    width={1920}
                    height={1080}
                    quality={100}
                  />
                </div>
                <Image
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0 right-0.5 lg:rounded-3xl"
                  width={1920}
                  height={1080}
                  priority={true}
                  quality={100}
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:font-normal font-light text-white-100 text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${4 * index * 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        className="p-2"
                        width={128}
                        height={128}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <p className="flex lg:text-lg md:text-xs text-sms font-extrabold text-[#5927f0]">
                    Visiter le site
                  </p>
                  <FaLocationArrow className="ms-3" color="#5927f0" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
