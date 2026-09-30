import { ContactSection } from '@/components/contact-section'
import { Hero } from '@/components/hero'
import { KeyFacts } from '@/components/key-facts'
import { Organisers } from '@/components/organisers'
import { Partners } from '@/components/partners'
import { Registration } from '@/components/registration'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Themes } from '@/components/themes'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <KeyFacts />
        <Themes />
        <Registration />
        <Partners />
        <Organisers />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
