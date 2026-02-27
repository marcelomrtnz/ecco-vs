'use client'

import Image from 'next/image'
import { useState } from 'react'
import { User } from 'lucide-react'
import type { Candidato } from '@/data/carreras'

export function CandidateCard({ candidato }: { candidato: Candidato }) {
  const [imgError, setImgError] = useState(false)

  if (!candidato.activo) return null

  return (
    <article className="flex gap-4 rounded-lg border border-border/60 bg-card p-4 md:gap-6 md:p-6">
      <div className="relative flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted md:size-28">
        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <User className="size-8 text-muted-foreground md:size-10" />
          </div>
        ) : (
          <Image
            src={candidato.foto}
            alt={`Candidato ${candidato.nombre}`}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 80px, 112px"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-card-foreground md:text-lg">
          {candidato.nombre}
        </h3>
        <span className="inline-flex w-fit rounded-full bg-carrot-orange/10 px-3 py-0.5 text-xs font-semibold text-carrot-orange">
          {candidato.cargo}
        </span>
        <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {candidato.descripcion}
        </p>
      </div>
    </article>
  )
}
