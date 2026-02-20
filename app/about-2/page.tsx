import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { PageBanner } from "@/components/page-banner"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us | Playhouse West Dallas",
  description:
    "Learn about the history of Playhouse West, our staff, and our distinguished alumni. Meisner acting training in Dallas, TX.",
}

const alumni = [
  {
    name: "James Franco",
    credits:
      "Spider-Man (2002), Pineapple Express (2008), Milk (2008), 127 Hours (2010), Of Mice and Men (2014)",
    image: "/images/jamesfranco.webp",
    imdb: "https://www.imdb.com/name/nm0290556/",
  },
  {
    name: "Tessa Thompson",
    credits:
      "Thor: Ragnarok (2017), Sorry to Bother You (2018), Annihilation (2018), Avengers: Endgame (2019), Men in Black: International (2019)",
    image: "/images/tessathompson.webp",
    imdb: "https://www.imdb.com/name/nm1935086/",
  },
  {
    name: "Mark Pellegrino",
    credits:
      "Mulholland Drive (2001), Lost (2009), Supernatural (2009), Being Human (2011), The Tomorrow People (2013)",
    image: "/images/markpellegrino.webp",
    imdb: "https://www.imdb.com/name/nm0671032/?ref_=fn_al_nm_1",
  },
  {
    name: "Jordana Brewster",
    credits:
      "The Faculty (1998), As the World Turns (2001), The Fast and the Furious franchise (2001-2023)",
    image: "/images/jordanabrewster.webp",
    imdb: "https://www.imdb.com/name/nm0108287/?ref_=fn_al_nm_1",
  },
  {
    name: "Jim Parrack",
    credits:
      "True Blood (2008), Battle Los Angeles (2011), Fury (2014), Suicide Squad (2016), 9-1-1: Lone Star (2020)",
    image: "/images/jimparrock.webp",
    imdb: "https://www.imdb.com/name/nm1747924/",
  },
  {
    name: "Kylie Bunbury",
    credits:
      "Under the Dome (2013), Pitch (2016), Game Night (2018), Big Sky (2020), Brave New World (2020)",
    image: "/images/kyliebunbury.webp",
    imdb: "https://www.imdb.com/name/nm3954896/?ref_=nv_sr_srsg_0",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageBanner title="History of Playhouse West" />

        {/* History Section */}
        <section className="bg-card py-14 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-4">
            <div className="grid lg:grid-cols-10 gap-12 items-center">
              <div className="lg:col-span-3">
                <Image
                  src="/images/robertmeisner.webp"
                  alt="Sanford Meisner"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="lg:col-span-7">
                <h2 className="font-serif text-primary text-xl md:text-2xl uppercase tracking-wider mb-8">
                  Excerpts reprinted from a 1995 Article by Robert Carnegie
                </h2>

                <blockquote className="border-l-4 border-primary pl-6">
                  <p className="text-slate-700 leading-relaxed text-base lg:text-lg italic">
                    {
                      "It was at some point early in our development that the founding graduates met to come up with a name for what we had been calling \"our group.\" We arrived at \"Playhouse West\" as homage to our roots in New York and the work of Sanford Meisner at The Neighborhood Playhouse. We thought of ourselves as the group which would try to keep alive and promulgate the technique in the hostile climate of L.A. Keep in mind this was in the early eighties before \"The Sanford Meisner Technique\" became the imitated rage it has since become."
                    }
                  </p>
                  <p className="text-slate-700 leading-relaxed text-base lg:text-lg italic mt-4">
                    {
                      "As a completely unique group in L.A., with a relatively new to L.A. training approach, we became very much in demand on our own merits, rather than on the basis of association with a name which has later become a calling card almost everyone uses to attract students. Our early classes, although free in charge, were as disciplined and rigorous as they are now, and only the serious could participate."
                    }
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section className="bg-background py-14 md:py-20">
          <div className="max-w-[1160px] mx-auto px-6 lg:px-4">
            <h2 className="font-serif text-primary text-2xl md:text-4xl uppercase tracking-wider text-center mb-4">
              Staff
            </h2>
            <p className="text-foreground text-center leading-relaxed text-base lg:text-lg max-w-[700px] mx-auto mb-12">
              Our faculty is made up of experienced professionals who are
              passionate about teaching and dedicated to helping students
              succeed. Our instructors are working professionals who bring
              real-world experience and expertise to the classroom.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Ric Maddox */}
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
                  <Image
                    src="/images/ricmaddox.webp"
                    alt="Ric Maddox - Acting Instructor at Playhouse West Dallas"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-foreground text-xl md:text-2xl mb-4">
                  Ric Maddox
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  Ric Maddox grew up in central Texas and moved to New York City
                  to train at the prestigious Stella Adler acting conservatory
                  for 3 years. Upon returning from New York, Ric was cast in{" "}
                  <strong className="text-foreground">Stop-Loss</strong>{" "}
                  opposite Ryan Phillippe and Timothy Olyphant. The film{"'"}s
                  director, Kimberly Peirce, encouraged Ric to make the move to
                  Los Angeles where Ric studied at Playhouse West with Tony
                  Savant, Holly Gagnier, Jeff Goldblum, and Jimmy Parrack. As an
                  actor Ric has been in over 59 films and TV shows. He starred
                  opposite Jeff Goldblum in{" "}
                  <strong className="text-foreground">
                    Prisoner of Second Avenue
                  </strong>{" "}
                  for Playhouse West Rep and took home &ldquo;Best Supporting
                  Actor&rdquo; at the 2013 Playhouse West film festival.
                  Notable credits include: AMC{"'"}s{" "}
                  <strong className="text-foreground">The American West</strong>{" "}
                  as Pat Garrett,{" "}
                  <strong className="text-foreground">House</strong> opposite
                  Lin-Manuel Miranda, and{" "}
                  <strong className="text-foreground">
                    American Crime Story
                  </strong>
                  . Ric has directed over 20 plays and has a new western TV
                  series in development at Sony.
                </p>
              </div>

              {/* Tamara Olson */}
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
                  <Image
                    src="/images/tamaraolson.webp"
                    alt="Tamara Olson - Acting Instructor at Playhouse West Dallas"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-foreground text-xl md:text-2xl mb-4">
                  Tamara Olson
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  Tamara Olson is an actress, writer and director. She studied
                  the Meisner technique at Playhouse West Los Angeles under the
                  tutelage of acclaimed teacher and Playhouse West Founder
                  Robert Carnegie for 6 years. She had the opportunity to
                  observe the legendary Sanford Meisner himself as he taught his
                  last classes at Playhouse West. A longtime member of Playhouse
                  West{"'"}s Repertory Theater Company, she appeared for several
                  years in the critically acclaimed, award-winning production of
                  Tony Savant{"'"}s{" "}
                  <strong className="text-foreground">
                    Welcome Home Soldier
                  </strong>
                  . Her many roles include a 3-year recurring role on{" "}
                  <strong className="text-foreground">
                    The Bold and the Beautiful
                  </strong>
                  , a regular on the sitcom{" "}
                  <strong className="text-foreground">Wild Oats</strong>, and
                  writing, directing and starring in her own critically
                  acclaimed feature film,{" "}
                  <strong className="text-foreground">Fashionable LA</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alumni Section */}
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-[1160px] mx-auto px-6 lg:px-4">
            <h2 className="font-serif text-primary text-2xl md:text-4xl uppercase tracking-wider text-center mb-4">
              Playhouse West Alumni
            </h2>
            <p className="text-slate-700 text-center leading-relaxed text-base lg:text-lg max-w-[800px] mx-auto mb-12">
              Our students have gone on to achieve success at all levels of the
              Industry: from Academy Award nominees, Golden Globe & Emmy Winners
              and nominees, to film producers and TV show creators, our students
              have had incredible success in film, television, and Broadway.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {alumni.map((person) => (
                <div key={person.name} className="flex flex-col items-center text-center">
                  <div className="w-56 h-56 rounded-full overflow-hidden mb-6 border-2 border-primary/20">
                    <Image
                      src={person.image}
                      alt={`${person.name} - Playhouse West Alumnus`}
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-primary text-xl md:text-2xl mb-3">
                    {person.name}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed max-w-[320px] mb-6 min-h-[4.5rem]">
                    {person.credits}
                  </p>
                  <a
                    href={person.imdb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm uppercase tracking-wider font-serif"
                  >
                    View IMDb Profile
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
