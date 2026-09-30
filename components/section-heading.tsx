export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string
  title: string
  description?: string
  id?: string
}) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
        <span className="h-px w-8 bg-brand-orange/50" aria-hidden="true" />
        {eyebrow}
        <span className="h-px w-8 bg-brand-orange/50" aria-hidden="true" />
      </p>
      <h2
        id={id}
        className="font-display text-4xl font-bold uppercase leading-none text-balance text-brand-green-deep sm:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}
