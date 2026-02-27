import historiaEcco from './articles/historia-del-movimiento-ecco.json'
import historiaUnahVs from './articles/historia-de-la-unah-vs.json'
import patitasJason from './articles/como-jason-hernandez-ha-expandido-patitas-unah-vs.json'

export interface Article {
  slug: string
  title: string
  short: string
  author: string
  authorUrl: string
  datePublished: string
  dateModified: string
  readingTime: string
  heroImage: string
  heroAlt: string
  tags: string[]
  related: string[]
  content: string
}

const allArticles: Article[] = [historiaEcco, historiaUnahVs, patitasJason]

export function getAllArticles(): Article[] {
  return allArticles.sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  )
}

export function getArticle(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug)
}

export function getRelatedArticles(article: Article): Article[] {
  const related = article.related
    .map((slug) => allArticles.find((a) => a.slug === slug))
    .filter(Boolean) as Article[]

  // If we don't have enough, fill with other articles
  if (related.length < 3) {
    const remaining = allArticles.filter(
      (a) => a.slug !== article.slug && !related.find((r) => r.slug === a.slug)
    )
    related.push(...remaining.slice(0, 3 - related.length))
  }

  return related.slice(0, 3)
}
