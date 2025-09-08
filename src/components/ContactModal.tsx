"use client"

import { useCallback, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import ContactForm from "@/components/forms/ContactForm"

const ContactModal = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = useCallback(() => setOpen(true), [])
  const handleClose = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const listener = () => handleOpen()
    window.addEventListener("open-contact-modal", listener as EventListener)
    return () => window.removeEventListener("open-contact-modal", listener as EventListener)
  }, [handleOpen])

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    if (open) document.addEventListener("keydown", onEsc)
    return () => document.removeEventListener("keydown", onEsc)
  }, [open, handleClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[140] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Fondo opaco */}
          <div className="absolute inset-0 bg-background" />

          {/* Contenido full viewport */}
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative z-10 w-full h-full max-w-none bg-card/95 backdrop-blur-md border-t border-border/50 overflow-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">Agenda tu consulta</h3>
                <button onClick={handleClose} aria-label="Cerrar" className="p-2 rounded-md hover:bg-secondary">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-card/80 border border-border/50 rounded-2xl p-6 md:p-10 shadow-xl">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ContactModal
