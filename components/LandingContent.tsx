"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
    {
        name: "Antonio",
        avatar: "A",
        title: "Software Engineer",
        description: "This is the best application I've used"
    },
    {
        name: "Maria",
        avatar: "M",
        title: "Web Designer",
        description: "I love this application, it's so user-friendly and efficient"
    },
    {
        name: "John",
        avatar: "J",
        title: "Product Manager",
        description: "This application has significantly improved our team's productivity"
    },
    {
        name: "Sarah",
        avatar: "S",
        title: "Developer",
        description: "I'm impressed with the features and functionality of this application"
    },
    {
        name: "David",
        avatar: "D",
        title: "Data Analyst",
        description: "This application has made my work so much easier and faster"
    },
    {
        name: "Emily",
        avatar: "E",
        title: "Marketing Manager",
        description: "I can't imagine working without this application, it's a game-changer"
    }
];

export default function LandingContent() {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item, index) => (
                    <Card key={index} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">
                                        {item.name}
                                    </p>
                                    <p className="text-zinc-400 text-sm">
                                        {item.title}
                                    </p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}