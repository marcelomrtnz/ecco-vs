'use client'

import { useEffect, useState } from 'react'
import { FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FloatingFab() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const target = document.getElementById('propuestas')
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  function scrollToProposals() {
    const el = document.getElementById('propuestas')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!visible) return null

  return (
    <Button
      onClick={scrollToProposals}
      className="fixed bottom-6 right-6 z-40 gap-2 rounded-full bg-carrot-orange px-5 py-3 text-sm font-semibold text-charcoal shadow-lg transition-all hover:bg-carrot-orange/90 hover:shadow-xl"
      size="lg"
    >
      <FileText className="size-4" />
      Ver Propuestas
    </Button>
  )
}
