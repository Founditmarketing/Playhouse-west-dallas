import Image from "next/image"

export function AboutSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Image - Top on mobile, right on desktop */}
        <div className="w-full lg:w-1/2 bg-zinc-50 order-first lg:order-last">
          <div className="relative aspect-[16/15] md:aspect-square lg:h-full w-full min-h-[400px]">
            <Image
              src="/images/Sanford Meisner.png"
              alt="Portrait of Sanford Meisner, legendary acting teacher"
              fill
              className="object-contain object-center scale-95"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-14 md:py-20 lg:py-24 px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-[640px] space-y-8">
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-lg lg:text-xl">
                Playhouse West is a Top Acting School and Repertory Theater in{" "}
                <a
                  href="https://www.playhousewest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors underline font-semibold"
                >
                  Los Angeles
                </a>
                ,{" "}
                <a
                  href="https://www.playhousewest.com/philadelphia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors underline font-semibold"
                >
                  Philadelphia
                </a>{" "}
                and{" "}
                <a
                  href="http://www.playhousewestdallas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors underline font-semibold"
                >
                  Dallas
                </a>{" "}
                founded by Robert Carnegie and Jeff Goldblum. The training at
                Playhouse West is fully endorsed by Sanford Meisner, chosen by
                the legendary teacher of acting as the venue for his last decade
                of acting classes.
              </p>

              <p className="text-slate-700 leading-relaxed text-lg lg:text-xl italic font-medium">
                "Only we are heir to those improvements and additions, and therefore,
                exclusively offer the final version of the Sanford Meisner Technique
                and acting training."
              </p>

              <div>
                <h4 className="font-serif text-slate-900 text-2xl md:text-3xl mb-4">
                  WHAT WE OFFER
                </h4>
                <p className="text-slate-700 leading-relaxed text-lg lg:text-xl">
                  Our reputation for excellence is worldwide. Actors come here
                  from England, Russia, Australia, and beyond to study. Our students
                  have gone on to achieve success at all levels of the Industry,
                  from Academy Award nominees to Golden Globe and Emmy Winners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
