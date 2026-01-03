"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">
              Subhan Web Studio
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              Process
            </a>
            <a
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-sm tracking-wide" asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
            <Button size="sm" className="text-sm tracking-wide" asChild>
              <a href="#contact">Free Audit</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50">
            <nav className="flex flex-col gap-5">
              <a
                href="#services"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                Process
              </a>
              <a
                href="#pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                Contact
              </a>
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="#contact">Get a Quote</a>
                </Button>
                <Button size="sm" asChild>
                  <a href="#contact">Free Audit</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
