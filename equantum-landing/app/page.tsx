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
} from "lucide-react"

// ============================================
// COMPONENTES REUTILIZABLES
// ============================================

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
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
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  )
}

function SectionTitle({
  eyebrow,
  title,
  description,
  centered = true,
}: {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

// ============================================
// SECCIONES
// ============================================

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-foreground tracking-tight">
            e<span className="text-accent">Quantum</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background text-sm font-semibold rounded-full hover:bg-accent-hover transition-colors"
            >
              Agendar sesión
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background text-sm font-semibold rounded-full"
              onClick={() => setMobileOpen(false)}
            >
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Consultoría tecnológica senior
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8">
            Arquitectura digital que{" "}
            <span className="text-gradient">convierte mejor</span> y escala con
            criterio.
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Transformamos tu presencia digital en un activo comercial: más credibilidad,
            mejor jerarquía de propuesta y un sistema diseñado para generar demanda
            calificada.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent-hover transition-all hover:scale-105"
            >
              Solicitar diagnóstico estratégico
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:bg-card transition-all"
            >
              Ver servicios
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>60+ Proyectos B2B/Ecommerce</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>End-to-end</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Entregable en 10 días hábiles</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  )
}

function Problems() {
  const problems = [
    {
      icon: Globe,
      title: "Sitios que se ven bien, pero no generan conversaciones",
      desc: "Inversión en diseño sin retorno de negocio. Tu web es un folleto digital, no un vendedor 24/7.",
    },
    {
      icon: MessageSquare,
      title: "Mensaje técnico desordenado que diluye valor",
      desc: "Frente a decisores, tu propuesta no se entiende. Pierdes oportunidades antes de la primera reunión.",
    },
    {
      icon: Layers,
      title: "Canales y herramientas desconectadas",
      desc: "Stack fragmentado, datos en silos, equipo perdiendo tiempo en tareas que deberían ser automáticas.",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionTitle
            eyebrow="El problema"
            title="De presencia digital improvisada a sistema comercial confiable"
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 leading-snug">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500}>
          <div className="mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-accent/10 to-transparent border border-accent/20">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Entregable inicial en 10 días hábiles
                </p>
                <p className="text-muted-foreground">
                  Mapa de oportunidades, quick wins y plan de implementación por fases.
                  Sin compromiso de largo plazo hasta que veas valor real.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      icon: BarChart3,
      title: "Arquitectura Digital & Consultoría",
      items: [
        "Diagnóstico ejecutivo de activos y embudo digital",
        "Definición de hoja de ruta por impacto y esfuerzo",
      ],
      result: "Decisiones informadas, no improvisadas",
    },
    {
      icon: Building2,
      title: "Sitios Corporativos B2B",
      items: [
        "Narrativa comercial clara para tomadores de decisión",
        "Diseño UX/UI premium con jerarquía y CTAs estratégicos",
      ],
      result: "Más credibilidad en reuniones, propuestas y demos",
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce y Canales de Venta",
      items: [
        "Optimización de experiencia de compra y catálogo",
        "Integraciones clave para operación y trazabilidad comercial",
      ],
      result: "Ciclos de venta más cortos, ticket promedio superior",
    },
    {
      icon: Zap,
      title: "Automatización, Datos y Performance",
      items: [
        "Implementación de analítica y paneles para dirección",
        "Automatizaciones para marketing, ventas y operaciones",
      ],
      result: "Métricas que guían, no que confunden",
    },
    {
      icon: CheckCircle2,
      title: "Sistemas de Aprobaciones y Gestión Interna",
      items: [
        "Plataforma centralizada de flujos de aprobación",
        "Trazabilidad completa, historial auditado, roles configurables",
      ],
      result: "De caos operativo a control ejecutivo",
    },
    {
      icon: Layers,
      title: "Consultoría e Integración mySAP ERP",
      items: [
        "Consultoría estratégica para soluciones mySAP ERP",
        "Integración de procesos por rol + Solution Support continuo",
      ],
      result: "Tu inversión SAP gestionando el negocio real",
    },
  ]

  return (
    <section id="servicios" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionTitle
            eyebrow="Servicios"
            title="Capacidades para construir y escalar una operación digital seria"
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group h-full p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all hover:-translate-y-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-accent">
                    → {service.result}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  const stats = [
    { number: "60+", label: "Proyectos B2B/Ecommerce" },
    { number: "End-to-end", label: "Framework senior" },
    { number: "10", label: "Días hábiles entregable inicial" },
    { number: "3", label: "Pilares: Estrategia + Diseño + Tech" },
  ]

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Sobre nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 max-w-4xl mx-auto">
              Estrategia, experiencia y tecnología bajo una única dirección ejecutiva
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Coordinamos negocio, marketing y producto para que cada decisión digital
              responda a objetivos comerciales concretos. Menos improvisación, más foco,
              más trazabilidad.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="text-center p-6 md:p-8 rounded-2xl bg-card border border-border">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
      challenge: "Posicionarse en proyectos premium y mejorar calidad de consultas",
      intervention:
        "Nuevo sitio con narrativa B2B y estructura de conversión por tipo de proyecto",
      result: "+41%",
      resultLabel: "consultas calificadas en 90 días",
      tags: ["Sitio corporativo", "B2B"],
    },
    {
      client: "Corpicia",
      challenge: "Oferta técnica sólida, comunicación digital dispersa",
      intervention:
        "Reposicionamiento de propuesta y arquitectura de servicios para venta consultiva",
      result: "↓",
      resultLabel: "ciclos de venta más cortos",
      tags: ["Ecommerce", "Reposicionamiento"],
    },
    {
      client: "Expansión Regional B2B",
      challenge: "Escalar a nuevas plazas sin perder consistencia ni eficiencia",
      intervention:
        "Ecosistema modular multicanal con governance de contenidos y medición",
      result: "Semanas",
      resultLabel: "despliegue regional, no meses",
      tags: ["Multicanal", "Escalabilidad"],
    },
    {
      client: "RMI S.R.L",
      challenge: "Aprobaciones informales por WhatsApp/Excel, sin trazabilidad",
      intervention:
        "Plataforma centralizada con flujos configurables y historial completo",
      result: "1 clic",
      resultLabel: "auditoría lista, cero dependencia",
      tags: ["Gestión interna", "SAP"],
    },
  ]

  return (
    <section id="casos" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionTitle
            eyebrow="Casos de éxito"
            title="Resultados aplicados a contextos reales de negocio"
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all hover:-translate-y-1">
                <div className="flex flex-wrap gap-2 mb-6">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {c.client}
                </h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider mb-1">
                      Desafío
                    </p>
                    <p className="text-muted-foreground text-sm">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider mb-1">
                      Intervención
                    </p>
                    <p className="text-muted-foreground text-sm">{c.intervention}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-bold text-accent">
                      {c.result}
                    </span>
                    <span className="text-sm text-muted-foreground">
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
    {
      number: "01",
      title: "Diagnóstico",
      desc: "Auditamos situación actual, puntos de fuga y oportunidades de captura de demanda.",
      icon: Target,
    },
    {
      number: "02",
      title: "Blueprint",
      desc: "Diseñamos estructura, mensajes, journeys y stack tecnológico con prioridades concretas.",
      icon: Layers,
    },
    {
      number: "03",
      title: "Implementación",
      desc: "Ejecutamos con entregables iterativos para generar valor temprano y controlar riesgos.",
      icon: Zap,
    },
    {
      number: "04",
      title: "Optimización",
      desc: "Medimos resultados, iteramos y alineamos evolución digital con objetivos comerciales.",
      icon: TrendingUp,
    },
  ]

  return (
    <section id="proceso" className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionTitle
            eyebrow="Metodología"
            title="Un método claro para decisiones de alto impacto"
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="relative p-8 rounded-2xl bg-card border border-border h-full">
                <div className="text-5xl font-bold text-accent/20 mb-4">
                  {step.number}
                </div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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

function CTA() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
            Si tu presencia digital no acompaña tu nivel de negocio,{" "}
            <span className="text-gradient">es momento de corregirlo</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Coordinemos una sesión estratégica de 30 minutos para identificar brechas
            críticas y definir un plan de evolución realista para los próximos 90 días.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://wa.me/595XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent-hover transition-all hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              Agendar sesión estratégica
            </a>
            <a
              href="mailto:contacto@equantum.com.py"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:bg-card transition-all"
            >
              contacto@equantum.com.py
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>Respuesta en 24 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span>Sesión con director ejecutivo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Sin costo, sin compromiso</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 bg-neutral-950 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold text-foreground tracking-tight">
            e<span className="text-accent">Quantum</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Términos de servicio
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2026 eQuantum. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// PAGE
// ============================================

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problems />
      <Services />
      <About />
      <Cases />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}
