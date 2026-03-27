import React from "react";
import { Github, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg">React 101</h3>
          <p className="text-sm">
            The complete guide to learning React from scratch. Building the next
            generation of web apps.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/ELMACHHOUNE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://instagram.com/mohamed.elmachhoune"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://elmachhoune.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Portfolio</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Course</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Start Learning
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Curriculum
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Instructor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">
            Subscribe to get the latest comprehensive guides.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-indigo-500"
            />
            <button className="bg-indigo-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-indigo-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs">
        &copy; {new Date().getFullYear()} React 101 Course. All rights reserved.
      </div>
    </footer>
  );
}
