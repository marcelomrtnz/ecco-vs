import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { BreadcrumbsNav } from '@/components/breadcrumbs-nav'
import { getAllCarreras } from '@/data/carreras'

export const metadata: Metadata = {
  title: 'Propuestas Elecciones Estudiantiles UNAH 2026 - ECCO',
  description:
    'Todas las propuestas de ECCO para las elecciones estudiantiles UNAH 2026 por carrera. Transparencia y compromiso con la comunidad universitaria UNAH-VS.',
  alternates: {
    canonical: 'https://ecco-vs.com/propuestas',
  },
}

export default function PropuestasPage() {
  const carreras = getAllCarreras()

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
      <BreadcrumbsNav
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Propuestas', url: '/propuestas' },
        ]}
      />

      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-balance text-3xl font-bold text-charcoal md:text-4xl">
          Propuestas ECCO
          <span className="block text-lg font-medium text-carrot-orange md:text-xl">
            Elecciones Estudiantiles UNAH 2026
          </span>
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conoce
          las propuestas de cada carrera y como ECCO busca transformar la
          vida universitaria.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-10">
        {carreras.map((carrera) => (
          <section key={carrera.slug} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">
                {carrera.nombre}
              </h2>
              <Link
                href={`/carreras/${carrera.slug}`}
                className="flex items-center gap-1 text-sm font-medium text-carrot-orange hover:underline"
              >
                Ver planilla
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <ul className="flex flex-col gap-2" role="list">
              {carrera.propuestas.slice(0, 3).map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-carrot-orange" />
                  <span className="text-sm leading-relaxed text-foreground/80">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
            {carrera.propuestas.length > 3 && (
              <Link
                href={`/carreras/${carrera.slug}#propuestas`}
                className="text-sm text-slate-grey hover:text-carrot-orange"
              >
                {`+ ${carrera.propuestas.length - 3} propuestas mas...`}
              </Link>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
