# PM Contabilidad - Landing Page

Una landing page moderna y profesional para un despacho contable, construida con Next.js 15, TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Características

- **Diseño Mobile-First**: Completamente responsive con breakpoints estándar
- **SEO Optimizado**: Meta tags completos, Schema.org markup, sitemap.xml y robots.txt
- **Performance**: Optimizaciones de imagen, lazy loading y bundle splitting
- **Accesibilidad**: Navegación por teclado, focus states y ARIA labels
- **Animaciones**: Micro-animaciones suaves con Framer Motion
- **Formularios**: Validación con React Hook Form y Zod
- **Componentes UI**: Sistema de componentes con shadcn/ui
- **Seguridad**: Headers de seguridad y protección XSS

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15+ con App Router
- **Lenguaje**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Componentes**: shadcn/ui + Radix UI
- **Iconos**: Lucide React
- **Formularios**: React Hook Form + Zod
- **Animaciones**: Framer Motion
- **Validación**: Zod schema validation

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css          # Estilos globales y animaciones
│   ├── layout.tsx           # Layout principal con metadatos SEO
│   ├── page.tsx             # Página principal
│   ├── sitemap.ts           # Sitemap para SEO
│   └── robots.ts            # Robots.txt para SEO
├── components/
│   ├── ui/                  # Componentes base (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── select.tsx
│   ├── sections/            # Secciones de la landing page
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── WorkProcessSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── forms/               # Formularios
│       └── ContactForm.tsx
├── lib/
│   ├── utils.ts             # Utilidades (clsx, cn)
│   └── validations.ts       # Esquemas de validación Zod
└── types/
    └── index.ts             # Tipos TypeScript
```

## 🚀 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm, yarn o bun

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd pmcontabilidad
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   bun install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Editar `.env.local` con tus valores:
   ```bash
   NEXT_PUBLIC_SITE_URL=https://tudominio.com
   CONTACT_EMAIL=tu@email.com
   RESEND_API_KEY=tu_api_key_de_resend
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   bun dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con Turbopack
- `npm run build` - Construcción para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linting del código

## 📱 Secciones de la Landing Page

### 1. Hero Section
- Título impactante con gradiente
- Subtítulo explicativo
- CTA principal y secundario
- Indicadores de confianza
- Animaciones de entrada

### 2. Servicios
- Cards para los 3 servicios principales
- Iconos y características
- Hover effects
- CTA para cotización personalizada

### 3. Beneficios
- 4 beneficios clave del despacho
- Estadísticas de la empresa
- CTA para programar cita

### 4. Proceso de Trabajo
- 4 etapas del proceso
- Timeline visual
- Información adicional
- CTA para agendar llamada

### 5. Contacto
- Formulario con validación
- Información de contacto
- Horarios de atención
- CTA para llamada directa

### 6. Footer
- Enlaces rápidos
- Redes sociales
- Enlaces legales
- Información de la empresa

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.ts`:
- **Azul primario**: `#2563eb` (blue-600)
- **Púrpura secundario**: `#9333ea` (purple-600)
- **Grises**: Escala completa de grises para texto y fondos

### Tipografía
- **Títulos**: Font-weight bold con tamaños responsivos
- **Cuerpo**: Font-weight normal con buena legibilidad
- **Gradientes**: Títulos principales con gradiente azul-púrpura

### Animaciones
- **Entrada**: Fade-in y slide-up con delays escalonados
- **Hover**: Transformaciones suaves y cambios de color
- **Scroll**: Animaciones basadas en Intersection Observer

## 🔧 Configuración de Producción

### Variables de Entorno Requeridas
```bash
NEXT_PUBLIC_SITE_URL=https://tudominio.com
CONTACT_EMAIL=tu@email.com
RESEND_API_KEY=tu_api_key_de_resend
```

### Despliegue en Vercel
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Desplegar automáticamente

### Despliegue en Otros Servidores
1. Ejecutar `npm run build`
2. Copiar carpeta `.next` y archivos estáticos
3. Configurar servidor web (nginx, Apache)

## 📊 SEO y Performance

### Meta Tags
- Título y descripción optimizados
- Open Graph para redes sociales
- Twitter Cards
- Keywords relevantes

### Schema.org
- Markup para LocalBusiness
- Información de contacto
- Servicios ofrecidos
- Horarios de atención

### Performance
- Lazy loading de imágenes
- Bundle splitting automático
- Compresión gzip
- Headers de seguridad

## 🛡️ Seguridad

### Headers de Seguridad
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: origin-when-cross-origin`

### Validación de Formularios
- Validación client-side con Zod
- Sanitización de inputs
- Rate limiting básico
- Protección CSRF

## 📱 PWA

### Características
- Manifest.json configurado
- Iconos en múltiples tamaños
- Colores de tema
- Display standalone

### Iconos Requeridos
- `icon-192.png` (192x192)
- `icon-512.png` (512x512)
- `apple-touch-icon.png` (180x180)

## 🧪 Testing

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npx tsc --noEmit
```

## 📈 Analytics y Monitoreo

### Google Analytics
Configurar `NEXT_PUBLIC_GA_ID` en variables de entorno

### Vercel Analytics
Habilitado automáticamente en despliegues de Vercel

## 🚀 Optimizaciones Futuras

- [ ] Implementar envío real de emails con Resend
- [ ] Añadir blog con MDX
- [ ] Implementar CMS headless
- [ ] Añadir testimonios de clientes
- [ ] Implementar chat en vivo
- [ ] Añadir calculadora de impuestos
- [ ] Implementar sistema de citas online

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto:
- Email: soporte@pmcontabilidad.com
- Documentación: [Link a documentación]
- Issues: [Link a issues del repositorio]

---

**Desarrollado con ❤️ para simplificar tu contabilidad**
