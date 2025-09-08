"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"

export default function PrivacyPolicyPage() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.06 } },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <Navigation />
      <section className="pt-28 pb-24 bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Política de Privacidad</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tu privacidad es importante para nosotros. Esta política explica cómo recopilamos, usamos y protegemos tu información.
            </p>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate="visible" className="space-y-8 bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-border/50 shadow-xl">
            <motion.div variants={item} className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">1. Información que recopilamos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Recopilamos información personal que nos proporcionas voluntariamente mediante formularios de contacto, como nombre, correo electrónico, teléfono y detalles del servicio requerido. También podemos recopilar datos técnicos (IP, tipo de navegador y páginas visitadas) para mejorar tu experiencia.
              </p>
            </motion.div>

            <motion.div variants={item} className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">2. Finalidad del tratamiento</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos tu información para responder consultas, preparar propuestas, prestar servicios contables y enviar comunicaciones relacionadas. No vendemos tus datos a terceros.
              </p>
            </motion.div>

            <motion.div variants={item} className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">3. Conservación y seguridad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conservamos la información durante el tiempo estrictamente necesario para las finalidades descritas y aplicamos medidas técnicas y organizativas para protegerla frente a accesos no autorizados, pérdida o alteración.
              </p>
            </motion.div>

            <motion.div variants={item} className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">4. Derechos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Puedes ejercer tus derechos de acceso, rectificación, cancelación, oposición, portabilidad y limitación escribiéndonos a contacto@pmcontabilidad.com. Atenderemos tu solicitud de acuerdo con la normativa aplicable.
              </p>
            </motion.div>

            <motion.div variants={item} className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">5. Cookies y analítica</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies esenciales y, en su caso, herramientas de analítica para entender el uso del sitio y mejorar nuestros servicios. Puedes ajustar tus preferencias desde la configuración del navegador.
              </p>
            </motion.div>

            <motion.div variants={item} className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">6. Cambios a esta política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podremos actualizar esta política para reflejar cambios legales o de servicio. Publicaremos la versión vigente con su fecha de entrada en vigor.
              </p>
              <p className="text-xs text-muted-foreground">Última actualización: {new Date().toLocaleDateString()}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )
}
