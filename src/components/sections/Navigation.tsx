"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggleButton } from "@/components/ThemeToggleButton"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              PM
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-foreground/80 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-foreground/80 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollToSection("proceso")}
                className="text-foreground/80 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Proceso
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-foreground/80 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("contacto")}
            >
              Agendar Cita
            </Button>
            <ThemeToggleButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggleButton />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border/50">
          <button
            onClick={() => scrollToSection("servicios")}
            className="block w-full text-left px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-md transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("beneficios")}
            className="block w-full text-left px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-md transition-colors"
          >
            Beneficios
          </button>
          <button
            onClick={() => scrollToSection("proceso")}
            className="block w-full text-left px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-md transition-colors"
          >
            Proceso
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="block w-full text-left px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-md transition-colors"
          >
            Contacto
          </button>
          <div className="pt-4">
            <Button
              onClick={() => scrollToSection("contacto")}
              className="w-full"
            >
              Agendar Cita
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

