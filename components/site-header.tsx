'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/planillas', label: 'Planillas' },
  { href: '/propuestas', label: 'Propuestas' },
  { href: '/articulos', label: 'Articulos' },
  { href: '/unidad-academica', label: 'Unidad Academica' },
  { href: '/concejo-universitario', label: 'Concejo' },
  { href: '/feuh', label: 'FEUH' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-porcelain/95 backdrop-blur-sm supports-[backdrop-filter]:bg-porcelain/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-charcoal">
            ECCO
          </span>
          <span className="hidden text-sm font-medium text-slate-grey sm:inline">
            UNAH-VS
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-charcoal/80 transition-colors hover:bg-carrot-orange/10 hover:text-carrot-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Abrir menu de navegacion"
              >
                <Menu className="size-5 text-charcoal" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-porcelain">
              <SheetHeader>
                <SheetTitle className="text-left text-lg font-bold text-charcoal">
                  ECCO UNAH-VS
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Menu movil">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-charcoal/80 transition-colors hover:bg-carrot-orange/10 hover:text-carrot-orange"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
