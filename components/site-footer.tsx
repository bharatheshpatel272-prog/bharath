import { Star } from 'lucide-react'

const words = ['Code', 'Create', 'Conquer']

export function SiteFooter() {
  return (
    <footer className="bg-brand-green-deep px-4 py-12 text-primary-foreground sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-display text-3xl font-semibold uppercase tracking-[0.15em] sm:text-4xl">
          {words.map((word, i) => (
            <span key={word} className="inline-flex items-center gap-4">
              {i > 0 ? (
                <Star
                  className="size-6 fill-brand-orange text-brand-orange"
                  aria-hidden="true"
                />
              ) : null}
              {word}
            </span>
          ))}
        </p>
        <p className="max-w-xl text-sm text-primary-foreground/70">
          Mysuru Royal Institute of Technology, approved by AICTE New Delhi,
          Govt. of Karnataka, affiliated to VTU Belagavi.
        </p>
      </div>
    </footer>
  )
}
