import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleHeader } from '@/components/article-header'
import { ArticleContent } from '@/components/article-content'
import { RelatedArticles } from '@/components/related-articles'
import { BreadcrumbsNav } from '@/components/breadcrumbs-nav'
import { JsonLd } from '@/components/json-ld'
import {
  generateArticleLD,
  generateArticlePageMetadata,
  generateBreadcrumbLD,
} from '@/lib/seo-utils'
import { getAllArticles, getArticle, getRelatedArticles } from '@/data/articles'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: 'Articulo no encontrado' }
  return generateArticlePageMetadata(article)
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) {
    notFound()
  }

  const related = getRelatedArticles(article)

  const breadcrumbs = [
    { name: 'Inicio', url: '/' },
    { name: 'Articulos', url: '/articulos' },
    { name: article.title, url: `/articulo/${article.slug}` },
  ]

  return (
    <>
      <JsonLd data={generateArticleLD(article)} />
      <JsonLd data={generateBreadcrumbLD(breadcrumbs)} />

      <div className="mx-auto max-w-4xl px-4 pb-16 pt-6 md:px-6 md:pb-24">
        <BreadcrumbsNav items={breadcrumbs} />

        <div className="mt-8 flex flex-col gap-10">
          <ArticleHeader article={article} />
          <ArticleContent article={article} />
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-border/60 pt-12">
          <RelatedArticles articles={related} />
        </div>
      </div>
    </>
  )
}
