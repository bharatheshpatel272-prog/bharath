import Image from 'next/image'
import {
  BookOpen,
  CalendarCheck,
  CircuitBoard,
  IndianRupee,
  QrCode,
  Trophy,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export function Registration() {
  return (
    <section
      id="register"
      aria-labelledby="register-heading"
      className="scroll-mt-20 bg-secondary/60 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <SectionHeading
          id="register-heading"
          eyebrow="Open for all"
          title="Every branch welcome"
          description="Whether you study circuits or code, bring your team of four and compete."
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <p className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 font-display text-xl font-semibold uppercase tracking-wide text-primary-foreground">
            <CircuitBoard className="size-5" aria-hidden="true" />
            Circuit branches
          </p>
          <p className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-orange px-6 py-3 font-display text-xl font-semibold uppercase tracking-wide text-white">
            <BookOpen className="size-5" aria-hidden="true" />
            Non-circuit branches
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
          <ul className="grid gap-4 sm:grid-cols-3">
            <InfoCard
              icon={<IndianRupee className="size-6" aria-hidden="true" />}
              label="Registration fee"
              value="₹1,000"
              note="Per team"
            />
            <InfoCard
              icon={<Trophy className="size-6" aria-hidden="true" />}
              label="Attractive cash prizes for"
              value="Winners"
              accent
            />
            <InfoCard
              icon={<CalendarCheck className="size-6" aria-hidden="true" />}
              label="Last date to register"
              value="25 Oct 2026"
            />
          </ul>

          <div className="flex flex-col items-center gap-4 rounded-3xl bg-brand-green-deep p-6 text-center text-primary-foreground sm:flex-row sm:text-left lg:flex-col lg:text-center">
            <div className="rounded-2xl bg-white p-3">
              <Image
                src="/images/qr-register.png"
                alt="QR code to register for MRIOTHON 3.0"
                width={136}
                height={136}
                className="size-32"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="inline-flex items-center justify-center gap-2 font-display text-xl font-bold uppercase tracking-wide sm:justify-start lg:justify-center">
                <QrCode className="size-5" aria-hidden="true" />
                Scan to register
              </p>
              <p className="max-w-56 text-sm text-primary-foreground/75">
                Use your phone camera to open the registration form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  icon,
  label,
  value,
  note,
  accent,
}: {
  icon: React.ReactNode
  label: string
  value: string
  note?: string
  accent?: boolean
}) {
  return (
    <li className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-brand-orange">
        {icon}
      </span>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p
          className={
            accent
              ? 'font-display text-4xl font-extrabold uppercase text-destructive'
              : 'font-display text-4xl font-extrabold text-brand-green-deep'
          }
        >
          {value}
        </p>
        {note ? (
          <p className="text-sm text-muted-foreground">{note}</p>
        ) : null}
      </div>
    </li>
  )
}
