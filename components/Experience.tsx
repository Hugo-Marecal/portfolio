import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20 bg-purple w-full" id="experience">
      <div className="max-w-7xl mx-auto c-space">
        <h1 className="heading ">Mon Experience</h1>

        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center jut p-3 py-6 md:p-5 lg:p-10 gap-2">
                <Image
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16 self-center"
                  width={128}
                  height={128}
                />
                <div className="lg:ms-5">
                  <h1 className="text-center md:text-start text-xl md:text-xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-justify md:text-start text-white-100 mt-3 font-semibold mx-2 md:mx-0">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
