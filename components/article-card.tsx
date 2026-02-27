import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'
import type { Article } from '@/data/articles'

export function ArticleCard({ article }: { article: Article }) {
  const publishDate = new Date(article.datePublished).toLocaleDateString(
    'es-HN',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border/60 bg-card transition-shadow hover:shadow-md">
      <Link
        href={`/articulo/${article.slug}`}
        className="relative aspect-[16/9] w-full overflow-hidden bg-muted"
      >
        <Image
          src={article.heroImage}
          alt={article.heroAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="size-3.5" aria-hidden="true" />
            <time dateTime={article.datePublished}>{publishDate}</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden="true" />
            <span>{article.readingTime}</span>
          </div>
        </div>
        <h2 className="text-pretty text-lg font-semibold leading-snug text-card-foreground">
          <Link
            href={`/articulo/${article.slug}`}
            className="transition-colors hover:text-carrot-orange"
          >
            {article.title}
          </Link>
        </h2>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {article.short}
        </p>
        <Link
          href={`/articulo/${article.slug}`}
          className="mt-auto self-start text-sm font-medium text-carrot-orange transition-colors hover:text-brandy"
        >
          Leer articulo
        </Link>
      </div>
    </article>
  )
}
