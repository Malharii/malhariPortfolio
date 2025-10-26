"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Experience {
  id: string;
  title: string;
  type: string;
  company: string;
  duration: string;
  location: string;
  icon: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    id: "fullstack",
    title: "Full Stack Developer",
    type: "Internship",
    company: "5TechG Lab LLP",
    duration: "Dec 2023 – Jun 2024",
    location: "Pune, Maharashtra",
    icon: "bg-blue-500",
    details: [
      "Optimized database queries to improve application performance and reduce response time.",
      "Utilized Redux to manage application state, ensuring a centralized and predictable approach.",
      "Implemented caching strategies to optimize data retrieval and performance.",
      "Used TypeScript for static typing, improving code reliability and maintainability.",
      "Developed backend APIs using Node.js and Express.js for user authentication and order processing.",
      "Designed and implemented MongoDB schemas for optimized data storage and retrieval.",
    ],
  },
];

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto border-t border-gray-800">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fadeInUp">
        Experience
      </h2>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-green-500/10 animate-fadeInUp"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <button
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              className="w-full px-6 py-6 flex items-center justify-between hover:bg-gray-900/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-lg ${exp.icon} transition-all duration-300 hover:scale-110`}
                ></div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {exp.type} • {exp.company}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {exp.duration} • {exp.location}
                  </p>
                </div>
              </div>
              <ChevronDown
                size={24}
                className={`transition-all duration-300 ${
                  expandedId === exp.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedId === exp.id && (
              <div className="px-6 py-6 bg-gray-900/30 border-t border-gray-800 animate-fadeInDown">
                <ul className="space-y-3">
                  {exp.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-gray-300 animate-fadeInUp"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <span className="text-green-500 mt-1">–</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
