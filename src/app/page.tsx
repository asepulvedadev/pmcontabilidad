import Navigation from "@/components/sections/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import BenefitsSection from "@/components/sections/BenefitsSection"
import WorkProcessSection from "@/components/sections/WorkProcessSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <WorkProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
