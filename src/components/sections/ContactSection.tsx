"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import ContactForm from "@/components/forms/ContactForm"

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
            ¿Listo para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600">
              contactarnos
            </span>
            ?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte con todas tus necesidades contables. 
            Envíanos un mensaje y nos pondremos en contacto contigo en las próximas 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Información de contacto
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Nuestro equipo de expertos contables está listo para atenderte. 
                Puedes contactarnos a través de cualquiera de estos medios o 
                llenar el formulario para una consulta más detallada.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Teléfono</h4>
                  <p className="text-slate-600">+52 (55) 1234-5678</p>
                  <p className="text-slate-600">+52 (55) 8765-4321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Correo electrónico</h4>
                  <p className="text-slate-600">contacto@pmcontabilidad.com</p>
                  <p className="text-slate-600">soporte@pmcontabilidad.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Oficina</h4>
                  <p className="text-slate-600">Av. Insurgentes Sur 1234</p>
                  <p className="text-slate-600">Col. Del Valle, CDMX 03100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Horarios de atención</h4>
                  <p className="text-slate-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p className="text-slate-600">Sábados: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-blue-700" />
                </div>
                <h4 className="font-semibold text-slate-900">Consulta gratuita</h4>
              </div>
              <p className="text-slate-600 text-sm">
                Ofrecemos una consulta inicial sin costo para evaluar tus necesidades 
                y proporcionarte la mejor solución contable para tu negocio.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Envíanos un mensaje
              </h3>
              <p className="text-slate-600">
                Completa el formulario y nos pondremos en contacto contigo
              </p>
            </div>
            
            <ContactForm />
          </motion.div>
        </div>

        {/* Map or Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Prefieres una llamada directa?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Si prefieres hablar directamente con uno de nuestros especialistas, 
              puedes llamarnos directamente o agendar una cita en el horario que mejor te convenga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+525512345678"
                className="bg-white text-blue-700 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Llamar ahora
              </a>
              <button
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Agendar cita
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

