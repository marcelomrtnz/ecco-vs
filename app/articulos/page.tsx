import type { Metadata } from 'next'
import { ArticleCard } from '@/components/article-card'
import { BreadcrumbsNav } from '@/components/breadcrumbs-nav'
import { JsonLd } from '@/components/json-ld'
import {
  generateArticlesIndexMetadata,
  generateBreadcrumbLD,
} from '@/lib/seo-utils'
import { getAllArticles } from '@/data/articles'

export function generateMetadata(): Metadata {
  return generateArticlesIndexMetadata()
}

export default function ArticulosPage() {
  const articles = getAllArticles()

  const breadcrumbs = [
    { name: 'Inicio', url: '/' },
    { name: 'Articulos', url: '/articulos' },
  ]

  return (
    <>
      <JsonLd data={generateBreadcrumbLD(breadcrumbs)} />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 md:px-6 md:pb-24">
        <BreadcrumbsNav items={breadcrumbs} />

        <div className="mt-8 flex flex-col items-center gap-2 text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-charcoal md:text-4xl">
            Articulos y Noticias
          </h1>
          <p className="max-w-2xl text-pretty text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mantente
            informado sobre el movimiento estudiantil ECCO y la vida
            universitaria en UNAH-VS.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </>
  )
}
