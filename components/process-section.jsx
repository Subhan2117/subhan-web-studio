import { MessageCircle, Paintbrush, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Free Audit",
    description: "We review your current website and discuss your goals.",
  },
  {
    icon: Paintbrush,
    step: "02",
    title: "Design & Build",
    description: "We create your custom website in 3-5 business days.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch",
    description: "We launch your site and provide ongoing support.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Simple 3-Step Process
          </h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-muted-foreground">
            From first call to launch in one week
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-8 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory">
          {steps.map((step, index) => (
            <div key={index} className="relative flex-shrink-0 w-[280px] md:w-auto snap-center">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 sm:top-12 left-[60%] w-[80%] h-[2px] bg-border" />
              )}
              <div className="relative bg-card p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center">
                    <step.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary-foreground" />
                  </div>
                  <span className="text-2xl sm:text-4xl font-bold text-muted-foreground/30">{step.step}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
