import React from "react";
import { Code } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Course", path: "/" },
    { name: "Docs", path: "/docs" },
    { name: "Examples", path: "/examples" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-indigo-600">
          <Code className="h-6 w-6" />
          <h1 className="text-xl font-bold text-slate-900">React 101</h1>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "hover:text-indigo-600 transition-colors",
                location.pathname === item.path
                  ? "text-indigo-600 font-bold"
                  : "",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link to="/">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
