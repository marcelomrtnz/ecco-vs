import Image from 'next/image'
import type { Article } from '@/data/articles'

export function ArticleContent({ article }: { article: Article }) {
  return (
    <div className="flex flex-col gap-8">
      <figure className="overflow-hidden rounded-lg">
        <div className="relative aspect-[16/9] w-full bg-muted">
          <Image
            src={article.heroImage}
            alt={article.heroAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {article.heroAlt}
        </figcaption>
      </figure>

      <div
        className="article-body max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  )
}
