"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Minus } from "lucide-react"

interface Testimonial {
  name: string
  image: string
  shortText: string
  fullText: string
  attribution: string
}

const testimonials: Testimonial[] = [
  {
    name: "Jeff Goldblum",
    image: "/images/jeffgoldblum.jpeg",
    shortText:
      "\"I've had good teachers. I studied with Sandy Meisner and he set the course for me. He said it takes 20 years until you can call yourself an actor after continual work, and then a lifetime of progress if you're lucky enough to keep working at it. I took that to heart and I feel like I'm getting better and better. I know it's uncommon to w...",
    fullText:
      "\"I've had good teachers. I studied with Sandy Meisner and he set the course for me. He said it takes 20 years until you can call yourself an actor after continual work, and then a lifetime of progress if you're lucky enough to keep working at it. I took that to heart and I feel like I'm getting better and better. I know it's uncommon to work in more nourishing ways as the decades go on. I enjoy every precious day and moment.\"",
    attribution: "- Jeff Goldblum",
  },
  {
    name: "Ashley Judd",
    image: "/images/ashleyjudd.jpg",
    shortText:
      "\"I didn't know anything about acting until I attended Playhouse West. I had so much fun there, and learned the variables to solve any equation that might be given to me in a script.\"",
    fullText:
      "\"I didn't know anything about acting until I attended Playhouse West. I had so much fun there, and learned the variables to solve any equation that might be given to me in a script.\"",
    attribution: "- Ashley Judd",
  },
  {
    name: "Jim Parrack",
    image: "/images/jimparrock.webp",
    shortText:
      "\"I can't point to anything that has been more responsible for my career than my training. What [Playhouse West] gave me, apart from a technique and a foundation for how to approach acting, was a real respect for what it can mean to be an actor...",
    fullText:
      "\"I can't point to anything that has been more responsible for my career than my training. What [Playhouse West] gave me, apart from a technique and a foundation for how to approach acting, was a real respect for what it can mean to be an actor. The idea behind the teaching method at Playhouse West was to create an expression where it's personal, and it's out of you, it's living, and it's not geared toward garnering you applause or admiration, but toward the simple expression of human truth.\"",
    attribution: "- Jim Parrack",
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [expanded, setExpanded] = useState(false)
  const needsExpand = testimonial.fullText !== testimonial.shortText

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden mb-6">
        <Image
          src={testimonial.image}
          alt={`Portrait of ${testimonial.name}`}
          fill
          className="object-cover"
        />
      </div>
      <h4 className="font-serif text-primary text-xl md:text-2xl mb-4">
        {testimonial.name}
      </h4>
      <div className="text-slate-700 leading-relaxed text-base">
        <p>{expanded ? testimonial.fullText : testimonial.shortText}</p>
        {expanded && (
          <p className="mt-4 font-semibold text-slate-900">{testimonial.attribution}</p>
        )}
      </div>
      {needsExpand && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-primary hover:text-accent transition-colors mt-4 text-sm"
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              <Minus className="w-4 h-4" />
              <span>Show Less</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              <span>Show More</span>
            </>
          )}
        </button>
      )}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="bg-zinc-100 py-14 md:py-20 border-y border-zinc-200">
      <div className="max-w-[1160px] mx-auto px-6 lg:px-4">
        <h2 className="font-serif uppercase tracking-[4px] text-primary text-center text-3xl md:text-4xl lg:text-[42px] mb-12">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
