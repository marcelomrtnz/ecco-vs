import { Star } from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import { generateAggregateRatingLD } from '@/lib/seo-utils'
import siteConfig from '@/data/site.json'

const reviews = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Lorem I.',
  },
  {
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Dolor S.',
  },
  {
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Amet C.',
  },
]

export function ReviewsBlock() {
  return (
    <section className="flex flex-col gap-8">
      <JsonLd data={generateAggregateRatingLD()} />

      <div className="flex flex-col items-center gap-2 text-center">
        <div className="flex items-center gap-1" aria-label={`${siteConfig.ratingValue} de 5 estrellas`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="size-6 fill-carrot-orange text-carrot-orange"
            />
          ))}
        </div>
        <p className="text-lg font-semibold text-foreground">
          {siteConfig.ratingValue}
          {'/5'}
          <span className="ml-2 text-sm font-normal text-muted-foreground">
            {'('}
            {siteConfig.reviewCount}
            {' opiniones)'}
          </span>
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((review, i) => (
          <blockquote
            key={i}
            className="flex flex-col gap-3 rounded-lg border border-border/60 bg-card p-5"
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className="size-3.5 fill-carrot-orange text-carrot-orange"
                />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {review.text}
            </p>
            <footer className="text-sm font-medium text-foreground">
              {'-- '}
              {review.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
