"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function BeforeAfter() {
  const [activeTab, setActiveTab] = useState("after")

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            See the Difference
          </h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-muted-foreground">
            Modern websites that convert visitors into customers
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-6 sm:mb-8">
          <button
            onClick={() => setActiveTab("before")}
            className={cn(
              "px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all",
              activeTab === "before"
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-muted/80",
            )}
          >
            Before
          </button>
          <button
            onClick={() => setActiveTab("after")}
            className={cn(
              "px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all",
              activeTab === "after"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80",
            )}
          >
            After
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          <div
            className={cn(
              "relative rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all duration-500",
              activeTab === "before"
                ? "border-foreground/20 scale-100 md:scale-105"
                : "border-border opacity-60 scale-95 hidden md:block",
            )}
          >
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
              <span className="px-2 py-1 sm:px-3 bg-foreground/90 text-background text-xs font-medium rounded-full">
                Before
              </span>
            </div>
            <img
              src="/outdated-restaurant-website-design-from-2010-clutt.jpg"
              alt="Outdated website design example"
              className="w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-foreground/90 text-background p-3 sm:p-4">
              <p className="text-xs sm:text-sm font-medium">Outdated Design</p>
              <p className="text-xs text-background/70">
                Cluttered, slow, not mobile-friendly
              </p>
            </div>
          </div>

          <div
            className={cn(
              "relative rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all duration-500",
              activeTab === "after"
                ? "border-primary scale-100 md:scale-105"
                : "border-border opacity-60 scale-95 hidden md:block",
            )}
          >
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
              <span className="px-2 py-1 sm:px-3 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                After
              </span>
            </div>
            <img
              src="/modern-clean-restaurant-website-design-2024-mobile.jpg"
              alt="Modern website design example"
              className="w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground p-3 sm:p-4">
              <p className="text-xs sm:text-sm font-medium">Modern & Optimized</p>
              <p className="text-xs text-primary-foreground/80">
                Fast, mobile-first, conversion-focused
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
