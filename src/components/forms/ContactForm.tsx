"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations"
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Building,
  Sparkles,
  Loader2
} from "lucide-react"

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [progress, setProgress] = useState(0)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
    setValue,
    watch,
    trigger
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange"
  })

  const watchedFields = watch()
  const serviceType = watchedFields.serviceType

  // Calculate form progress
  useEffect(() => {
    const fields: (keyof ContactFormSchema)[] = ['name', 'email', 'phone', 'serviceType', 'message']
    const filledFields = fields.filter(field => watchedFields[field] && watchedFields[field] !== '')
    setProgress((filledFields.length / fields.length) * 100)
  }, [watchedFields])

  const onSubmit = useCallback(async (data: ContactFormSchema) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Enviar datos a la API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.message || 'Error al enviar el formulario')
      }
      
      console.log("Form submitted successfully:", result)
      
      setSubmitStatus("success")
      reset()
      
      // Resetear el estado después de 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      
      // Resetear el estado después de 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }, [reset])

  const handleServiceTypeChange = useCallback((value: string) => {
    setValue("serviceType", value)
    trigger("serviceType")
  }, [setValue, trigger])

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  const progressVariants = {
    initial: { width: 0 },
    animate: (progress: number) => ({ 
      width: `${progress}%`,
      transition: { duration: 0.5, ease: "easeOut" as const }
    })
  }

  const fieldConfig = useMemo(() => ({
    icons: {
      name: <User className="w-4 h-4" />,
      email: <Mail className="w-4 h-4" />,
      phone: <Phone className="w-4 h-4" />,
      serviceType: <Building className="w-4 h-4" />,
      message: <MessageSquare className="w-4 h-4" />
    },
    labels: {
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      serviceType: 'Tipo de servicio',
      message: 'Mensaje'
    },
    placeholders: {
      name: 'Tu nombre completo',
      email: 'tu@email.com',
      phone: '(123) 456-7890',
      serviceType: 'Selecciona un servicio',
      message: 'Cuéntanos sobre tus necesidades contables...'
    }
  }), [])

  const getFieldIcon = useCallback((fieldName: keyof ContactFormSchema) => {
    return fieldConfig.icons[fieldName] || null
  }, [fieldConfig.icons])

  const getFieldLabel = useCallback((fieldName: keyof ContactFormSchema) => {
    return fieldConfig.labels[fieldName]
  }, [fieldConfig.labels])

  const getFieldPlaceholder = useCallback((fieldName: keyof ContactFormSchema) => {
    return fieldConfig.placeholders[fieldName]
  }, [fieldConfig.placeholders])

  return (
    <motion.div 
      className="w-full mx-auto"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">Progreso del formulario</span>
          <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
            variants={progressVariants}
            initial="initial"
            animate="animate"
            custom={progress}
          />
        </div>
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="mb-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl flex items-center gap-4 shadow-lg"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold text-green-800 text-lg">¡Mensaje enviado exitosamente!</h4>
              <p className="text-green-700">Nos pondremos en contacto contigo en las próximas 24 horas.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <AnimatePresence>
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="mb-6 p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl flex items-center gap-4 shadow-lg"
          >
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h4 className="font-bold text-red-800 text-lg">Error al enviar</h4>
              <p className="text-red-700">Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <motion.div variants={fieldVariants}>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            {getFieldIcon('name')}
            Nombre completo *
          </label>
          <div className="relative">
            <Input
              id="name"
              type="text"
              placeholder="Tu nombre completo"
              {...register("name")}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className={`transition-all duration-300 ${
                errors.name 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
                  : focusedField === 'name'
                  ? "border-primary focus:ring-primary/20 shadow-lg"
                  : "border-border hover:border-primary/50"
              }`}
            />
            {watchedFields.name && !errors.name && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
              </motion.div>
            )}
          </div>
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Email Field */}
        <motion.div variants={fieldVariants}>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            {getFieldIcon('email')}
            Correo electrónico *
          </label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              {...register("email")}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={`transition-all duration-300 ${
                errors.email 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
                  : focusedField === 'email'
                  ? "border-primary focus:ring-primary/20 shadow-lg"
                  : "border-border hover:border-primary/50"
              }`}
            />
            {watchedFields.email && !errors.email && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
              </motion.div>
            )}
          </div>
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Phone Field */}
        <motion.div variants={fieldVariants}>
          <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            {getFieldIcon('phone')}
            Teléfono *
          </label>
          <div className="relative">
            <Input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              {...register("phone")}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              className={`transition-all duration-300 ${
                errors.phone 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
                  : focusedField === 'phone'
                  ? "border-primary focus:ring-primary/20 shadow-lg"
                  : "border-border hover:border-primary/50"
              }`}
            />
            {watchedFields.phone && !errors.phone && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
              </motion.div>
            )}
          </div>
          <AnimatePresence>
            {errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.phone.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Service Type Field */}
        <motion.div variants={fieldVariants}>
          <label htmlFor="serviceType" className="block text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            {getFieldIcon('serviceType')}
            Tipo de servicio *
          </label>
          <div className="relative">
            <Select onValueChange={handleServiceTypeChange} value={serviceType}>
              <SelectTrigger 
                className={`transition-all duration-300 ${
                  errors.serviceType 
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
                    : focusedField === 'serviceType'
                    ? "border-primary focus:ring-primary/20 shadow-lg"
                    : "border-border hover:border-primary/50"
                }`}
                onFocus={() => setFocusedField('serviceType')}
                onBlur={() => setFocusedField(null)}
              >
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="conciliaciones">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Conciliaciones Bancarias
                  </div>
                </SelectItem>
                <SelectItem value="declaraciones">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Declaraciones Fiscales
                  </div>
                </SelectItem>
                <SelectItem value="asesoria">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Asesoría Contable
                  </div>
                </SelectItem>
                <SelectItem value="personalizado">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Servicio Personalizado
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            {watchedFields.serviceType && !errors.serviceType && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
              </motion.div>
            )}
          </div>
          <AnimatePresence>
            {errors.serviceType && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.serviceType.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Message Field */}
        <motion.div variants={fieldVariants}>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            {getFieldIcon('message')}
            Mensaje *
          </label>
          <div className="relative">
            <Textarea
              id="message"
              placeholder="Cuéntanos sobre tus necesidades contables..."
              rows={4}
              {...register("message")}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className={`transition-all duration-300 resize-none ${
                errors.message 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
                  : focusedField === 'message'
                  ? "border-primary focus:ring-primary/20 shadow-lg"
                  : "border-border hover:border-primary/50"
              }`}
            />
            {watchedFields.message && !errors.message && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-3"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
              </motion.div>
            )}
          </div>
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.message.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={fieldVariants}>
          <Button
            type="submit"
            disabled={isSubmitting || !isValid || !isDirty}
            className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-3">
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando mensaje...
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Enviar mensaje
                <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            )}
          </Button>
        </motion.div>

        {/* Privacy Notice */}
        <motion.div variants={fieldVariants} className="text-center">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Al enviar este formulario, aceptas que nos pongamos en contacto contigo 
            para responder tu consulta. No compartiremos tu información con terceros.
          </p>
        </motion.div>
      </form>
    </motion.div>
  )
}

export default ContactForm

