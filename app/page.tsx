import Script from 'next/script'
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"
import { FestivalPopup } from "@/components/festival-popup"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Script id="fb-viewcontent">
        {`fbq('track', 'ViewContent');`}
      </Script>
      <Header />
      <main>
        <FestivalPopup />
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  )
}
