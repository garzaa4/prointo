import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const _inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Prointo | Todo en Protección Industrial',
  description: 'Equipos de protección personal e industrial: cascos, botas, arneses, lentes, mascarillas y más. Solicita tu cotización sin compromiso.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/iconl.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/iconn.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/iconl.png',
        type: 'image/png',
      },
    ],
    apple: '/iconn.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
