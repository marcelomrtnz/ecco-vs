import { Calendar, Clock, User } from 'lucide-react'
import type { Article } from '@/data/articles'

export function ArticleHeader({ article }: { article: Article }) {
  const publishDate = new Date(article.datePublished).toLocaleDateString(
    'es-HN',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

  return (
    <header className="flex flex-col gap-6">
      <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-charcoal md:text-4xl lg:text-5xl">
        {article.title}
      </h1>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <User className="size-4" aria-hidden="true" />
          <span>{article.author}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="size-4" aria-hidden="true" />
          <time dateTime={article.datePublished}>{publishDate}</time>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="size-4" aria-hidden="true" />
          <span>{article.readingTime} de lectura</span>
        </div>
      </div>

      {article.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-carrot-orange/10 px-3 py-1 text-xs font-medium text-carrot-orange"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  )
}
