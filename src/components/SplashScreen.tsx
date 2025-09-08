"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const SplashScreen = () => {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Bloquear scroll mientras el splash está visible
    if (visible) {
      const original = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [visible])

  useEffect(() => {
    // Progreso más rápido hasta 100%
    const interval = setInterval(() => {
      setProgress((p) => {
        const target = p < 80 ? p + 14 + Math.random() * 6 : p + 8 + Math.random() * 4
        return Math.min(100, target)
      })
    }, 60)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => setVisible(false), 200) // pausa final más corta
      return () => clearTimeout(timer)
    }
  }, [progress])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-background"
          aria-hidden="true"
        >
          {/* Fondo sólido opaco */}
          <div className="absolute inset-0" />

          {/* Decoración interna */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-6 px-6">
            <Image src="/Logo.svg" alt="PM Contabilidad" width={260} height={200} className="w-auto h-16 sm:h-20 logo-sharp" priority />

            {/* Barra de progreso */}
            <div className="w-64 sm:w-80">
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary/70"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
                <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-[1px]" />
              </div>
              <div className="mt-2 text-center text-xs text-muted-foreground">
                Preparando tu experiencia financiera • {Math.round(progress)}%
              </div>
            </div>

            {/* Píldoras temáticas */}
            <div className="grid grid-cols-3 gap-3 text-[11px] text-muted-foreground">
              {[
                "Conciliando",
                "Reportando",
                "Verificando",
              ].map((txt, idx) => (
                <motion.span
                  key={txt}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  className="px-3 py-1 rounded-full bg-secondary/50 border border-border/50"
                >
                  {txt}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen
