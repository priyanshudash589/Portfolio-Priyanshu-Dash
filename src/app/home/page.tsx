"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <>
      <div className="h-screen absolute top-0 w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-[6rem] text-4xl text-white relative z-20")}>
          Priyanshu Dash
        </h1>
        <br />
        <br />
        <br />
        <p className="text-center mt-2 text-neutral-300 tracking-[5px] text-xl relative z-20">
            Full Stack Developer | DevOps Engineer | Blockchain Enthusiast
        </p>
      </div>
    </>
  );
}
