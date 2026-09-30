import { Phone } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import {
  chiefPatrons,
  convenors,
  facultyCoordinators,
  patrons,
  studentCoordinators,
  type Person,
} from '@/lib/event'

export function Organisers() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="scroll-mt-20 bg-secondary/60 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <SectionHeading
          id="team-heading"
          eyebrow="Organisers"
          title="The people behind it"
        />

        <div className="grid gap-5 md:grid-cols-2">
          <Group title="Chief Patrons" people={chiefPatrons} />
          <Group title="Patrons" people={patrons} />
        </div>
        <Group title="Convenors" people={convenors} columns="sm:grid-cols-2 lg:grid-cols-4" />
        <div className="grid gap-5 lg:grid-cols-[3fr_2fr]">
          <Group
            title="Faculty Coordinators"
            people={facultyCoordinators}
            columns="sm:grid-cols-3"
          />
          <Group
            title="Student Coordinators"
            people={studentCoordinators}
            columns="grid-cols-2"
          />
        </div>
      </div>
    </section>
  )
}

function Group({
  title,
  people,
  columns = 'sm:grid-cols-2',
}: {
  title: string
  people: Person[]
  columns?: string
}) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-5 sm:p-6">
      <h3 className="self-start rounded-full bg-primary px-4 py-1 font-display text-base font-semibold uppercase tracking-wider text-primary-foreground">
        {title}
      </h3>
      <ul className={`grid gap-3 ${columns}`}>
        {people.map((person) => (
          <li
            key={person.name}
            className="flex flex-col gap-0.5 rounded-2xl bg-muted px-4 py-3"
          >
            <span className="font-display text-lg font-semibold leading-tight text-brand-green-deep">
              {person.name}
            </span>
            {person.role ? (
              <span className="text-sm text-muted-foreground">
                {person.role}
              </span>
            ) : null}
            {person.phone ? (
              <a
                href={`tel:${person.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                <Phone className="size-3.5" aria-hidden="true" />
                {person.phone}
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
