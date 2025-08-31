export interface ContactFormData {
  name: string
  email: string
  phone: string
  serviceType: string
  message: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Benefit {
  id: string
  title: string
  description: string
  icon: string
}

export interface WorkStep {
  id: string
  title: string
  description: string
  step: number
  icon: string
}

