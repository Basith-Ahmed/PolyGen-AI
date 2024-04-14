"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Inter } from "next/font/google";

const font = Inter({
  weight: "600",
  subsets: ["latin"],
});

const testimonials = [
  {
    name: "John",
    avatar: "J",
    title: "Software Engineer",
    description:
      "This application has significantly improved our team's productivity",
  },
  {
    name: "Maria",
    avatar: "M",
    title: "Web Designer",
    description: "I love this application, it's so user-friendly and efficient",
  },
  {
    name: "Sarah",
    avatar: "S",
    title: "Web Developer",
    description:
      "I'm impressed with the features and functionality of this application",
  },
  {
    name: "David",
    avatar: "D",
    title: "Data Analyst",
    description: "This application has made my work so much easier and faster",
  },
];

export default function LandingContent() {
  return (
    <div className="px-10 pb-20 pt-20">
      <h2 className="text-center text-4xl text-[##041e49] font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item, index) => (
          <Card
            key={index}
            className="bg-[#f0f4f9] shadow-md border-none text-[#041e49]"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-[##041e49]/50 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 pb-2">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
