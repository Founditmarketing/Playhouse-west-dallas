import Image from "next/image"

interface PageBannerProps {
  title: string
}

export function PageBanner({ title }: PageBannerProps) {
  return (
    <section className="bg-primary">
      <div className="relative max-w-[1160px] mx-auto px-6 lg:px-4 py-16 md:py-24">
        <h1 className="font-serif text-primary-foreground text-2xl md:text-4xl lg:text-5xl uppercase tracking-wider text-center text-balance">
          {title}
        </h1>
      </div>
    </section>
  )
}
