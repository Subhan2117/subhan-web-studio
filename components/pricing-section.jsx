"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const packages = [
  {
    name: "Starter",
    price: "$799",
    description: "Perfect for small businesses",
    features: ["5-page website", "Mobile-responsive", "Contact form", "Basic SEO", "2 revisions"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$1,499",
    description: "For businesses ready to grow",
    features: [
      "10-page website",
      "Premium design",
      "Booking system",
      "Advanced SEO",
      "Live chat",
      "Unlimited revisions",
    ],
    popular: true,
  },
  {
    name: "Maintenance",
    price: "$99",
    period: "/mo",
    description: "Keep your site updated",
    features: ["Monthly updates", "Security monitoring", "Hosting included", "Priority support"],
    popular: false,
  },
]

export function PricingSection() {
  const [selectedPackage, setSelectedPackage] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (pkgName) => {
    setSelectedPackage(pkgName)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="pricing" className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Transparent Pricing
          </h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-muted-foreground">
            No hidden fees. Know exactly what you're getting.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 w-[280px] md:w-auto snap-center p-5 sm:p-8 rounded-lg border transition-all duration-300 ${
                pkg.popular
                  ? "bg-card border-primary/30 shadow-lg"
                  : "bg-card border-border hover:border-border/80 hover:shadow-md"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium tracking-wide uppercase rounded-full whitespace-nowrap">
                    Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-5 sm:mb-8">
                <h3 className="text-xs sm:text-sm font-medium tracking-wide uppercase text-muted-foreground mb-2 sm:mb-3">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">{pkg.price}</span>
                  {pkg.period && <span className="text-muted-foreground text-xs sm:text-sm">{pkg.period}</span>}
                </div>
                <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full tracking-wide text-sm"
                variant={pkg.popular ? "default" : "outline"}
                onClick={() => openModal(pkg.name)}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center px-4 py-10"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-2xl bg-background rounded-2xl border border-border shadow-2xl p-6 sm:p-8 relative"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 text-sm text-muted-foreground hover:text-foreground"
            >
              Close
            </button>
            <ContactForm
              embedded
              selectedPackage={selectedPackage}
              showPackageField={true}
              title={`Get Started: ${selectedPackage}`}
              subtitle="Tell us a bit about your project and we’ll follow up within 24 hours."
            />
          </div>
        </div>
      ) : null}
    </section>
  )
}
