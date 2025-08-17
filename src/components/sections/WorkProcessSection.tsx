"use client"

import { motion } from "framer-motion"
import { FileText, Phone, Calculator, CheckCircle, Shield, Clock } from "lucide-react"
import { WorkStep } from "@/types"

const workSteps: WorkStep[] = [
  {
    id: "contacto",
    title: "Contacto inicial",
    description: "Nos contactas para discutir tus necesidades contables y obtener una propuesta personalizada.",
    step: 1
  },
  {
    id: "evaluacion",
    title: "Evaluación y propuesta",
    description: "Analizamos tu situación actual y te presentamos un plan de trabajo detallado con costos transparentes.",
    step: 2
  },
  {
    id: "implementacion",
    title: "Implementación",
    description: "Comenzamos a trabajar en tu contabilidad, estableciendo procesos claros y fechas de entrega.",
    step: 3
  },
  {
    id: "seguimiento",
    title: "Seguimiento continuo",
    description: "Mantenemos comunicación constante, entregando reportes periódicos y estando disponibles para consultas.",
    step: 4
  }
]

const WorkProcessSection = () => {
  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Nuestro{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">
              proceso
            </span>{" "}
            de trabajo
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Un proceso simple y transparente que garantiza resultados de calidad 
            y una experiencia excepcional para nuestros clientes.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-slate-200 to-blue-200 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {workSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center group"
              >
                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  {step.step}
                </motion.div>

                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-700 mx-auto mb-4 shadow-md border border-slate-100 group-hover:shadow-lg transition-shadow duration-300">
                  {step.step === 1 && <Phone className="w-8 h-8" />}
                  {step.step === 2 && <FileText className="w-8 h-8" />}
                  {step.step === 3 && <Calculator className="w-8 h-8" />}
                  {step.step === 4 && <CheckCircle className="w-8 h-8" />}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connection Line */}
                {index < workSteps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-16 bg-gradient-to-b from-blue-200 to-slate-200 mx-auto mt-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Tiempo de respuesta</h3>
            <p className="text-slate-600">Respondemos en menos de 24 horas</p>
          </div>

          <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Confidencialidad</h3>
            <p className="text-slate-600">Tus datos están 100% seguros</p>
          </div>

          <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Garantía</h3>
            <p className="text-slate-600">Satisfacción garantizada o te devolvemos tu dinero</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ¿Tienes preguntas sobre nuestro proceso?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Nuestro equipo está listo para explicarte cada paso del proceso 
              y responder todas tus dudas sobre nuestros servicios.
            </p>
            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Agenda una llamada
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkProcessSection
