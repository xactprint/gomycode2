import React from "react";
import { FileText, ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Docs() {
  const docs = [
    {
      title: "React Official Documentation",
      description:
        "The primary source for all things React. Updated regularly.",
      url: "https://react.dev",
    },
    {
      title: "Vite Documentation",
      description: "Learn about the build tool powering this project.",
      url: "https://vitejs.dev",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development.",
      url: "https://tailwindcss.com/docs",
    },
    {
      title: "React Router",
      description: "Declarative routing for React web applications.",
      url: "https://reactrouter.com",
    },
    {
      title: "Lucide Icons",
      description: "Beautiful & consistent icons made by the community.",
      url: "https://lucide.dev",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        Documentation & Resources
      </h1>
      <p className="text-slate-600 mb-8 max-w-2xl">
        A curated list of essential documentation and resources to help you
        deepen your understanding of the tools used in this course.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((doc, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <FileText className="h-8 w-8 text-indigo-500 mb-2" />
                <ExternalLink className="h-4 w-4 text-slate-400" />
              </div>
              <CardTitle>{doc.title}</CardTitle>
              <CardDescription>{doc.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="px-0 text-indigo-600" asChild>
                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                  Read Documentation
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
