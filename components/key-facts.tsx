import { CalendarDays, Clock, MapPin, Users } from 'lucide-react'

const facts = [
  { icon: CalendarDays, title: '2nd & 3rd Nov 2026', detail: 'Event dates' },
  { icon: Clock, title: '28 Hours', detail: 'Of non-stop hacking' },
  { icon: Users, title: '4 Members', detail: 'Per team' },
  { icon: MapPin, title: 'MRIT, Mandya', detail: 'Venue' },
]

export function KeyFacts() {
  return (
    <section aria-label="Event at a glance" className="px-4 sm:px-6">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 lg:grid-cols-4">
        {facts.map(({ icon: Icon, title, detail }) => (
          <li
            key={title}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:p-5"
          >
            <span className="flex size-11 flex-none items-center justify-center rounded-xl bg-accent text-brand-orange">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col">
              <span className="font-display text-xl font-bold uppercase leading-tight text-brand-green-deep">
                {title}
              </span>
              <span className="text-sm text-muted-foreground">{detail}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
