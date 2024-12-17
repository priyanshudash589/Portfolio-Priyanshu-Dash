"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import git from "../../public/git.gif";
import html from "../../public/html.gif";
import firebase from "../../public/firebase.gif";
import js from "../../public/js.gif";
import react from "../../public/react.gif";
import node from "../../public/node.gif";
import github from "../../public/github.gif";

export default function Hero() {
  return (
    <div className="h-screen relative bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      
      <div className="relative z-30 text-center space-y-4 md:space-y-6 lg:space-y-8">
        <h1
          className={cn(
            "text-white",
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
            "leading-tight",
            "font-bold"
          )}
        >
          Priyanshu Dash
        </h1>
        <p
          className={cn(
            "text-neutral-300",
            "text-sm sm:text-base md:text-lg lg:text-xl",
            "tracking-wider md:tracking-[0.2em]",
            "px-4 max-w-4xl mx-auto"
          )}
        >
          Full Stack Developer | DevOps Engineer | Blockchain Enthusiast
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black to-transparent py-4">
        <div className="flex justify-around items-center max-w-7xl mx-auto px-4">
          {[git, html, firebase, js, react, node, github].map((src, index) => (
            <div key={index} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
              <Image
                src={src}
                alt={src.src.split('/').pop()?.split('.')[0] || 'tech icon'}
                layout="responsive"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

