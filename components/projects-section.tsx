"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Virtual Code Editor",
    description:
      "Browser-based code editor with real-time syntax highlighting and execution.",
    image: "/code-editor-interface.jpg",
    tags: ["ReactJs", "Monaco Editor", "javascript", "Node.js", "Express.js"],
    viewLink: "#",
    githubLink: "https://github.com/Malharii/virtual-code-editor",
  },
  {
    id: 2,
    title: "MalharEats",
    description: "Robust food ordering app with menu browsing and order placement.",
    image: "/food-ordering-app.jpg",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript"],
    viewLink: "https://malhar-food-ordering-app-frontend.onrender.com/",
    githubLink: "https://github.com/Malharii/mern-food-ordering-app-frontend",
  },
  {
    id: 3,
    title: "DigitalMarketingPlace",
    description: "Dynamic digital marketplace for buying and selling UI components.",
    image: "/digital-marketplace.jpg",
    tags: ["React.js", "Next.js", "MongoDB", "TypeScript", "TailwindCSS"],
    viewLink: "#",
    githubLink: "https://github.com/Malharii/digitalmarketplace",
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800">
      <div className="space-y-12">
        <div className="flex items-center justify-between animate-fadeInUp">
          <h2 className="text-3xl font-bold">Projects</h2>
          <Link href="/projects">
            <Button
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-300 bg-transparent transition-all duration-300 hover:scale-105 hover:border-green-500"
            >
              See all →
            </Button>
          </Link>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="grid md:grid-cols-2 gap-8 items-center animate-fadeInUp"
              style={{ animationDelay: `${0.1 + index * 0.2}s` }}
            >
              <div className="space-y-4 order-2 md:order-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-900 text-gray-300 text-xs rounded border border-gray-700 hover:border-green-200 transition-all duration-300 hover:scale-105 animate-scaleIn"
                      style={{
                        animationDelay: `${0.1 + index * 0.2 + tagIndex * 0.05}s`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4">
                  <Button
                    className="bg-gray-300 hover:bg-gray-400 text-black font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
                    onClick={() =>
                      project.viewLink !== "#" && window.open(project.viewLink, "_blank")
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-white hover:bg-gray-900 hover:text-white bg-transparent transition-all duration-300 hover:scale-105 hover:border-green-200"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>

              <div className="order-1 md:order-2 rounded-lg overflow-hidden border border-gray-700 h-64 md:h-80 bg-gray-900 transition-all duration-300 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
