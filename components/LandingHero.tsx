"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ArrowBigLeftDashIcon, ArrowUpRight } from "lucide-react";

const font = Inter({
  weight: "800",
  subsets: ["latin"],
});
const font_v1 = Inter({
  // weight: "500",
  subsets: ["latin"],
});

export default function LandingHero() {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-black font-bold py-24 text-center space-y-5 mx-4">
      <div
        className={cn(
          "text-5xl sm:text-6xl md:text-7xl lg:text-9xl space-y-6 px-8 tracking-tight",
          font.className
        )}
      >
        <h1>Say hello to</h1>
        <h1 className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-300 bg-clip-text text-transparent pb-4">
          PolyGen AI.
        </h1>
      </div>
      <div>
        <div className="text-2xl">
          {/* <h2>The easiest and quickest tool to turn any idea into reality. All creative freedom.</h2> */}
          {/* <h2>All in one tool for 
          <TypewriterComponent
            options={{
              strings: [
                "Text Generation",
                "Photo Generation",
                "Video Generation",
                "Audio Generation",
                "Code Generation",
              ],
              autoStart: true,
              loop: true,
            }}
          /> </h2> */}
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl font-semibold text-[#333333] py-5",
          font_v1.className
        )}
      >
        The easiest and quickest tool to turn any idea into reality. All creative freedom.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant={"premium"}
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold shadow-cyan-200/50 shadow-lg"
          >
            Start Generating For Free
            <ArrowUpRight />
          </Button>
        </Link>
      </div>
      <div
        className={cn(
          "text-zinc-400 text-xs md:text-sm font-normal pt-5",
          font_v1.className
        )}
      >
        No credit card required.
      </div>
    </div>
  );
}
