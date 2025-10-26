"use client"

const technologies = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Redux",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
]

export default function TechStack() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-12 animate-fadeInUp">Stack</h2>

      <div className="flex flex-wrap gap-4 justify-start">
        {technologies.map((tech, index) => (
          <div
            key={tech}
            className="px-6 py-3 rounded-full border border-gray-600 text-base font-medium hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 hover:scale-110 cursor-pointer animate-scaleIn"
            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  )
}
