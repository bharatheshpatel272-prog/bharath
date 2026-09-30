import { Code2, Cpu, Globe2, Layers, Radio, Server } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const themes = [
  {
    number: '01',
    icon: Globe2,
    title: 'Artificial Intelligence of Things',
    short: 'AIoT',
    description:
      'Fuse connected sensors and devices with on-device and cloud intelligence to solve real problems at home, on the farm, and across the city.',
    tags: [
      { icon: Radio, label: 'Sensors & edge' },
      { icon: Cpu, label: 'Smart devices' },
    ],
  },
  {
    number: '02',
    icon: Code2,
    title: 'AI Integrated Full Stack',
    short: 'Using Python',
    description:
      'Ship an end-to-end product where AI is at the core: Python back ends, model-powered APIs, and a polished interface people want to use.',
    tags: [
      { icon: Server, label: 'Python APIs' },
      { icon: Layers, label: 'Full stack apps' },
    ],
  },
]

export function Themes() {
  return (
    <section
      id="themes"
      aria-labelledby="themes-heading"
      className="scroll-mt-20 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <SectionHeading
          id="themes-heading"
          eyebrow="Themes"
          title="Pick your challenge"
          description="Choose one of two tracks and build something bold in 28 hours."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {themes.map(
            ({ number, icon: Icon, title, short, description, tags }) => (
              <article
                key={number}
                className="group flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-primary/10 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <span className="font-display text-5xl font-extrabold text-secondary">
                    {number}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-3xl font-bold leading-tight text-brand-green-deep">
                    {title}
                  </h3>
                  <p className="font-display text-xl font-semibold uppercase tracking-wide text-brand-orange">
                    {short}
                  </p>
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2">
                  {tags.map(({ icon: TagIcon, label }) => (
                    <li
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                    >
                      <TagIcon className="size-3.5" aria-hidden="true" />
                      {label}
                    </li>
                  ))}
                </ul>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
