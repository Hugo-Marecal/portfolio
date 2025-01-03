import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" md:pb-20 pt-36">
      <div className=" h-fit lg:h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Portfolio de Hugo
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transformer des Concepts en Solutions Web Concrètes"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hey, Je suis Hugo, Développeur FullStack JavaScript.
          </p>

          <a
            href="https://github.com/Hugo-Marecal"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="pt-10 md:pt-0"
          >
            <MagicButton
              title="Voir mon travail"
              icon={
                <Image
                  src="/git.svg"
                  alt="github logo"
                  width={24}
                  height={24}
                />
              }
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
