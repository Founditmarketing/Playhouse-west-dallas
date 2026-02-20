import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-primary">
      <div className="flex flex-col lg:flex-row min-h-[400px]">
        {/* Hero Image */}
        <div className="relative w-full lg:w-1/2 aspect-[984/509]">
          <Image
            src="/images/homepageimage.webp"
            alt="Actors performing on stage at Playhouse West Dallas"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="flex items-center justify-center w-full lg:w-1/2 bg-primary px-8 py-12 lg:py-20">
          <div className="max-w-lg text-center lg:text-center">
            <h1 className="font-serif text-primary-foreground text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider leading-relaxed text-balance">
              Meisner Acting Classes and Acting Training at the Playhouse West
              Dallas
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
