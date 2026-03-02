import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: 'ECCO UNAH-VS | Elecciones Estudiantiles UNAH 2026 | Candidatos y Propuestas',
    template: '%s | ECCO UNAH-VS',
  },
  description:
    'ECCO Estudiantes Contra la Corrupcion - Movimiento estudiantil UNAH-VS. Conoce nuestros candidatos, propuestas y planillas para las elecciones estudiantiles UNAH 2026.',
  metadataBase: new URL('https://ecco-vs.com'),
  openGraph: {
    type: 'website',
    locale: 'es_HN',
    siteName: 'ECCO UNAH-VS',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade"/></noscript>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="ECCO - VS" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SiteHeader />
          <main className="flex flex-col min-h-screen">
            <div className="flex-1">
              {children}
            </div>
            <SiteFooter />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
