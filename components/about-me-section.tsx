"use client";

export default function AboutMeSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto border-t border-gray-800">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fadeInUp">About Me</h2>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p className="text-lg animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
          I’m a versatile MERN Stack Developer based in Pune, Maharashtra, with a Master’s
          degree in Computer Applications from Shivaji University, Kolhapur (Dec 2022 –
          May 2024) and a Bachelor’s degree in Computer Science from Solapur University
          (Jun 2019 – Jul 2022).
        </p>

        <p className="text-lg animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          I build end-to-end digital solutions using Next.js, TypeScript, and the MERN
          stack, transforming ideas into intuitive and efficient user experiences. With a
          focus on clean architecture, performance, and maintainability, I aim to build
          applications that not only work — but last.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 mt-12">
        <a
          href="https://github.com/Malharii"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-110 animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          GitHub <span className="text-green-200">↗</span>
        </a>
        <a
          href="https://linkedin.com/in/malhari-pawar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white0 transition-all duration-300 flex items-center gap-2 hover:scale-110 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          LinkedIn <span className="text-green-200">↗</span>
        </a>
        <a
          href="tel:+919209511555"
          className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-110 animate-fadeInUp"
          style={{ animationDelay: "0.5s" }}
        >
          Call <span className="text-green-200">↗</span>
        </a>
      </div>
    </section>
  );
}
