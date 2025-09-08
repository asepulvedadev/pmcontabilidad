"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulación de progreso suave mientras Next.js carga la ruta
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 95) return 95 // deja un pequeño margen para que cierre cuando la ruta esté lista
        const increment = Math.random() * 7
        return Math.min(95, p + increment)
      })
    }, 120)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Fondo con patrón sutil */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Elementos decorativos */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="select-none"
        >
          <Image
            src="/Logo.svg"
            alt="PM Contabilidad"
            width={260}
            height={200}
            className="w-auto h-16 sm:h-20 logo-sharp"
            priority
          />
        </motion.div>

        {/* Barra de progreso */}
        <div className="w-[280px] sm:w-[360px]">
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-border">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-primary/70"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-[1px]" />
          </div>
          <div className="mt-2 text-center text-xs text-muted-foreground">
            Preparando tu experiencia financiera • {Math.round(progress)}%
          </div>
        </div>

        {/* Indicadores con tema contable */}
        <div className="grid grid-cols-3 gap-4 text-xs text-muted-foreground">
          <AnimatePresence>
            {[
              "Conciliando cuentas",
              "Cargando reportes",
              "Verificando saldos",
            ].map((txt, idx) => (
              <motion.span
                key={txt}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ delay: idx * 0.08 }}
                className="px-3 py-1 rounded-full bg-secondary/50 border border-border/50"
              >
                {txt}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
