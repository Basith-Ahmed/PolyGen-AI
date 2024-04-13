"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessagesSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import FreeCounter from "./FreeCounter";

const monserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessagesSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
  },
  {
    label: "Audio Generator",
    icon: Music,
    href: "/audio",
    color: "text-emerald-500",
  },
  {
    label: "Code Generator",
    icon: Code,
    href: "/code",
    color: "text-green-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

interface SidebarProp {
  apiLimitCount: number;
  isPro: boolean;
}

export default function Sidebar({ apiLimitCount = 0, isPro = false }: SidebarProp) {

  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#f0f4f9] text-white">
      <div className="p-4 md:pr-0 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-2 mb-14 w-full">
          <div className="relative w-8 h-8 mr-2">
            <Image fill alt="Logo" src={"/favicon.png"} />
          </div>
          <h1 className={cn("text-3xl font-bold text-[#5f6368]")}>
            PolyGen AI
            {/* <span className="gradient-text">PolyGen AI</span> */}
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route, index) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-[#1f1f1f] hover:bg-black/10 rounded-lg transition",
                pathname === route.href
                  ? "text-[#1f1f1f] bg-[#d3e3fd] font-semibold shadow-md"
                  : "text-[#444746]"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro}/>
    </div>
  );
}
