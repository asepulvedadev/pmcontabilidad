# Guía de Automatización del Formulario de Contacto

Esta guía te ayudará a conectar el formulario de contacto con diferentes servicios de automatización para gestionar leads de manera eficiente.

## 📋 Estructura de Datos

El formulario envía los siguientes datos a `/api/contact`:

```json
{
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "phone": "+52 55 1234 5678",
  "serviceType": "conciliaciones",
  "message": "Necesito ayuda con conciliaciones bancarias"
}
```

## 🔧 Configuración de Automatizaciones

### 1. Email Marketing (Resend)

```bash
npm install resend
```

```typescript
// En /api/contact/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

async function sendEmail(data: any) {
  await resend.emails.send({
    from: 'contacto@pmcontabilidad.com',
    to: ['admin@pmcontabilidad.com'],
    subject: 'Nuevo mensaje de contacto',
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Teléfono:</strong> ${data.phone}</p>
      <p><strong>Servicio:</strong> ${data.serviceType}</p>
      <p><strong>Mensaje:</strong> ${data.message}</p>
    `
  })
}
```

### 2. CRM - HubSpot

```bash
npm install @hubspot/api-client
```

```typescript
// En /api/contact/route.ts
import { Client } from '@hubspot/api-client'

const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })

async function createCRMLead(data: any) {
  await hubspotClient.crm.contacts.basicApi.create({
    properties: {
      firstname: data.name.split(' ')[0],
      lastname: data.name.split(' ').slice(1).join(' '),
      email: data.email,
      phone: data.phone,
      company: 'Lead from Website',
      lifecyclestage: 'lead',
      lead_status: 'new'
    }
  })
}
```

### 3. Base de Datos - Prisma + PostgreSQL

```bash
npm install prisma @prisma/client
npx prisma init
```

```sql
-- schema.prisma
model Contact {
  id          String   @id @default(cuid())
  name        String
  email       String
  phone       String
  serviceType String
  message     String
  status      String   @default("new")
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

```typescript
// En /api/contact/route.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function saveToDatabase(data: any) {
  await prisma.contact.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      serviceType: data.serviceType,
      message: data.message,
      status: 'new'
    }
  })
}
```

### 4. Notificaciones - Slack

```typescript
// En /api/contact/route.ts
async function sendNotification(data: any) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL
  
  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: `Nuevo mensaje de contacto de ${data.name} (${data.email})`,
      attachments: [{
        fields: [
          { title: 'Servicio', value: data.serviceType, short: true },
          { title: 'Teléfono', value: data.phone, short: true },
          { title: 'Mensaje', value: data.message, short: false }
        ]
      }]
    })
  })
}
```

### 5. Google Sheets

```bash
npm install googleapis
```

```typescript
// En /api/contact/route.ts
import { google } from 'googleapis'

const sheets = google.sheets({ version: 'v4' })

async function addToGoogleSheet(data: any) {
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'Leads!A:F',
    valueInputOption: 'RAW',
    resource: {
      values: [[
        new Date().toISOString(),
        data.name,
        data.email,
        data.phone,
        data.serviceType,
        data.message
      ]]
    }
  })
}
```

### 6. WhatsApp Business API

```bash
npm install whatsapp-web.js
```

```typescript
// En /api/contact/route.ts
import { Client } from 'whatsapp-web.js'

async function sendWhatsAppMessage(data: any) {
  const client = new Client({
    authStrategy: new LocalAuth()
  })
  
  await client.initialize()
  
  const message = `Nuevo lead recibido:
  
Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone}
Servicio: ${data.serviceType}
Mensaje: ${data.message}`

  await client.sendMessage('55123456789@c.us', message)
}
```

## 🌐 Variables de Entorno

Crea un archivo `.env.local` con las siguientes variables:

```env
# Email (Resend)
RESEND_API_KEY=your_resend_api_key

# CRM (HubSpot)
HUBSPOT_ACCESS_TOKEN=your_hubspot_token

# Database
DATABASE_URL=your_database_url

# Slack
SLACK_WEBHOOK_URL=your_slack_webhook

# Google Sheets
GOOGLE_SHEET_ID=your_sheet_id
GOOGLE_SERVICE_ACCOUNT_KEY=your_service_account_key

# WhatsApp
WHATSAPP_SESSION_PATH=./whatsapp-session
```

## 🚀 Implementación Paso a Paso

1. **Elige las automatizaciones** que necesitas
2. **Instala las dependencias** correspondientes
3. **Configura las variables de entorno**
4. **Descomenta las funciones** en `/api/contact/route.ts`
5. **Prueba el formulario** para verificar que todo funcione

## 📊 Flujo de Automatización Recomendado

```
Formulario → API → [Email + CRM + Database + Slack]
                ↓
            Respuesta al usuario
```

## 🔒 Seguridad

- Valida todos los datos de entrada
- Usa HTTPS en producción
- Protege las claves API
- Implementa rate limiting
- Considera usar CAPTCHA para prevenir spam

## 📈 Analytics y Tracking

Puedes agregar tracking adicional:

```typescript
// Google Analytics 4
gtag('event', 'form_submit', {
  event_category: 'contact',
  event_label: data.serviceType
})

// Facebook Pixel
fbq('track', 'Lead', {
  content_name: 'Contact Form',
  content_category: data.serviceType
})
```

## 🛠️ Troubleshooting

### Error común: CORS
```typescript
// En next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/api/contact',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'POST' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ]
  },
}
```

### Error común: Rate Limiting
```typescript
// Implementar rate limiting
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5 // máximo 5 envíos por IP
})
```

## 📞 Soporte

Para más ayuda con la implementación, consulta:
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Resend](https://resend.com/docs)
- [Documentación de HubSpot](https://developers.hubspot.com/)
- [Documentación de Prisma](https://www.prisma.io/docs)
