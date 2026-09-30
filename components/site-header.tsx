import Image from 'next/image'
import { Button } from '@/components/ui/button'

const links = [
  { href: '#themes', label: 'Themes' },
  { href: '#register', label: 'Register' },
  { href: '#team', label: 'Organisers' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/mrit-logo.png"
            alt="Mysuru Royal Institute of Technology logo"
            width={52}
            height={43}
            className="h-10 w-auto"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-wide text-brand-green-deep">
              MRIOTHON <span className="text-brand-orange">3.0</span>
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              MRIT, Mandya
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          size="sm"
          className="rounded-full px-4"
          nativeButton={false}
          render={<a href="#register" />}
        >
          Register now
        </Button>
      </div>
    </header>
  )
}
