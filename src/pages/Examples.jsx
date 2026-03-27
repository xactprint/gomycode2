import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Examples() {
  const examples = [
    {
      title: "Todo List App",
      image: "bg-gradient-to-br from-purple-500 to-indigo-600",
      difficulty: "Beginner",
    },
    {
      title: "Weather Dashboard",
      image: "bg-gradient-to-br from-blue-400 to-cyan-500",
      difficulty: "Intermediate",
    },
    {
      title: "E-commerce Store",
      image: "bg-gradient-to-br from-orange-400 to-pink-500",
      difficulty: "Advanced",
    },
    {
      title: "Chat Application",
      image: "bg-gradient-to-br from-green-400 to-emerald-600",
      difficulty: "Advanced",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        Example Projects
      </h1>
      <p className="text-slate-600 mb-8 max-w-2xl">
        Explore these example projects to see how React concepts apply to
        real-world applications.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {examples.map((example, index) => (
          <Card
            key={index}
            className="overflow-hidden group cursor-pointer border-slate-200"
          >
            <div
              className={`h-48 ${example.image} flex items-center justify-center text-white font-bold text-2xl shadow-inner group-hover:opacity-90 transition-opacity`}
            >
              {example.title}
            </div>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{example.title}</CardTitle>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    example.difficulty === "Beginner"
                      ? "bg-green-100 text-green-700"
                      : example.difficulty === "Intermediate"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {example.difficulty}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-500 text-sm">
                Learn how to build a fully functional{" "}
                {example.title.toLowerCase()} using hooks, context, and modern
                React patterns.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Project</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
