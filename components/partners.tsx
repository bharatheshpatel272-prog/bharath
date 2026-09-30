import Image from 'next/image'

export function Partners() {
  return (
    <section
      aria-labelledby="partners-heading"
      className="px-4 py-16 sm:px-6"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
        <h2
          id="partners-heading"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        >
          In association with
        </h2>
        <div className="flex w-full flex-col items-center gap-6 rounded-3xl border border-border bg-white p-6 sm:flex-row sm:justify-around sm:p-8">
          <Image
            src="/images/blessed-it.png"
            alt="Blessed IT Solution"
            width={365}
            height={84}
            className="h-14 w-auto"
          />
          <span
            className="h-px w-24 bg-border sm:h-14 sm:w-px"
            aria-hidden="true"
          />
          <Image
            src="/images/karunadu-tech.png"
            alt="Karunadu Technologies Private Limited"
            width={415}
            height={72}
            className="h-12 w-auto"
          />
        </div>
      </div>
    </section>
  )
}
