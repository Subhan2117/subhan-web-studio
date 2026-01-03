import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Hero3D } from "@/components/hero-3d"

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Hero3D />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-muted-foreground mb-4 sm:mb-8">
            Trusted by 100+ Local Businesses
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight text-balance">
            We Help Local Businesses Get More Customers With Modern Websites
          </h1>

          <p className="mt-4 sm:mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Fast, mobile-friendly websites designed to increase calls, bookings,
            and trust.
          </p>

          <div className="mt-6 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="w-full sm:w-auto text-sm tracking-wide px-6 py-5 sm:px-8 sm:py-6"
              asChild
            >
              <a href="#contact">
                Get a Free Website Audit
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-sm tracking-wide px-6 py-5 sm:px-8 sm:py-6 bg-background/80 backdrop-blur-sm"
              asChild
            >
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>

          <div className="mt-6 sm:mt-14 hidden sm:flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span>3-5 Day Delivery</span>
            <span className="text-border">|</span>
            <span>Mobile-First Design</span>
            <span className="text-border">|</span>
            <span>SEO Optimized</span>
          </div>
        </div>

        <div className="mt-10 sm:mt-20 relative">
          <div className="bg-card/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl border border-border/50">
            <img
              src="/modern-business-website-mockup-showing-restaurant-.jpg"
              alt="Modern website mockup showing responsive design on laptop and mobile"
              className="w-full rounded-md sm:rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
