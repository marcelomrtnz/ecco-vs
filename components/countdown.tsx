'use client'

import { useEffect, useState } from 'react'
import siteConfig from '@/data/site.json'

interface TimeLeft {
  dias: number
  horas: number
  minutos: number
  segundos: number
}

function calculateTimeLeft(): TimeLeft {
  const target = new Date(siteConfig.eventDate + 'T08:00:00-06:00').getTime()
  const now = Date.now()
  const diff = target - now

  if (diff <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
  }

  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  }
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-4xl font-bold tabular-nums text-carrot-orange md:text-5xl lg:text-6xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs font-medium uppercase tracking-wider text-slate-grey md:text-sm">
        {label}
      </span>
    </div>
  )
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Calculate immediately on client side
    setTimeLeft(calculateTimeLeft())
    setMounted(true)
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-4 py-4 md:gap-8">
        {['Dias', 'Horas', 'Minutos', 'Segundos'].map((label) => (
          <CountdownUnit key={label} value={0} label={label} />
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-center gap-4 md:gap-8">
        <CountdownUnit value={timeLeft.dias} label="Dias" />
        <span className="mt-[-1.5rem] text-2xl font-bold text-carrot-orange/50 md:text-3xl">
          :
        </span>
        <CountdownUnit value={timeLeft.horas} label="Horas" />
        <span className="mt-[-1.5rem] text-2xl font-bold text-carrot-orange/50 md:text-3xl">
          :
        </span>
        <CountdownUnit value={timeLeft.minutos} label="Minutos" />
        <span className="mt-[-1.5rem] text-2xl font-bold text-carrot-orange/50 md:text-3xl">
          :
        </span>
        <CountdownUnit value={timeLeft.segundos} label="Segundos" />
      </div>
      <time dateTime={siteConfig.eventDate} className="sr-only">
        {siteConfig.eventDate}
      </time>
    </div>
  )
}
