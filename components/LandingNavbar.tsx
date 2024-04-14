"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Inter } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const font = Inter({
  weight: "800",
  subsets: ["latin"],
});

export default function LandingNavbar() {
  const { isSignedIn } = useAuth();

  return (
    <nav className="pt-8 px-4 bg-transparent flex items-center justify-between">
      <Link href={"/"} className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image src="/logo_v1.png" fill alt="Logo" />
        </div>
        <h1
          className={cn(
            "bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-300 bg-clip-text text-transparent text-2xl",
            font.className
          )}
        >
          PolyGen AI
        </h1>
      </Link>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant={"premium"}
            className="p-4 md:p-6 rounded-full font-semibold"
          >
            Sign Up
            <ArrowUpRight/>
          </Button>
        </Link>
      </div>
    </nav>
  );
}
