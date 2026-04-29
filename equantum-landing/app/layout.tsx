import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "eQuantum | Arquitectura Digital para Empresas B2B",
  description:
    "Transformamos tu presencia digital en un activo comercial. Consultoría tecnológica senior, sitios corporativos, ecommerce, automatización e integración mySAP ERP.",
  keywords: [
    "consultoría digital",
    "arquitectura digital",
    "ecommerce B2B",
    "mySAP ERP",
    "automatización",
    "Paraguay",
  ],
  authors: [{ name: "eQuantum" }],
  openGraph: {
    title: "eQuantum | Arquitectura Digital que Convierte",
    description:
      "Más credibilidad, mejor jerarquía de propuesta y un sistema diseñado para generar demanda calificada.",
    type: "website",
    locale: "es_PY",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
