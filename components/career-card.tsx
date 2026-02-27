import Link from 'next/link'
import { Users, ArrowRight } from 'lucide-react'
import type { Carrera } from '@/data/carreras'

export function CareerCard({ carrera }: { carrera: Carrera }) {
  const activeCandidates = carrera.candidatos.filter((c) => c.activo).length

  return (
    <Link
      href={`/carreras/${carrera.slug}`}
      className="group flex flex-col gap-3 rounded-lg border border-border/60 bg-card p-5 transition-all hover:border-carrot-orange/40 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-card-foreground group-hover:text-carrot-orange">
          {carrera.nombre}
        </h3>
        <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-carrot-orange" />
      </div>
      <p className="text-sm text-muted-foreground">{carrera.facultad}</p>
      <div className="flex items-center gap-1.5 text-sm text-slate-grey">
        <Users className="size-3.5" />
        <span>
          {activeCandidates}{' '}
          {activeCandidates === 1 ? 'candidato' : 'candidatos'}
        </span>
      </div>
    </Link>
  )
}
