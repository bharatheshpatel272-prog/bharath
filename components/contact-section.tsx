import { MapPin } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { SectionHeading } from '@/components/section-heading'

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <SectionHeading
          id="contact-heading"
          eyebrow="Questions?"
          title="Get in touch"
          description="Ask the organising team about registration, themes, or travel to the venue."
        />
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <ContactForm />
        </div>
        <p className="flex items-start justify-center gap-2 text-center text-sm text-muted-foreground">
          <MapPin className="mt-0.5 size-4 flex-none text-brand-orange" aria-hidden="true" />
          Lakshmipura Road, Palahally Post, off Mysuru-Bengaluru Highway, S.R.
          Patna, Mandya
        </p>
      </div>
    </section>
  )
}
