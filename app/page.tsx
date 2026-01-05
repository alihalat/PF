import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BackgroundEffects } from "@/components/background-effects"
import { SystemOverlay } from "@/components/system-overlay"

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen neural-grid">
      <BackgroundEffects />
      <SystemOverlay />
      <Header />
      <main className="container mx-auto px-6 lg:px-12">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
