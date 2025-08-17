import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "PM Contabilidad - Servicios Contables y Fiscales Profesionales",
  description: "Servicios profesionales de contabilidad: conciliaciones bancarias, declaraciones fiscales mensuales y anuales, asesoría contable confiable. Más de 10 años de experiencia.",
  keywords: [
    "despacho contable",
    "servicios fiscales",
    "conciliaciones bancarias",
    "declaraciones mensuales",
    "asesoría contable",
    "contabilidad empresarial",
    "servicios contables CDMX",
    "declaraciones fiscales México"
  ],
  authors: [{ name: "PM Contabilidad" }],
  creator: "PM Contabilidad",
  publisher: "PM Contabilidad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pmcontabilidad.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://pmcontabilidad.com",
    title: "PM Contabilidad - Servicios Contables y Fiscales Profesionales",
    description: "Servicios profesionales de contabilidad: conciliaciones bancarias, declaraciones fiscales mensuales y anuales, asesoría contable confiable.",
    siteName: "PM Contabilidad",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PM Contabilidad - Servicios Contables Profesionales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PM Contabilidad - Servicios Contables y Fiscales Profesionales",
    description: "Servicios profesionales de contabilidad: conciliaciones bancarias, declaraciones fiscales mensuales y anuales, asesoría contable confiable.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PM Contabilidad",
              "description": "Servicios profesionales de contabilidad y asesoría fiscal",
              "url": "https://pmcontabilidad.com",
              "telephone": "+52-55-1234-5678",
              "email": "contacto@pmcontabilidad.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Insurgentes Sur 1234",
                "addressLocality": "Ciudad de México",
                "addressRegion": "CDMX",
                "postalCode": "03100",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.4326",
                "longitude": "-99.1332"
              },
              "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-14:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "City",
                "name": "Ciudad de México"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios Contables",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Conciliaciones Bancarias",
                      "description": "Conciliaciones mensuales detalladas"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Declaraciones Fiscales",
                      "description": "Declaraciones mensuales y anuales"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Asesoría Contable",
                      "description": "Asesoría personalizada"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
