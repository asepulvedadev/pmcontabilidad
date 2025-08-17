"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema)
  })

  const serviceType = watch("serviceType")

  const onSubmit = async (data: ContactFormSchema) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Aquí iría la lógica real de envío
      console.log("Form data:", data)
      
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
  }

  const handleServiceTypeChange = (value: string) => {
    setValue("serviceType", value)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Success Message */}
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <div>
            <h4 className="font-semibold text-green-800">¡Mensaje enviado!</h4>
            <p className="text-green-700 text-sm">Nos pondremos en contacto contigo en las próximas 24 horas.</p>
          </div>
        </motion.div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600" />
          <div>
            <h4 className="font-semibold text-red-800">Error al enviar</h4>
            <p className="text-red-700 text-sm">Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Nombre completo *
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Tu nombre completo"
            {...register("name")}
            className={errors.name ? "border-red-500 focus:border-red-500" : ""}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Correo electrónico *
          </label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            {...register("email")}
            className={errors.email ? "border-red-500 focus:border-red-500" : ""}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Teléfono *
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="(123) 456-7890"
            {...register("phone")}
            className={errors.phone ? "border-red-500 focus:border-red-500" : ""}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Service Type Field */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-2">
            Tipo de servicio *
          </label>
          <Select onValueChange={handleServiceTypeChange} value={serviceType}>
            <SelectTrigger className={errors.serviceType ? "border-red-500 focus:border-red-500" : ""}>
              <SelectValue placeholder="Selecciona un servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="conciliaciones">Conciliaciones Bancarias</SelectItem>
              <SelectItem value="declaraciones">Declaraciones Fiscales</SelectItem>
              <SelectItem value="asesoria">Asesoría Contable</SelectItem>
              <SelectItem value="personalizado">Servicio Personalizado</SelectItem>
            </SelectContent>
          </Select>
          {errors.serviceType && (
            <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Mensaje *
          </label>
          <Textarea
            id="message"
            placeholder="Cuéntanos sobre tus necesidades contables..."
            rows={4}
            {...register("message")}
            className={errors.message ? "border-red-500 focus:border-red-500" : ""}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Enviando...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              Enviar mensaje
            </div>
          )}
        </Button>

        {/* Privacy Notice */}
        <p className="text-xs text-slate-500 text-center">
          Al enviar este formulario, aceptas que nos pongamos en contacto contigo 
          para responder tu consulta. No compartiremos tu información con terceros.
        </p>
      </form>
    </div>
  )
}

export default ContactForm

