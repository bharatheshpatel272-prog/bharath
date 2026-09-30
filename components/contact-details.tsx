import { Clock, Mail, MapPin } from 'lucide-react'

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@studio.com',
    href: 'mailto:hello@studio.com',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '120 Market Street, San Francisco',
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Within one business day',
  },
]

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <span className="w-fit rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
          Contact us
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          Let&apos;s build something great together.
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
          Have a question, a project in mind, or just want to say hello? Drop
          us a note and our team will get right back to you.
        </p>
      </div>

      <ul className="flex flex-col gap-5">
        {details.map(({ icon: Icon, label, value, href }) => (
          <li key={label} className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted/50">
              <Icon className="size-4" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">{label}</span>
              {href ? (
                <a
                  href={href}
                  className="font-medium underline-offset-4 hover:underline"
                >
                  {value}
                </a>
              ) : (
                <span className="font-medium">{value}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
