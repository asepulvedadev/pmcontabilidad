import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import SplashGate from "@/components/SplashGate"
import ContactModal from "@/components/ContactModal"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "PM Contabilidad - Soluciones Contables Modernas",
  description: "Ofrecemos servicios de contabilidad y asesoría fiscal adaptados a las necesidades de tu negocio. Simplificamos tus finanzas para que puedas enfocarte en crecer.",
  keywords: [
    "despacho contable",
    "servicios fiscales",
    "asesoría contable",
    "contabilidad para empresas",
    "declaraciones de impuestos",
    "consultoría financiera",
  ],
  metadataBase: new URL("https://pmcontabilidad.com"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://pmcontabilidad.com",
    title: "PM Contabilidad - Soluciones Contables Modernas",
    description: "Simplificamos la contabilidad de tu negocio con soluciones modernas y eficientes.",
    siteName: "PM Contabilidad",
  },
  twitter: {
    card: "summary_large_image",
    title: "PM Contabilidad - Soluciones Contables Modernas",
    description: "Simplificamos la contabilidad de tu negocio con soluciones modernas y eficientes.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable} dark`} suppressHydrationWarning>
      <body className="antialiased">
        <SplashGate />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ContactModal />
        </ThemeProvider>
      </body>
    </html>
  )
}
