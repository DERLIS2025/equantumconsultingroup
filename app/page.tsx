import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import ProblemSection from "@/components/sections/ProblemSection"
import ServicesSection from "@/components/sections/ServicesSection"
import FAQSection from "@/components/sections/FAQSection"
import { CasesSection, DifferenceSection, FinalCTA, ProcessSection, SolutionsByNeed, TrustBand } from "@/components/sections/GenericSections"

export default function Home() {
  return (
    <main className="bg-white text-[#111827]">
      <Header />
      <Hero />
      <TrustBand />
      <ProblemSection />
      <ServicesSection />
      <DifferenceSection />
      <SolutionsByNeed />
      <ProcessSection />
      <CasesSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
