"use client"

import { motion } from "framer-motion"
import { Zap, TrendingUp, Shield, Clock } from "lucide-react"
import { Benefit } from "@/types"

const benefits: Benefit[] = [
  {
    id: "claridad",
    title: "Claridad Financiera Total",
    description: "Obtén una visión completa y comprensible de tus finanzas. Tomarás decisiones más inteligentes con información precisa y siempre a tu alcance.",
    icon: "Zap",
  },
  {
    id: "crecimiento",
    title: "Enfoque en el Crecimiento",
    description: "Liberamos tu tiempo y recursos al manejar la complejidad contable, para que puedas concentrarte en expandir y mejorar tu negocio.",
    icon: "TrendingUp",
  },
  {
    id: "cumplimiento",
    title: "Cumplimiento sin Estrés",
    description: "Duerme tranquilo sabiendo que tus obligaciones fiscales están en manos expertas. Evita multas y mantén tu negocio en regla.",
    icon: "Shield",
  },
  {
    id: "eficiencia",
    title: "Eficiencia y Modernidad",
    description: "Adoptamos la tecnología para hacer tus procesos contables más rápidos y eficientes, ahorrándote tiempo y dinero.",
    icon: "Clock",
  },
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Zap":
      return <Zap className="w-7 h-7 text-primary" />
    case "TrendingUp":
      return <TrendingUp className="w-7 h-7 text-primary" />
    case "Shield":
      return <Shield className="w-7 h-7 text-primary" />
    case "Clock":
      return <Clock className="w-7 h-7 text-primary" />
    default:
      return <Zap className="w-7 h-7 text-primary" />
  }
}

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tu Aliado Estratégico para el Éxito
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Más que un servicio de contabilidad, somos un socio que te impulsa a alcanzar tus metas financieras con confianza y seguridad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-start gap-6 p-6 bg-secondary/50 rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
            >
              <div className="flex-shrink-0">
                {getIcon(benefit.icon)}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection

