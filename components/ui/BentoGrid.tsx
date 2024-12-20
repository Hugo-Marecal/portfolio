"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

import dynamic from "next/dynamic";
import Image from "next/image";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_MY_EMAIL || "");

    setCopied(true);
    setShowConfetti(true);

    setTimeout(() => setShowConfetti(false), 3000);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-white justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
              width={1920}
              height={1080}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {id === 4 ? (
            <div className="relative -bottom-5 w-68 md:w-52 h-32">
              {spareImg && (
                <Image
                  src={spareImg}
                  alt={spareImg}
                  className="object-center w-full h-full"
                  width={1920}
                  height={1080}
                />
              )}
            </div>
          ) : (
            spareImg && (
              <Image
                src={spareImg}
                alt={spareImg}
                className="object-cover object-center w-full h-full"
                width={1920}
                height={1080}
              />
            )
          )}
        </div>

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 ">
            {title}
          </div>
          <div className="font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 w-36">
            {description}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                {showConfetti && (
                  <Player
                    autoplay
                    loop={false}
                    src={animationData}
                    className="w-[200px] h-[200px] md:w-[300px] xl:w-[400px] md:h-[300px]"
                  />
                )}
              </div>

              <MagicButton
                title={copied ? "Email copié" : "Copier mon email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
