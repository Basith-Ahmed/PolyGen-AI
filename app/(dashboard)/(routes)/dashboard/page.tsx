"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessagesSquare,
  Music,
  VideoIcon,
} from "lucide-react";

import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessagesSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    label: "Audio Generator",
    icon: Music,
    href: "/audio",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Code Generator",
    icon: Code,
    href: "/code",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center px-4">
          Explore the power of <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-300 bg-clip-text text-transparent">PolyGen AI</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg text-center">
          Chat and craft with the smartest AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5 mr-2" />
          </Card>
        ))}
      </div>
    </div>
  );
}
