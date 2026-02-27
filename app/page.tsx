import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Countdown } from '@/components/countdown'
import { CareerCard } from '@/components/career-card'
import { FAQSection } from '@/components/faq-section'
import { ReviewsBlock } from '@/components/reviews-block'
import { BreadcrumbsNav } from '@/components/breadcrumbs-nav'
import { JsonLd } from '@/components/json-ld'
import {
  generateHomePageMetadata,
  generateOrganizationLD,
  generateEventLD,
} from '@/lib/seo-utils'
import { getCarrerasOnly, getEntidadesGobierno } from '@/data/carreras'
import type { FAQ } from '@/data/carreras'

export function generateMetadata(): Metadata {
  return generateHomePageMetadata()
}

const homeFaqs: FAQ[] = [
  {
    pregunta: 'Cuando son las elecciones estudiantiles UNAH 2026?',
    respuesta:
      'Las elecciones estudiantiles de la UNAH se realizaran el 8 de abril de 2026 en todas las sedes y centros regionales de la universidad.',
  },
  {
    pregunta: 'Que es ECCO y cual es su propuesta principal?',
    respuesta:
      'ECCO (Estudiantes Contra la Corrupcion) es un movimiento estudiantil de la UNAH-VS comprometido con la transparencia, la rendicion de cuentas y la mejora de la vida universitaria.',
  },
  {
    pregunta: 'Como puedo conocer a los candidatos de mi carrera?',
    respuesta:
      'Navega a la seccion de planillas y selecciona tu carrera para conocer a los candidatos, sus propuestas y su vision para el futuro de tu programa academico.',
  },
]

const upcomingEvents = [
  {
    title: 'Lorem ipsum dolor sit amet',
    date: '15 Mar 2026',
    description:
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    title: 'Ut enim ad minim veniam',
    date: '22 Mar 2026',
    description:
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Duis aute irure dolor',
    date: '01 Abr 2026',
    description:
      'In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
]

export default function HomePage() {
  const carreras = getCarrerasOnly()
  const entidades = getEntidadesGobierno()

  return (
    <>
      <JsonLd data={generateOrganizationLD()} />
      <JsonLd data={generateEventLD()} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-carrot-orange)_0%,_transparent_60%)] opacity-[0.07]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 pb-16 pt-12 text-center md:px-6 md:pb-24 md:pt-20">
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-charcoal md:text-5xl lg:text-6xl">
            Elecciones Estudiantiles UNAH 2026
            <span className="mt-2 block text-carrot-orange">
              ECCO Estudiantes Contra la Corrupcion
            </span>
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          {/* Countdown */}
          <div className="w-full max-w-xl">
            <Countdown />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-carrot-orange text-charcoal hover:bg-carrot-orange/90"
            >
              <Link href="/propuestas">
                Ver Propuestas
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-charcoal/20 text-charcoal hover:bg-charcoal/5"
            >
              <Link href="/planillas">Ver Planillas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="border-t border-border/60 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
            Proximas Actividades
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((event, i) => (
              <article
                key={i}
                className="flex flex-col gap-3 rounded-lg border border-border/60 bg-card p-6"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-carrot-orange">
                  <Calendar className="size-4" />
                  <time>{event.date}</time>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {event.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Career Navigation Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Planillas por Carrera
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Selecciona
            tu carrera para conocer a los candidatos.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {carreras.map((carrera) => (
            <CareerCard key={carrera.slug} carrera={carrera} />
          ))}
        </div>

        {/* Governance entities */}
        <div className="mt-12 flex flex-col items-center gap-2 text-center">
          <h2 className="text-xl font-bold text-foreground md:text-2xl">
            Entidades de Gobierno Estudiantil
          </h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {entidades.map((ent) => (
            <CareerCard key={ent.slug} carrera={ent} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border/60 bg-secondary/50">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
          <FAQSection faqs={homeFaqs} />
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
          Lo que dicen los estudiantes
        </h2>
        <ReviewsBlock />
      </section>
    </>
  )
}
