import { ContactDetails } from '@/components/contact-details'
import { ContactForm } from '@/components/contact-form'

export default function Page() {
  return (
    <main className="min-h-svh bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
        <ContactDetails />
        <section
          aria-label="Contact form"
          className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8"
        >
          <ContactForm />
        </section>
      </div>
    </main>
  )
}
