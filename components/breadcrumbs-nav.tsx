import React from 'react'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem as BreadcrumbListItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { JsonLd } from '@/components/json-ld'
import { generateBreadcrumbLD } from '@/lib/seo-utils'

interface BreadcrumbEntry {
  name: string
  url: string
}

interface BreadcrumbsNavProps {
  items: BreadcrumbEntry[]
}

export function BreadcrumbsNav({ items }: BreadcrumbsNavProps) {
  return (
    <>
      <JsonLd data={generateBreadcrumbLD(items)} />
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <React.Fragment key={item.url}>
                <BreadcrumbListItem>
                  {isLast ? (
                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={item.url}>{item.name}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbListItem>
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  )
}
