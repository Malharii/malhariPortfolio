"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b border-gray-900 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold animate-fadeInDown">
          @code by Malhari
        </Link>
        <nav className="flex gap-2">
          <Link href="/projects">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-black transition-all duration-400 hover:scale-105 animate-fadeInDown"
              style={{ animationDelay: "0.3s" }}
            >
              Projects
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-black transition-all duration-300 hover:scale-105 animate-fadeInDown"
              style={{ animationDelay: "0.2s" }}
            >
              Contact
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
