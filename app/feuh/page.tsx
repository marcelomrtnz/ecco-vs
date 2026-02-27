import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CandidateCard } from '@/components/candidate-card'
import { ProposalsList } from '@/components/proposals-list'
import { FAQSection } from '@/components/faq-section'
import { BreadcrumbsNav } from '@/components/breadcrumbs-nav'
import { JsonLd } from '@/components/json-ld'
import { generateBreadcrumbLD } from '@/lib/seo-utils'
import { getCarrera } from '@/data/carreras'

const SLUG = 'feuh-unah-vs-elecciones-2026'

export const metadata: Metadata = {
  title: 'FEUH - Federacion de Estudiantes Universitarios - Elecciones UNAH 2026 - ECCO',
  description:
    'Candidatos y propuestas de ECCO para la FEUH en las elecciones estudiantiles UNAH 2026. Federacion de Estudiantes Universitarios de Honduras, UNAH-VS.',
  alternates: { canonical: 'https://ecco-vs.com/feuh' },
}

export default function FeuhPage() {
  const carrera = getCarrera(SLUG)!
  const breadcrumbItems = [
    { name: 'Inicio', url: '/' },
    { name: 'FEUH', url: '/feuh' },
  ]

  return (
    <>
      <JsonLd data={generateBreadcrumbLD(breadcrumbItems)} />
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <BreadcrumbsNav items={breadcrumbItems} />

        <div className="mt-8 flex flex-col gap-2">
          <h1 className="text-balance text-3xl font-bold text-charcoal md:text-4xl">
            FEUH
            <span className="block text-lg font-medium text-carrot-orange md:text-xl">
              Federacion de Estudiantes Universitarios de Honduras
            </span>
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Candidatos
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {carrera.candidatos
              .filter((c) => c.activo)
              .map((candidato, i) => (
                <CandidateCard key={i} candidato={candidato} />
              ))}
          </div>
        </section>

        <div className="mt-14">
          <ProposalsList
            propuestas={carrera.propuestas}
            carreraNombre="FEUH"
          />
        </div>

        {carrera.faqs.length > 0 && (
          <div className="mt-14">
            <FAQSection faqs={carrera.faqs} />
          </div>
        )}

        <div className="mt-14 flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="gap-2 border-charcoal/20 text-charcoal"
          >
            <Link href="/">
              <ArrowLeft className="size-4" />
              Volver al Inicio
            </Link>
          </Button>
          <Button
            asChild
            className="gap-2 bg-carrot-orange text-charcoal hover:bg-carrot-orange/90"
          >
            <Link href="/planillas">Ver Planillas</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
