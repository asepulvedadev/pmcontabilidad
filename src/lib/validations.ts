import * as z from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(10, "El teléfono debe tener al menos 10 dígitos"),
  serviceType: z.string().min(1, "Selecciona un tipo de servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>

