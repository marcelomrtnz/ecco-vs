import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CandidateCard } from '@/components/candidate-card'
import { ProposalsList } from '@/components/proposals-list'
import { FAQSection } from '@/components/faq-section'
import { FloatingFab } from '@/components/floating-fab'
import { BreadcrumbsNav } from '@/components/breadcrumbs-nav'
import { JsonLd } from '@/components/json-ld'
import { generateCareerPageMetadata, generateBreadcrumbLD } from '@/lib/seo-utils'
import { getAllCarreras, getCarrera } from '@/data/carreras'

export async function generateStaticParams() {
  return getAllCarreras().map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const carrera = getCarrera(slug)
  if (!carrera) return { title: 'No encontrado' }
  return generateCareerPageMetadata(carrera)
}

export default async function CareerPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const carrera = getCarrera(slug)
  if (!carrera) notFound()

  const breadcrumbItems = [
    { name: 'Inicio', url: '/' },
    { name: 'Planillas', url: '/planillas' },
    { name: carrera.nombre, url: `/carreras/${carrera.slug}` },
  ]

  return (
    <>
      <JsonLd data={generateBreadcrumbLD(breadcrumbItems)} />
      <FloatingFab />

      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
        {/* Breadcrumbs */}
        <BreadcrumbsNav items={breadcrumbItems} />

        {/* Career Header */}
        <div className="mt-8 flex flex-col gap-2">
          <h1 className="text-balance text-3xl font-bold text-charcoal md:text-4xl">
            {carrera.nombre}
            <span className="block text-lg font-medium text-carrot-orange md:text-xl">
              UNAH-VS Elecciones 2026
            </span>
          </h1>
          <p className="text-muted-foreground">{carrera.facultad}</p>
        </div>

        {/* Candidates */}
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

        {/* Proposals */}
        <div className="mt-14">
          <ProposalsList
            propuestas={carrera.propuestas}
            carreraNombre={carrera.nombre}
          />
        </div>

        {/* Logros */}
        {carrera.logros.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Logros
            </h2>
            <div className="mt-6 flex flex-col gap-6">
              {carrera.logros.map((logro, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 rounded-lg border border-border/60 bg-card p-4 md:flex-row md:items-center md:gap-6 md:p-6"
                >
                  <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-md bg-muted md:h-32 md:w-48">
                    <Image
                      src={logro.imagen}
                      alt={logro.descripcion}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 192px"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {logro.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {carrera.faqs.length > 0 && (
          <div className="mt-14">
            <FAQSection faqs={carrera.faqs} />
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 flex flex-wrap items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="gap-2 border-charcoal/20 text-charcoal"
          >
            <Link href="/planillas">
              <ArrowLeft className="size-4" />
              Volver a Planillas
            </Link>
          </Button>
          <Button
            asChild
            className="gap-2 bg-carrot-orange text-charcoal hover:bg-carrot-orange/90"
          >
            <Link href="/propuestas">Ver todas las propuestas</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
