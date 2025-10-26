"use client";

import { Button } from "@/components/ui/button";
import { Download, Phone, Mail, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="space-y-6">
        <h1
          className="text-5xl md:text-7xl font-bold leading-tight text-balance animate-fadeInUp"
          style={{ animationDelay: "0.1s" }}
        >
          Hi I'm Malhari Pawar
        </h1>

        <div
          className="text-gray-400 text-lg max-w-2xl space-y-2 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          <p>
            Versatile MERN Stack Developer with a fervent passion for full-stack
            development.
          </p>
          <p>
            Building on strong computer science basics, I translate thoughts into
            functional codes.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-gray-400 pt-4">
          <a
            href="tel:+919209511555"
            className="flex items-center gap-2 hover:text-green-200 transition-all duration-300 hover:scale-105 animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            <Phone className="w-4 h-4" />
            92095 11555
          </a>
          <a
            href="mailto:malharipawar001@gmail.com"
            className="flex items-center gap-2 hover:text-green-300 transition-all duration-300 hover:scale-105 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <Mail className="w-4 h-4" />
            malharipawar001@gmail.com
          </a>
          <div
            className="flex items-center gap-2 animate-fadeInUp"
            style={{ animationDelay: "0.5s" }}
          >
            <MapPin className="w-4 h-4" />
            Pune, Maharashtra
          </div>
        </div>

        <div className="pt-4 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
          <a href="/malharcv01.pdf" download>
            <Button className="bg-transparent border border-gray-500 text-white hover:bg-zinc-900 hover:border-gray-200 hover:text-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
