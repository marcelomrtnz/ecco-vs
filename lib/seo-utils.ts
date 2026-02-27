import siteConfig from '@/data/site.json'
import type { Carrera, FAQ } from '@/data/carreras'
import type { Article } from '@/data/articles'

const BASE_URL = siteConfig.siteUrl

export function generateOrganizationLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: BASE_URL,
    description:
      'Movimiento estudiantil ECCO - Estudiantes Contra la Corrupcion, UNAH Valle de Sula.',
    sameAs: Object.values(siteConfig.socialLinks).filter((v) => v !== '#'),
  }
}

export function generateEventLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: siteConfig.eventName,
    startDate: siteConfig.eventDate,
    endDate: siteConfig.eventDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: siteConfig.university,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Pedro Sula',
        addressRegion: 'Cortes',
        addressCountry: 'HN',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      url: BASE_URL,
    },
  }
}

export function generateFAQPageLD(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.pregunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.respuesta,
      },
    })),
  }
}

export function generateAggregateRatingLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.siteName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.ratingValue,
      reviewCount: siteConfig.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  }
}

export function generateBreadcrumbLD(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  }
}

export function generateCareerPageMetadata(carrera: Carrera) {
  const title = `Elecciones Estudiantiles UNAH 2026 - ${carrera.nombre} - ECCO`
  const description = `Conoce los candidatos y propuestas de ${carrera.nombre} para las elecciones estudiantiles UNAH 2026. Movimiento ECCO UNAH-VS.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/carreras/${carrera.slug}`,
      type: 'website' as const,
      locale: 'es_HN',
      siteName: 'ECCO UNAH-VS',
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
    },
    alternates: {
      canonical: `${BASE_URL}/carreras/${carrera.slug}`,
    },
  }
}

export function generateHomePageMetadata() {
  const title =
    'Elecciones Estudiantiles UNAH 2026 | ECCO UNAH-VS | Candidatos y Propuestas'
  const description =
    'ECCO Estudiantes Contra la Corrupcion - Movimiento estudiantil UNAH-VS. Conoce nuestros candidatos, propuestas y planillas para las elecciones estudiantiles UNAH 2026.'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: BASE_URL,
      type: 'website' as const,
      locale: 'es_HN',
      siteName: 'ECCO UNAH-VS',
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
    },
    alternates: {
      canonical: BASE_URL,
    },
  }
}

export function generateArticleLD(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.short,
    image: `${BASE_URL}${article.heroImage}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': article.author === 'Patitas UNAH-VS' ? 'Organization' : 'Organization',
      name: article.author,
      url: article.authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/articulo/${article.slug}`,
    },
    isPartOf: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/articulos`,
      name: 'Articulos ECCO UNAH-VS',
    },
  }
}

export function generateArticlePageMetadata(article: Article) {
  const title = `${article.title} | ECCO UNAH-VS`.slice(0, 60)
  const description = article.short.slice(0, 160)

  return {
    title,
    description,
    keywords: article.tags.join(', '),
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/articulo/${article.slug}`,
      type: 'article' as const,
      locale: 'es_HN',
      siteName: 'ECCO UNAH-VS',
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author],
      images: [
        {
          url: `${BASE_URL}${article.heroImage}`,
          alt: article.heroAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [`${BASE_URL}${article.heroImage}`],
    },
    alternates: {
      canonical: `${BASE_URL}/articulo/${article.slug}`,
    },
  }
}

export function generateArticlesIndexMetadata() {
  const title = 'Articulos | ECCO UNAH-VS | Noticias Estudiantiles'
  const description =
    'Lee los articulos y noticias del movimiento estudiantil ECCO UNAH-VS. Historia, propuestas y comunidad universitaria.'

  return {
    title,
    description,
    keywords:
      'Elecciones Estudiantiles UNAH, ECCO, historia UNAH-VS, Patitas UNAH-VS, articulos',
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/articulos`,
      type: 'website' as const,
      locale: 'es_HN',
      siteName: 'ECCO UNAH-VS',
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
    },
    alternates: {
      canonical: `${BASE_URL}/articulos`,
    },
  }
}
