"use client";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
          Let's work together
        </h2>

        <p
          className="text-xl text-gray-400 mb-12 animate-fadeInUp"
          style={{ animationDelay: "0.1s" }}
        >
          Have a project in mind? Let's create something amazing.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600 rounded-full  text-gray-200  hover:border-green-300 hover:text-white transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          Get in touch <span>→</span>
        </Link>
      </div>
    </section>
  );
}
