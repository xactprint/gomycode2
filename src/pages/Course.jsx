import React, { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { BookOpen, ChevronRight, Play, CircleHelp, Code } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { SimpleAccordion } from "../components/ui/accordion";
import { courseData } from "../data/courseData.jsx";

export default function Course() {
  const [activeModule, setActiveModule] = useState(courseData[0]);

  const faqs = [
    {
      title: "Do I need to know JavaScript before React?",
      content:
        "Yes, a good understanding of JavaScript (ES6+) is essential for learning React effectively.",
    },
    {
      title: "Is React hard to learn?",
      content:
        "React has a learning curve, but once you understand the core concepts of components, props, and state, it becomes very intuitive.",
    },
    {
      title: "Can I use React for mobile apps?",
      content:
        "Yes! React Native allows you to build native mobile apps for iOS and Android using React.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 lg:w-80 shrink-0 space-y-6">
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-500" />
            Course Modules
          </h2>
          <div className="space-y-1">
            {courseData.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between group ${
                  activeModule.id === module.id
                    ? "bg-indigo-50 text-indigo-700 font-medium"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span className="truncate">
                  {module.id}. {module.title}
                </span>
                {activeModule.id === module.id && (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <CircleHelp className="h-5 w-5 text-indigo-500" />
            FAQ
          </h2>
          <SimpleAccordion items={faqs} />
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="flex-1 space-y-6">
        <Card className="border-indigo-100 shadow-md">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 text-indigo-600 text-sm font-medium mb-2">
              <span className="bg-indigo-100 px-2 py-1 rounded">
                Module {activeModule.id}
              </span>
            </div>
            <CardTitle className="text-3xl text-slate-900">
              {activeModule.title}
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              {activeModule.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            {activeModule.content}
          </CardContent>
          <CardFooter className="flex justify-between pt-6 border-t border-slate-100 mt-6">
            <Button
              variant="outline"
              disabled={activeModule.id === 1}
              onClick={() => setActiveModule(courseData[activeModule.id - 2])}
            >
              Previous
            </Button>
            <Button
              onClick={() => {
                const nextModule = courseData[activeModule.id]; // id is 1-based, index is 0-based. next index is id.
                if (nextModule) setActiveModule(nextModule);
              }}
              disabled={activeModule.id === courseData.length}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              Next Lesson <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-900 text-white border-none md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Play className="h-5 w-5 text-green-400" />
                Try it yourself
              </CardTitle>
              <CardDescription className="text-slate-400">
                Experiment with the code above in the playground.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 overflow-hidden">
              <Sandpack
                template="react"
                theme="dark"
                files={{
                  "/App.js": activeModule.code,
                }}
                options={{
                  showNavigator: false,
                  showLineNumbers: true,
                  showInlineErrors: true,
                  wrapContent: true,
                  editorHeight: 400,
                  externalResources: ["https://cdn.tailwindcss.com"],
                }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>
                Additional reading for this topic.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2 hover:text-indigo-600 cursor-pointer">
                  <BookOpen className="h-4 w-4" /> Official Documentation
                </li>
                <li className="flex items-center gap-2 hover:text-indigo-600 cursor-pointer">
                  <Play className="h-4 w-4" /> Video Tutorial
                </li>
                <li className="flex items-center gap-2 hover:text-indigo-600 cursor-pointer">
                  <Code className="h-4 w-4" /> Source Code
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
