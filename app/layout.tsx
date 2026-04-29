import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL("https://equantumconsultingroupcompy.vercel.app"),
  title: "Equantum Consulting Group | Soluciones digitales para empresas en Paraguay",
  description:
    "Diseñamos sitios web, ecommerce, sistemas e integraciones para empresas que necesitan vender mejor, ordenar su operación digital y escalar con criterio.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Equantum Consulting Group | Soluciones digitales para empresas en Paraguay",
    description:
      "Diseñamos sitios web, ecommerce, sistemas e integraciones para empresas que necesitan vender mejor, ordenar su operación digital y escalar con criterio.",
    url: "/",
    siteName: "Equantum Consulting Group",
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equantum Consulting Group | Soluciones digitales para empresas en Paraguay",
    description:
      "Diseñamos sitios web, ecommerce, sistemas e integraciones para empresas que necesitan vender mejor, ordenar su operación digital y escalar con criterio.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
