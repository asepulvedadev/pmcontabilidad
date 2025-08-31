"use client"

import { motion } from "framer-motion"
import { 
  MessageCircle, 
  ArrowRight
} from "lucide-react"
import ContactForm from "@/components/forms/ContactForm"

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <MessageCircle className="w-4 h-4" />
            Contacto Directo
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Hablemos de tu{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Futuro Financiero
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Estamos listos para escucharte y transformar tu contabilidad. 
            Completa el formulario o contáctanos directamente para comenzar tu camino hacia el éxito financiero.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-[90%] mx-auto"
        >
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50 shadow-2xl relative overflow-hidden">
              {/* Form Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                 
                  
                  <h3 className="text-3xl font-bold text-foreground mb-3">
                    Envíanos un Mensaje
                  </h3>
                  
                </div>
                
                <ContactForm />
              </div>
            </div>
          </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Listo para transformar tu contabilidad?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Únete a cientos de empresas que ya confían en nosotros para manejar sus finanzas 
              de manera profesional y eficiente.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              Comenzar Ahora
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

