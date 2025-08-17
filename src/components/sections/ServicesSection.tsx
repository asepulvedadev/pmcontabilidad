"use client"

import { motion } from "framer-motion"
import { Calculator, FileText, Users, CheckCircle } from "lucide-react"
import { Service } from "@/types"

const services: Service[] = [
  {
    id: "conciliaciones",
    title: "Conciliaciones Bancarias",
    description: "Conciliaciones mensuales detalladas para mantener tu contabilidad al día y detectar discrepancias oportunamente.",
    icon: "Calculator",
    features: [
      "Conciliación mensual automática",
      "Reportes detallados de movimientos",
      "Detección de discrepancias",
      "Integración con sistemas bancarios"
    ]
  },
  {
    id: "declaraciones",
    title: "Declaraciones Fiscales",
    description: "Declaraciones mensuales y anuales con la máxima precisión y cumplimiento de fechas límite.",
    icon: "FileText",
    features: [
      "Declaraciones mensuales (IVA, ISR)",
      "Declaraciones anuales",
      "Cálculo de impuestos",
      "Presentación electrónica"
    ]
  },
  {
    id: "asesoria",
    title: "Asesoría Contable",
    description: "Asesoría personalizada para optimizar tu contabilidad y tomar decisiones financieras informadas.",
    icon: "Users",
    features: [
      "Consultoría contable personalizada",
      "Análisis financiero",
      "Optimización fiscal",
      "Soporte continuo"
    ]
  }
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Calculator":
      return <Calculator className="w-8 h-8" />
    case "FileText":
      return <FileText className="w-8 h-8" />
    case "Users":
      return <Users className="w-8 h-8" />
    default:
      return <Calculator className="w-8 h-8" />
  }
}

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios contables integrales diseñados para simplificar 
            tu gestión financiera y garantizar el cumplimiento fiscal.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.icon)}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contáctanos para discutir tus necesidades específicas y obtener 
              una propuesta personalizada que se adapte a tu negocio.
            </p>
            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Solicita una cotización
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection

