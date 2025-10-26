"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20 pointer-events-none"
      }`}
    >
      <div className="bg-black border border-gray-700 rounded-full px-6 py-3 flex items-center gap-4 shadow-lg hover:shadow-green-500/20 transition-all duration-300">
        {/* Social Links */}
        <a
          href="https://x.com/MalhariPawar__"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-500 transition-colors duration-300 hover:scale-110"
          title="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>

        <a
          href="https://linkedin.com/in/malhari-pawar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-500 transition-colors duration-300 hover:scale-110"
          title="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>

        <a
          href="https://github.com/Malharii"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-500 transition-colors duration-300 hover:scale-110"
          title="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
