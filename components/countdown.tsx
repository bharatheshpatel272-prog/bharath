'use client'

import { useEffect, useState } from 'react'
import { REGISTRATION_DEADLINE } from '@/lib/event'

const deadline = new Date(REGISTRATION_DEADLINE).getTime()

function getRemaining(now: number) {
  const diff = Math.max(0, deadline - now)
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    closed: diff === 0,
  }
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const remaining = now === null ? null : getRemaining(now)

  if (remaining?.closed) {
    return (
      <p className="text-sm font-medium text-muted-foreground">
        Registrations have closed.
      </p>
    )
  }

  const units = [
    { label: 'Days', value: remaining?.days },
    { label: 'Hours', value: remaining?.hours },
    { label: 'Mins', value: remaining?.minutes },
    { label: 'Secs', value: remaining?.seconds },
  ]

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        Registrations close in
      </p>
      <div className="flex justify-center gap-2" aria-live="off">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex w-16 flex-col items-center rounded-xl border border-border bg-card py-2 shadow-sm"
          >
            <span className="font-display text-2xl font-bold tabular-nums text-brand-green-deep">
              {unit.value === undefined
                ? '--'
                : String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
