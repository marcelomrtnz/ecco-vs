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

const SLUG = 'concejo-universitario-unah-vs-elecciones-2026'

export const metadata: Metadata = {
  title: 'Concejo Universitario - Elecciones UNAH 2026 - ECCO',
  description:
    'Candidatos y propuestas de ECCO para el Concejo Universitario en las elecciones estudiantiles UNAH 2026. UNAH-VS Valle de Sula.',
  alternates: { canonical: 'https://ecco-vs.com/concejo-universitario' },
}

export default function ConcejoUniversitarioPage() {
  const carrera = getCarrera(SLUG)!
  const breadcrumbItems = [
    { name: 'Inicio', url: '/' },
    { name: 'Concejo Universitario', url: '/concejo-universitario' },
  ]

  return (
    <>
      <JsonLd data={generateBreadcrumbLD(breadcrumbItems)} />
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <BreadcrumbsNav items={breadcrumbItems} />

        <div className="mt-8 flex flex-col gap-2">
          <h1 className="text-balance text-3xl font-bold text-charcoal md:text-4xl">
            Concejo Universitario
            <span className="block text-lg font-medium text-carrot-orange md:text-xl">
              UNAH-VS Elecciones 2026
            </span>
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            carreraNombre="Concejo Universitario"
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
