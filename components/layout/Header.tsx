"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proceso", href: "#proceso" },
  { label: "Casos", href: "#casos" },
  { label: "Contacto", href: "#contacto" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#E5E7EB]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" aria-label="Principal">
        <a href="#" className="text-2xl font-bold text-[#091F51]">Equantum</a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => <a key={l.href} href={l.href} className="text-sm font-medium text-[#111827] hover:text-[#091F51] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#091F51] rounded">{l.label}</a>)}
          <a href="https://wa.me/595985194953" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg bg-[#091F51] text-white text-sm font-semibold hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#091F51]">Solicitar diagnóstico</a>
        </div>
        <button aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded text-[#091F51] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#091F51]">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div id="mobile-menu" className="md:hidden border-t border-[#E5E7EB] bg-white px-4 py-4 space-y-4">{links.map((l)=><a onClick={()=>setOpen(false)} key={l.href} href={l.href} className="block text-[#111827]">{l.label}</a>)}<a href="https://wa.me/595985194953" target="_blank" rel="noopener noreferrer" className="block text-center px-4 py-3 rounded-lg bg-[#091F51] text-white font-semibold">Solicitar diagnóstico</a></div>}
    </header>
  )
}
