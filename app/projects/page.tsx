"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const allProjects = [
  {
    id: 1,
    title: "MalharEats",
    description:
      "A robust food ordering app that streamlines the process for users to browse menus and place orders.",
    fullDescription:
      "Developed a comprehensive food ordering platform with real-time order tracking, menu management, and secure payment integration. The application features a responsive design, user authentication, and an intuitive interface for seamless ordering experience. Built with React for the frontend and Node.js/Express for backend APIs.",
    image: "/food-ordering-app.jpg",
    tags: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "TypeScript"],
    viewLink: "https://malhar-food-ordering-app-frontend.onrender.com/",
    githubLink: "https://github.com/Malharii/mern-food-ordering-app-frontend",
  },
  {
    id: 2,
    title: "DigitalMarketingPlace",
    description:
      "A dynamic digital marketplace enabling users to seamlessly buy and sell high-quality UI components.",
    fullDescription:
      "Built a full-featured marketplace platform with Next.js for enhanced performance and SEO. Features include advanced search and filtering, secure payment gateway integration, user authentication,component uploads,clean UI, and product management system. Implemented with TypeScript for type safety and Tailwind CSS for modern styling.",
    image: "/digital-marketplace.jpg",
    tags: ["ReactJs", "NextJs", "MongoDB", "TypeScript", "TailwindCSS", "Shadcn UI"],
    viewLink: "#",
    githubLink: "https://github.com/Malharii/digitalmarketplace",
  },
  {
    id: 3,
    title: "Virtual Code Editor",
    description:
      "Browser-based code editor with real-time syntax highlighting and code execution capabilities.",
    fullDescription:
      "A powerful web-based code editor that allows users to write, edit, and execute code directly in the browser. Features include syntax highlighting for multiple languages, real-time code execution, file management, and theme customization. Built with React and Monaco Editor for a professional IDE-like experience.",
    image: "/code-editor-interface.jpg",
    tags: ["ReactJs", "Monaco Editor", "TypeScript", "Node.js", "Express"],
    viewLink: "#",
    githubLink: "https://github.com/Malharii/virtual-code-editor",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="text-gray-400 hover:text-black mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-balance">All Projects</h1>
          <p className="text-gray-400 text-lg mt-4">
            Explore my complete portfolio of work
          </p>
        </div>

        <div className="space-y-20">
          {allProjects.map((project, index) => (
            <div
              key={project.id}
              className="border-b border-gray-800 pb-20 last:border-b-0"
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6 order-2 md:order-1">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 text-lg">{project.description}</p>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {project.fullDescription}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded-full border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-black font-semibold"
                      onClick={() =>
                        project.viewLink !== "#" &&
                        window.open(project.viewLink, "_blank")
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-700 text-white hover:bg-gray-900 bg-transparent"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>

                <div className="order-1 md:order-2 rounded-lg overflow-hidden border border-gray-700 h-64 md:h-96 bg-gray-900">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
