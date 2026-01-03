import { HeroSection } from "@/components/hero-section"
import { WhoIsThisFor } from "@/components/who-is-this-for"
import { BeforeAfter } from "@/components/before-after"
import { WhatYouGet } from "@/components/what-you-get"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhoIsThisFor />
      <BeforeAfter />
      <WhatYouGet />
      <ProcessSection />
      <PricingSection />
      <ContactForm showPackageField={false} />
      <Footer />
    </main>
  )
}
