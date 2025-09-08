"use client"

import { motion } from "framer-motion"

export default function TermsPage() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.06 } },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Términos de Servicio</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estos términos regulan el uso del sitio y los servicios que ofrecemos. Al utilizar nuestra web, aceptas estos términos.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="visible" className="space-y-8 bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-border/50 shadow-xl">
          <motion.div variants={item} className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">1. Uso del sitio</h2>
            <p className="text-muted-foreground leading-relaxed">
              Te comprometes a utilizar el sitio de manera lícita, sin infringir derechos de terceros ni obstaculizar el funcionamiento del servicio.
            </p>
          </motion.div>

          <motion.div variants={item} className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">2. Propuestas y contratación</h2>
            <p className="text-muted-foreground leading-relaxed">
              Las propuestas enviadas a través del formulario no constituyen un contrato hasta su aceptación expresa por ambas partes.
            </p>
          </motion.div>

          <motion.div variants={item} className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">3. Responsabilidad</h2>
            <p className="text-muted-foreground leading-relaxed">
              Actuamos con diligencia profesional. No obstante, no nos hacemos responsables por daños indirectos derivados del uso del sitio.
            </p>
          </motion.div>

          <motion.div variants={item} className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">4. Propiedad intelectual</h2>
            <p className="text-muted-foreground leading-relaxed">
              El contenido del sitio, marcas y logotipos están protegidos por derechos de propiedad intelectual. No está permitido su uso sin autorización.
            </p>
          </motion.div>

          <motion.div variants={item} className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">5. Protección de datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tratamos los datos personales conforme a nuestra <a className="text-primary underline" href="/privacidad">Política de Privacidad</a>.
            </p>
          </motion.div>

          <motion.div variants={item} className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">6. Modificaciones</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podremos actualizar estos términos para reflejar cambios legales o de servicio. La versión vigente se publicará en esta página.
            </p>
            <p className="text-xs text-muted-foreground">Última actualización: {new Date().toLocaleDateString()}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
