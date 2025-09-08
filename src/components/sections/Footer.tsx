"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-secondary/50 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-4">
              <Link href="/" aria-label="Ir al inicio" className="inline-flex">
                <Image
                  src="/logo-largo.svg"
                  alt="PM Contabilidad"
                  width={360}
                  height={52}
                  className="h-8 sm:h-10 w-auto"
                  priority
                />
              </Link>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Soluciones contables modernas para impulsar el crecimiento de tu negocio. Nos enfocamos en la eficiencia y la claridad para darte tranquilidad financiera.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("beneficios")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Beneficios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("proceso")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Proceso
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacidad" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Términos de Servicio
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-border/50 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} PM Contabilidad. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

