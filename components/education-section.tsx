export default function EducationSection() {
  const education = [
    {
      degree: "Master of Computer Application",
      university: "Shivaji University Kolhapur",
      duration: "Dec 2022 – May 2024",
      location: "Kolhapur, Maharashtra",
    },
    {
      degree: "Bachelor of Computer Application",
      university: "Solapur University Solapur",
      duration: "Jun 2019 – July 2022",
      location: "Solapur, Maharashtra",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto border-t border-gray-800">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Education</h2>

      <div className="space-y-6">
        {education.map((edu, idx) => (
          <div key={idx} className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition">
            <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
            <p className="text-gray-400 mb-1">{edu.university}</p>
            <p className="text-gray-500 text-sm">
              {edu.duration} • {edu.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
