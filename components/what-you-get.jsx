import { Smartphone, Zap, Mail, MapPin, Search, Share2 } from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Mobile-Optimized",
    description: "Looks perfect on every device.",
  },
  {
    icon: Zap,
    title: "Fast Loading",
    description: "Lightning-fast pages that convert.",
  },
  {
    icon: Mail,
    title: "Contact Forms",
    description: "Turn visitors into leads.",
  },
  {
    icon: MapPin,
    title: "Google Maps",
    description: "Help customers find you.",
  },
  {
    icon: Search,
    title: "Local SEO",
    description: "Rank in local searches.",
  },
  {
    icon: Share2,
    title: "Social Links",
    description: "Connect all your profiles.",
  },
]

export function WhatYouGet() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Everything You Need
          </h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-muted-foreground">
            A complete website package to bring in more customers
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 bg-card rounded-lg sm:rounded-xl border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
