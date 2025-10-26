"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TechStack from "@/components/tech-stack"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import AboutMeSection from "@/components/about-me-section"
import CertificatesSection from "@/components/certificates-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <TechStack />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificatesSection />
        <AboutMeSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
