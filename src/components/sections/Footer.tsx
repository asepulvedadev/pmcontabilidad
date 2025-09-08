"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Ícono local de TikTok (SVG)
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path d="M30 8c1.6 2.4 3.9 4.3 6.7 5.1v5.2c-2.9-.1-5.7-1-8.2-2.7v10.2c0 6.3-5.1 11.4-11.4 11.4S5.8 32.1 5.8 25.8c0-6.3 5.1-11.4 11.4-11.4 1 0 2 .1 2.9.4v5.5c-.9-.4-1.9-.6-2.9-.6-3.4 0-6.1 2.8-6.1 6.1s2.8 6.1 6.1 6.1 6.1-2.8 6.1-6.1V8h6.7Z" fill="currentColor"/>
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Constantes de redes sociales (editar enlaces según corresponda)
  const socialLinks: { name: string; href: string; icon: React.ReactNode; aria: string }[] = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61579425272155",
      icon: <Facebook className="w-5 h-5" />,
      aria: "Facebook",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/pmcontabilidadmty/",
      icon: <Instagram className="w-5 h-5" />,
      aria: "Instagram",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@pmcontabilidad",
      icon: <TikTokIcon className="w-5 h-5" />,
      aria: "TikTok",
    },
  ]

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
              {socialLinks.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.aria} className="text-muted-foreground hover:text-primary">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

