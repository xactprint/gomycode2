import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            About React 101
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive, free resource dedicated to teaching modern React
            development practices to everyone.
          </p>
        </div>

        <Card className="border-indigo-100 shadow-sm">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-600">
            <p>
              React 101 was created with a simple goal: to make learning React
              accessible, practical, and up-to-date. In a fast-evolving
              ecosystem, it can be hard to know where to start or what best
              practices to follow.
            </p>
            <p>
              Here, we focus on the core concepts that matter, helping you build
              a solid foundation that will serve you whether you're building a
              personal blog or a complex enterprise application.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Who is this for?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Beginners who know HTML, CSS, and JS</li>
                <li>Designers looking to code their interfaces</li>
                <li>Backend developers moving to full-stack</li>
                <li>Anyone wanting to refresh their React knowledge</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What you'll learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Component-based architecture</li>
                <li>State management with Hooks</li>
                <li>Routing and Navigation</li>
                <li>Styling with Tailwind CSS</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center pt-8">
          <h3 className="text-xl font-semibold mb-4 text-slate-900">
            Connect with the Creator
          </h3>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
