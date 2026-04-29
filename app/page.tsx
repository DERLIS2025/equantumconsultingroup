"use client"

import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe,
  Layers,
  MessageSquare,
  ShoppingCart,
  Zap,
  Menu,
  X,
  ArrowUpRight,
  TrendingUp,
  Users,
  Clock,
  Target,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react"

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </div>
  )
}

function RotatingText() {
  const phrases = [
    "Tu competencia no espera.",
    "Quedarse en el mismo lugar es retroceder.",
  ]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % phrases.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-8 md:h-10 overflow-hidden mb-6">
      <div
        className="transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(-${current * 100}%)` }}
      >
        {phrases.map((phrase, i) => (
          <div key={i} className="h-8 md:h-10 flex items-center">
            <span className="text-lg md:text-xl font-semibold text-[#3A4C74] tracking-wide">
              {phrase}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Casos", href: "#casos" },
    { label: "Proceso", href: "#proceso" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white border-b border-gray-200 shadow-sm" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-gray-900 tracking-tight">
            e<span className="text-[#3A4C74]">Quantum</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3A4C74] text-white text-sm font-semibold rounded-lg hover:bg-[#2a3c64] transition-colors">
              Agendar sesión
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button className="md:hidden text-gray-900" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3A4C74] text-white text-sm font-semibold rounded-lg" onClick={() => setMobileOpen(false)}>
              Agendar sesión
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <RotatingText />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
                Arquitectura digital que{" "}
                <span className="text-[#3A4C74]">convierte mejor</span> y escala con criterio.
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                Transformamos tu presencia digital en un activo comercial: más credibilidad,
                mejor jerarquía de propuesta y un sistema diseñado para generar demanda calificada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3A4C74] text-white font-semibold rounded-lg hover:bg-[#2a3c64] transition-colors">
                  Solicitar diagnóstico estratégico
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#servicios" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                  Ver servicios
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#3A4C74]" />
                <span className="text-gray-700">60+ Proyectos B2B/Ecommerce</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#3A4C74]" />
                <span className="text-gray-700">End-to-end: Estrategia + Diseño + Tech</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#3A4C74]" />
                <span className="text-gray-700">Entregable inicial en 10 días hábiles</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      icon: BarChart3,
      title: "Arquitectura Digital & Consultoría",
      desc: "Diagnóstico ejecutivo de activos y embudo digital. Definición de hoja de ruta por impacto y esfuerzo.",
    },
    {
      icon: Building2,
      title: "Sitios Corporativos B2B",
      desc: "Narrativa comercial clara para tomadores de decisión. Diseño UX/UI premium con jerarquía y CTAs estratégicos.",
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce y Canales de Venta",
      desc: "Optimización de experiencia de compra y catálogo. Integraciones clave para operación y trazabilidad comercial.",
    },
    {
      icon: Zap,
      title: "Automatización, Datos y Performance",
      desc: "Implementación de analítica y paneles para dirección. Automatizaciones para marketing, ventas y operaciones.",
    },
    {
      icon: CheckCircle2,
      title: "Sistemas de Aprobaciones y Gestión Interna",
      desc: "Plataforma centralizada de flujos de aprobación. Trazabilidad completa, historial auditado, roles configurables.",
    },
    {
      icon: Layers,
      title: "Consultoría e Integración mySAP ERP",
      desc: "Consultoría estratégica para soluciones mySAP ERP. Integración de procesos por rol + Solution Support continuo.",
    },
  ]

  return (
    <section id="servicios" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Capacidades para construir y escalar una operación digital seria
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group p-6 rounded-xl border border-gray-200 hover:border-[#3A4C74]/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-[#3A4C74]/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#3A4C74]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { number: "60+", label: "Proyectos B2B/Ecommerce", suffix: "" },
    { number: "10", label: "Días hábiles", suffix: "entregable inicial" },
    { number: "3", label: "Pilares", suffix: "Estrategia + Diseño + Tech" },
    { number: "100%", label: "Enfoque", suffix: "Conversión y escalabilidad" },
  ]

  return (
    <section id="nosotros" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre Nosotros
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Estrategia, experiencia y tecnología bajo una única dirección ejecutiva.
              Coordinamos negocio, marketing y producto para que cada decisión digital
              responda a objetivos comerciales concretos.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#3A4C74] mb-2">
                  {stat.number}
                </div>
                <div className="w-12 h-0.5 bg-[#3A4C74] mx-auto mb-3" />
                <div className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {stat.suffix}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Cases() {
  const cases = [
    {
      client: "Marmolería Pietra",
      type: "Sitio corporativo · B2B",
      desc: "Nuevo sitio con narrativa B2B y estructura de conversión por tipo de proyecto. Posicionamiento en proyectos premium.",
      result: "+41%",
      resultLabel: "consultas calificadas en 90 días",
      color: "bg-[#e8f4f8]",
    },
    {
      client: "Corpicia",
      type: "Ecommerce · Reposicionamiento",
      desc: "Reposicionamiento de propuesta y arquitectura de servicios para venta consultiva. Oferta técnica sólida.",
      result: "↓50%",
      resultLabel: "ciclos de venta más cortos",
      color: "bg-[#f0f4f8]",
    },
    {
      client: "Expansión Regional",
      type: "Multicanal · Escalabilidad",
      desc: "Ecosistema modular multicanal con governance de contenidos y medición. Despliegue regional sin perder consistencia.",
      result: "Semanas",
      resultLabel: "despliegue, no meses",
      color: "bg-[#f8f0f4]",
    },
    {
      client: "RMI S.R.L",
      type: "Gestión interna · SAP",
      desc: "Plataforma centralizada de aprobaciones con flujos configurables y historial completo. Trazabilidad total.",
      result: "1 clic",
      resultLabel: "auditoría lista, cero dependencia",
      color: "bg-[#f4f8f0]",
    },
  ]

  return (
    <section id="casos" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explora Nuestro Portafolio
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Resultados aplicados a contextos reales de negocio
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group rounded-xl overflow-hidden border border-gray-200 hover:border-[#3A4C74]/30 transition-all hover:-translate-y-1">
                <div className={`h-48 ${c.color} flex items-center justify-center`}>
                  <span className="text-6xl font-bold text-gray-300">IMG</span>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-[#3A4C74] uppercase tracking-wider mb-2">
                    {c.type}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {c.client}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {c.desc}
                  </p>
                  <div className="flex items-baseline gap-2 pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-[#3A4C74]">
                      {c.result}
                    </span>
                    <span className="text-sm text-gray-500">
                      {c.resultLabel}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { number: "01", title: "Diagnóstico", desc: "Auditamos situación actual, puntos de fuga y oportunidades de captura de demanda.", icon: Target },
    { number: "02", title: "Blueprint", desc: "Diseñamos estructura, mensajes, journeys y stack tecnológico con prioridades concretas.", icon: Layers },
    { number: "03", title: "Implementación", desc: "Ejecutamos con entregables iterativos para generar valor temprano y controlar riesgos.", icon: Zap },
    { number: "04", title: "Optimización", desc: "Medimos resultados, iteramos y alineamos evolución digital con objetivos comerciales.", icon: TrendingUp },
  ]

  return (
    <section id="proceso" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Proceso de Trabajo en 4 Pasos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un enfoque estructurado y probado que transforma ideas en soluciones digitales exitosas.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="relative p-6 rounded-xl bg-white border border-gray-200 h-full">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#3A4C74] text-white flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#3A4C74]/10 flex items-center justify-center mb-4 mt-2">
                  <step.icon className="w-5 h-5 text-[#3A4C74]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Qué servicios de consultoría digital ofrecen?",
      answer: "Ofrecemos consultoría end-to-end: arquitectura digital, sitios corporativos B2B, ecommerce, automatización, sistemas de gestión interna e integración mySAP ERP.",
    },
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto?",
      answer: "Nuestro entregable inicial está listo en 10 días hábiles. Proyectos completos varían según complejidad, pero trabajamos con metodología ágil para entregar valor temprano.",
    },
    {
      question: "¿Con qué tamaño de empresas trabajan?",
      answer: "Trabajamos con empresas en crecimiento y medianas que necesitan escalar su operación digital. Desde startups B2B hasta empresas con presencia regional.",
    },
    {
      question: "¿Ofrecen mantenimiento y soporte después de entregar?",
      answer: "Sí. Incluimos 30 días de acompañamiento post-implementación. Además ofrecemos Solution Support continuo para nuestros clientes mySAP ERP.",
    },
    {
      question: "¿Pueden ayudarnos a mejorar nuestras ventas en línea?",
      answer: "Absolutamente. Especializamos en optimizar embudos de conversión, desde la primera impresión digital hasta el cierre comercial, con trazabilidad completa.",
    },
  ]

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 50}>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                {openIndex === i && (
                  <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contacto" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            ¿Listo para{" "}
            <span className="text-[#3A4C74]">escalar tu operación digital</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Trabajamos contigo para entender tus necesidades y desarrollar soluciones
            personalizadas que realmente marcan la diferencia.
          </p>
          <a
            href="https://wa.me/595XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#3A4C74] text-white font-semibold rounded-lg hover:bg-[#2a3c64] transition-all hover:scale-105"
          >
            <MessageSquare className="w-5 h-5" />
            Agendar sesión estratégica
          </a>
        </FadeIn>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-16 bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">
              e<span className="text-blue-300">Quantum</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Arquitectura digital que convierte mejor y escala con criterio.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#casos" className="hover:text-white transition-colors">Casos</a></li>
              <li><a href="#proceso" className="hover:text-white transition-colors">Proceso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Arquitectura Digital</li>
              <li>Sitios Corporativos B2B</li>
              <li>Ecommerce</li>
              <li>mySAP ERP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+595 981 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contacto@equantum.com.py</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Asunción, Paraguay</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            © 2026 eQuantum. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de servicio</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Cases />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}