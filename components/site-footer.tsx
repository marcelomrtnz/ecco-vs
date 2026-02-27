import Link from 'next/link'
import { getAllCarreras } from '@/data/carreras'

export function SiteFooter() {
  const carreras = getAllCarreras()

  return (
    <footer className="border-t border-border/60 bg-charcoal text-porcelain">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold tracking-tight text-porcelain">
              ECCO
            </span>
            <p className="text-sm leading-relaxed text-porcelain/60">
              Estudiantes Contra la Corrupcion. Movimiento estudiantil UNAH
              Valle de Sula. Elecciones 2026.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-carrot-orange">
              Navegacion
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Pie de pagina">
              <Link
                href="/"
                className="text-sm text-porcelain/60 transition-colors hover:text-carrot-orange"
              >
                Inicio
              </Link>
              <Link
                href="/planillas"
                className="text-sm text-porcelain/60 transition-colors hover:text-carrot-orange"
              >
                Planillas
              </Link>
              <Link
                href="/propuestas"
                className="text-sm text-porcelain/60 transition-colors hover:text-carrot-orange"
              >
                Propuestas
              </Link>
              <Link
                href="/articulos"
                className="text-sm text-porcelain/60 transition-colors hover:text-carrot-orange"
              >
                Articulos
              </Link>
              <Link
                href="/unidad-academica"
                className="text-sm text-porcelain/60 transition-colors hover:text-carrot-orange"
              >
                Unidad Academica
              </Link>
              <Link
                href="/consejo-universitario"
                className="text-sm text-porcelain/60 transition-colors hover:text-carrot-orange"
              >
                Consejo Universitario
              </Link>
              <Link
                href="/feuh"
                className="text-sm text-porcelain/60 transition-colors hover:text-carrot-orange"
              >
                FEUH
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-carrot-orange">
              Carreras
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Carreras">
              {carreras.slice(0, 8).map((c) => (
                <Link
                  key={c.slug}
                  href={`/carreras/${c.slug}`}
                  className="text-sm text-porcelain/60 transition-colors hover:text-carrot-orange"
                >
                  {c.nombre}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-carrot-orange">
              Mas Carreras
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Mas carreras">
              {carreras.slice(8).map((c) => (
                <Link
                  key={c.slug}
                  href={`/carreras/${c.slug}`}
                  className="text-sm text-porcelain/60 transition-colors hover:text-carrot-orange"
                >
                  {c.nombre}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-porcelain/10 pt-8 md:flex-row">
          <p className="text-xs text-porcelain/40">
            ECCO UNAH-VS - Elecciones Estudiantiles 2026. Todos los derechos
            reservados.
          </p>
          <Link
            href="/sitemap.xml"
            className="text-xs text-porcelain/40 transition-colors hover:text-carrot-orange"
          >
            Mapa del Sitio
          </Link>
        </div>
      </div>
    </footer>
  )
}
