"use client"

import { motion } from "framer-motion"
import { Phone, FileSearch, Bot, LineChart } from "lucide-react"
import { WorkStep } from "@/types"

const workSteps: WorkStep[] = [
  {
    id: "diagnostico",
    title: "Diagnóstico Inicial",
    description: "Comenzamos con una llamada para entender tus necesidades, desafíos y metas financieras.",
    step: 1,
    icon: "Phone",
  },
  {
    id: "propuesta",
    title: "Propuesta a Medida",
    description: "Diseñamos un plan de servicio personalizado que se alinea con tus objetivos y presupuesto.",
    step: 2,
    icon: "FileSearch",
  },
  {
    id: "implementacion",
    title: "Implementación y Automatización",
    description: "Integramos nuestras herramientas y procesos, automatizando tareas para máxima eficiencia.",
    step: 3,
    icon: "Bot",
  },
  {
    id: "seguimiento",
    title: "Análisis y Crecimiento",
    description: "Te entregamos reportes claros y te asesoramos continuamente para impulsar tu crecimiento.",
    step: 4,
    icon: "LineChart",
  },
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Phone":
      return <Phone className="w-8 h-8 text-primary" />
    case "FileSearch":
      return <FileSearch className="w-8 h-8 text-primary" />
    case "Bot":
      return <Bot className="w-8 h-8 text-primary" />
    case "LineChart":
      return <LineChart className="w-8 h-8 text-primary" />
    default:
      return <Phone className="w-8 h-8 text-primary" />
  }
}

const WorkProcessSection = () => {
  return (
    <section id="proceso" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Un Proceso Simple, Resultados Poderosos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hemos diseñado un flujo de trabajo claro y eficiente para que la gestión de tu contabilidad sea una experiencia fluida y sin complicaciones.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border/50" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {workSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="relative flex flex-col items-center">
                  <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10 border-4 border-secondary/50 shadow-sm">
                    <span className="text-primary">{`0${step.step}`}</span>
                  </div>
                  <div className="lg:hidden absolute top-24 w-0.5 h-16 bg-border/50" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProcessSection
