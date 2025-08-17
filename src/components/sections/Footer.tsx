"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              PM Contabilidad
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Más de 10 años brindando servicios contables profesionales y asesoría fiscal 
              de la más alta calidad. Simplificamos tu contabilidad para que te enfoques 
              en hacer crecer tu negocio.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contacto@pmcontabilidad.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Av. Insurgentes Sur 1234, CDMX</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("beneficios")}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Beneficios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("proceso")}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Proceso
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-slate-300">Conciliaciones Bancarias</span>
              </li>
              <li>
                <span className="text-slate-300">Declaraciones Fiscales</span>
              </li>
              <li>
                <span className="text-slate-300">Asesoría Contable</span>
              </li>
              <li>
                <span className="text-slate-300">Consultoría Fiscal</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Media & Legal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:bg-blue-700 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:bg-blue-400 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:bg-slate-600 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:bg-blue-700 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Aviso Legal
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-slate-400 text-sm">
            <p>
              © {currentYear} PM Contabilidad. Todos los derechos reservados. 
              Desarrollado con ❤️ para simplificar tu contabilidad.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

