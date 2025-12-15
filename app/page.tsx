import { HeroSection } from "@/components/hero-section"
import { KitchenCollections } from "@/components/kitchen-collections"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { AppointmentForm } from "@/components/appointment-form"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <KitchenCollections />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <AppointmentForm />
      <Footer />
    </main>
  )
}
