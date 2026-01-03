import { Utensils, Scissors, Dumbbell, Stethoscope, Wrench, Store } from "lucide-react"

const businessTypes = [
  { icon: Utensils, label: "Restaurants" },
  { icon: Scissors, label: "Barbershops" },
  { icon: Dumbbell, label: "Gyms" },
  { icon: Stethoscope, label: "Clinics" },
  { icon: Wrench, label: "Services" },
  { icon: Store, label: "Retail" },
]

export function WhoIsThisFor() {
  return (
    <section id="services" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Built for Local Businesses
          </h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-muted-foreground text-pretty">
            If your website doesn't bring in customers, this is for you.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
          {businessTypes.map((business, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-6 bg-card rounded-lg sm:rounded-xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                <business.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground text-center">
                {business.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
