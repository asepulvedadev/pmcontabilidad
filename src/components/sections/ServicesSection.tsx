"use client"

import { motion } from "framer-motion"
import { BarChart, FileText, Users, TrendingUp, CheckCircle } from "lucide-react"
import { Service } from "@/types"

const services: Service[] = [
  {
    id: "contabilidad",
    title: "Contabilidad General",
    description: "Mantenemos tus registros financieros precisos y al día, dándote una visión clara de la salud de tu negocio.",
    icon: "BarChart",
    features: [
      "Registro de transacciones",
      "Conciliaciones bancarias",
      "Estados financieros mensuales",
      "Análisis de rentabilidad",
    ],
  },
  {
    id: "impuestos",
    title: "Declaración de Impuestos",
    description: "Nos encargamos de la preparación y presentación de tus declaraciones de impuestos, asegurando el cumplimiento y la optimización fiscal.",
    icon: "FileText",
    features: [
      "Declaraciones mensuales y anuales",
      "Cálculo preciso de impuestos",
      "Cumplimiento normativo (SAT)",
      "Asesoría en deducciones",
    ],
  },
  {
    id: "asesoria",
    title: "Asesoría Financiera",
    description: "Te guiamos en la toma de decisiones estratégicas con análisis y proyecciones financieras para impulsar tu crecimiento.",
    icon: "Users",
    features: [
      "Planificación financiera",
      "Análisis de costos y presupuestos",
      "Evaluación de inversiones",
      "Optimización de flujo de efectivo",
    ],
  },
  {
    id: "estrategia",
    title: "Estrategia Fiscal",
    description: "Diseñamos estrategias fiscales a medida para minimizar tu carga tributaria y maximizar tus beneficios dentro del marco legal.",
    icon: "TrendingUp",
    features: [
      "Diagnóstico fiscal completo",
      "Planificación fiscal proactiva",
      "Optimización de estructura corporativa",
      "Consultoría en incentivos fiscales",
    ],
  },
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "BarChart":
      return <BarChart className="w-8 h-8 text-primary" />
    case "FileText":
      return <FileText className="w-8 h-8 text-primary" />
    case "Users":
      return <Users className="w-8 h-8 text-primary" />
    case "TrendingUp":
      return <TrendingUp className="w-8 h-8 text-primary" />
    default:
      return <BarChart className="w-8 h-8 text-primary" />
  }
}

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Servicios a la Medida de tu Negocio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde la contabilidad diaria hasta la estrategia fiscal avanzada, te ofrecemos soluciones integrales para que tus finanzas trabajen para ti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-background rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 flex flex-col"
            >
              <div className="mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm">
                {service.features.slice(0, 2).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

