import { ArticleCard } from '@/components/article-card'
import type { Article } from '@/data/articles'

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null

  return (
    <aside aria-label="Articulos relacionados">
      <h2 className="mb-6 text-xl font-bold text-charcoal md:text-2xl">
        Articulos relacionados
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </aside>
  )
}
