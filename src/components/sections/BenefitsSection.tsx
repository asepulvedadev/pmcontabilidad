"use client"

import { motion } from "framer-motion"
import { Clock, Shield, Users, DollarSign } from "lucide-react"
import { Benefit } from "@/types"

const benefits: Benefit[] = [
  {
    id: "experiencia",
    title: "Más de 10 años de experiencia",
    description: "Contamos con una amplia trayectoria en el sector contable, manejando empresas de diversos tamaños y sectores.",
    icon: "Shield"
  },
  {
    id: "puntualidad",
    title: "Puntualidad garantizada",
    description: "Entregamos todos nuestros servicios en tiempo y forma, respetando las fechas límite fiscales y compromisos.",
    icon: "Clock"
  },
  {
    id: "personalizado",
    title: "Atención personalizada",
    description: "Cada cliente recibe atención individualizada, adaptando nuestros servicios a las necesidades específicas de su negocio.",
    icon: "Users"
  },
  {
    id: "precios",
    title: "Precios competitivos",
    description: "Ofrecemos tarifas justas y transparentes, sin costos ocultos, con planes flexibles que se adaptan a tu presupuesto.",
    icon: "DollarSign"
  }
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Shield":
      return <Shield className="w-8 h-8" />
    case "Clock":
      return <Clock className="w-8 h-8" />
    case "Users":
      return <Users className="w-8 h-8" />
    case "DollarSign":
      return <DollarSign className="w-8 h-8" />
    default:
      return <Shield className="w-8 h-8" />
  }
}

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
            ¿Por qué{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">
              elegirnos
            </span>
            ?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nuestro compromiso es brindar servicios contables de la más alta calidad, 
            con profesionalismo, puntualidad y atención personalizada.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {getIcon(benefit.icon)}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-700">500+</div>
              <div className="text-slate-600">Clientes satisfechos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-700">10+</div>
              <div className="text-slate-600">Años de experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-700">99%</div>
              <div className="text-slate-600">Cumplimiento de fechas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-700">24/7</div>
              <div className="text-slate-600">Soporte disponible</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para simplificar tu contabilidad?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Únete a cientos de empresas que ya confían en nuestros servicios 
              para mantener su contabilidad al día y cumplir con sus obligaciones fiscales.
            </p>
            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-blue-700 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Programa una cita
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BenefitsSection

