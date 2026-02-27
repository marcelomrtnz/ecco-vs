import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

interface ProposalsListProps {
  propuestas: string[]
  carreraNombre: string
}

export function ProposalsList({ propuestas, carreraNombre }: ProposalsListProps) {
  return (
    <section id="propuestas" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">
        {'Propuestas para '}
        <span className="text-carrot-orange">{carreraNombre}</span>
      </h2>
      <ul className="mt-6 flex flex-col gap-3" role="list">
        {propuestas.map((propuesta, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-carrot-orange" />
            <span className="text-base leading-relaxed text-foreground/80">
              {propuesta}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center gap-4">
        <Link
          href="/propuestas"
          className="text-sm font-medium text-carrot-orange underline-offset-4 hover:underline"
        >
          Ver todas las propuestas
        </Link>
        <Link
          href="/planillas"
          className="text-sm font-medium text-slate-grey underline-offset-4 hover:underline"
        >
          Ver todas las planillas
        </Link>
      </div>
    </section>
  )
}
