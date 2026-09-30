import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Countdown } from '@/components/countdown'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,var(--color-secondary),transparent_60%)]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-10 pb-14 sm:px-6 lg:flex-row lg:items-center lg:gap-6 lg:pt-16 lg:pb-20">
        <div className="flex flex-1 flex-col items-start gap-6">
          <div className="flex w-full flex-col items-center gap-1.5 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Mysore Royal Education Trust
            </p>
            <p className="font-display text-lg font-semibold leading-tight text-primary sm:text-xl">
              Mysuru Royal Institute of Technology
            </p>
            <p className="text-sm text-muted-foreground">
              Departments of CSE, ISE, AI&amp;ML and AI&amp;DS present
            </p>
          </div>

          <h1 className="font-display text-[clamp(3.5rem,13vw,7.5rem)] font-extrabold uppercase leading-[0.85] tracking-tight">
            <span className="bg-linear-to-b from-primary to-brand-green-deep bg-clip-text text-transparent">
              Mriothon
            </span>{' '}
            <span className="bg-linear-to-b from-brand-orange to-accent-foreground bg-clip-text text-transparent">
              3.0
            </span>
          </h1>

          <p className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-accent px-4 py-1.5 font-display text-lg font-semibold uppercase tracking-[0.15em] text-accent-foreground">
            <Sparkles className="size-4" aria-hidden="true" />A 28 hour
            hackathon
          </p>

          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Build intelligent solutions in AIoT and AI-integrated full stack
            Python. Teams of four, open to every branch, on 2nd and 3rd
            November 2026 at MRIT, Mandya.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-full px-6 text-base"
              nativeButton={false}
              render={<a href="#register" />}
            >
              Register your team
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full bg-card px-6 text-base"
              nativeButton={false}
              render={<a href="#themes" />}
            >
              Explore themes
            </Button>
          </div>

          <Countdown />
        </div>

        <div className="relative mx-auto w-full max-w-sm flex-none lg:max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
            <Image
              src="/images/ai-hero.png"
              alt="Futuristic android with glowing green circuitry, the MRIOTHON 3.0 key art"
              fill
              priority
              sizes="(min-width: 1024px) 448px, 90vw"
              className="object-cover object-top"
            />
          </div>
          <Image
            src="/images/mriothon-badge.png"
            alt="MRIOTHON 3.0 badge"
            width={220}
            height={216}
            className="absolute -bottom-6 -left-4 size-28 rounded-full shadow-lg sm:size-32"
          />
        </div>
      </div>
    </section>
  )
}
