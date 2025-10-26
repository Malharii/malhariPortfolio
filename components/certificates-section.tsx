export default function CertificatesSection() {
  const certificates = [
    {
      title: "React - The Complete Guide 2024 (incl. Next.js, Redux)",
      issuer: "Udemy",
    },
    {
      title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      issuer: "Udemy",
    },
    {
      title: "MongoDB - The Complete Developer's Guide 2024",
      issuer: "Udemy",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto border-t border-gray-800">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Certificates</h2>

      <div className="space-y-4">
        {certificates.map((cert, idx) => (
          <div key={idx} className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition">
            <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
            <p className="text-gray-400 text-sm">— {cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
