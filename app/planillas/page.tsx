import type { Metadata } from 'next'
import { CareerCard } from '@/components/career-card'
import { BreadcrumbsNav } from '@/components/breadcrumbs-nav'
import { getCarrerasOnly, getEntidadesGobierno } from '@/data/carreras'

export const metadata: Metadata = {
  title: 'Planillas Elecciones Estudiantiles UNAH 2026 - ECCO',
  description:
    'Conoce todas las planillas y candidatos de ECCO para las elecciones estudiantiles UNAH 2026 por carrera. Movimiento Estudiantes Contra la Corrupcion UNAH-VS.',
  alternates: {
    canonical: 'https://ecco-vs.com/planillas',
  },
}

export default function PlanillasPage() {
  const carreras = getCarrerasOnly()
  const entidades = getEntidadesGobierno()

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <BreadcrumbsNav
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Planillas', url: '/planillas' },
        ]}
      />

      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-balance text-3xl font-bold text-charcoal md:text-4xl">
          Planillas por Carrera
          <span className="block text-lg font-medium text-carrot-orange md:text-xl">
            Elecciones Estudiantiles UNAH 2026
          </span>
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {carreras.map((carrera) => (
          <CareerCard key={carrera.slug} carrera={carrera} />
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">
          Entidades de Gobierno Estudiantil
        </h2>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entidades.map((ent) => (
          <CareerCard key={ent.slug} carrera={ent} />
        ))}
      </div>
    </div>
  )
}
