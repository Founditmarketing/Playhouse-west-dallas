import type { Metadata } from "next"
import { Header } from "@/components/header"
import { PageBanner } from "@/components/page-banner"
import { Footer } from "@/components/footer"
import { FESTIVAL_AWARDS, FESTIVAL_TICKETS_URL } from "@/lib/festival"

export const metadata: Metadata = {
  title: "Playhouse West Film Festival Dallas | September 19, 2026",
  description:
    "The first annual Playhouse West Film Festival–Dallas, Saturday September 19, 2026 at East Dallas Christian Church. Five screening blocks, Q&As, and an awards ceremony. Tickets $20.",
  alternates: {
    canonical: "https://www.playhousewestdallas.com/film-festival",
  },
  openGraph: {
    title: "Playhouse West Film Festival – Dallas",
    description:
      "Saturday, September 19, 2026 — one of the most positive, filmmaker-friendly festivals in the country, now in Dallas for its first annual year.",
    type: "website",
  },
}

const TICKETS_URL = FESTIVAL_TICKETS_URL

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Playhouse West Film Festival - Dallas",
  url: "https://www.playhousewestdallas.com/film-festival",
  startDate: "2026-09-19T09:00:00-05:00",
  endDate: "2026-09-19T21:00:00-05:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  description:
    "The first annual Playhouse West Film Festival in Dallas: five screening blocks of independent films made by Playhouse West members, a Q&A after each block, and an awards ceremony.",
  location: {
    "@type": "Place",
    name: "East Dallas Christian Church",
    address: {
      "@type": "PostalAddress",
      streetAddress: "629 N Peak St",
      addressLocality: "Dallas",
      addressRegion: "TX",
      postalCode: "75246",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Playhouse West Dallas",
    url: "https://www.playhousewestdallas.com",
  },
  offers: {
    "@type": "Offer",
    price: "20.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    validFrom: "2026-08-13T10:30:00-05:00",
    url: TICKETS_URL,
  },
}

const awards = FESTIVAL_AWARDS

type ScheduleItem = {
  time: string
  title: string
  films?: string[]
}

const schedule: ScheduleItem[] = [
  { time: "8:30 – 9:15 AM", title: "Red Carpet" },
  {
    time: "9:15 – 10:15 AM",
    title: "First Block",
    films: [
      "Let's Go",
      "Don't Pass Me By",
      "Lousley Based",
      "Results",
      "Nehemiah",
      "Parallel Circuit",
      "Small Town Outsiders",
    ],
  },
  { time: "10:15 – 10:50 AM", title: "Q & A" },
  {
    time: "10:50 AM – 12:00 PM",
    title: "Second Block",
    films: [
      "Earl's World",
      "Whenever You're Done",
      "For Your Ears Only",
      "Lullaby",
      "Ellie Makes a Friend",
    ],
  },
  { time: "12:00 – 12:35 PM", title: "Q & A" },
  { time: "12:35 – 1:35 PM", title: "Lunch Break" },
  {
    time: "1:35 – 2:55 PM",
    title: "Third Block",
    films: [
      "Pep Talk",
      "Not Safe for Work",
      "From Now",
      "Bounty",
      "Rise of the Gingerbread Man",
      "I Promise",
      "Inevitable Deception",
    ],
  },
  { time: "2:55 – 3:30 PM", title: "Q & A" },
  {
    time: "3:30 – 4:50 PM",
    title: "Fourth Block",
    films: [
      "Unremarkable",
      "Corruption",
      "The Freeze",
      "A Quart of Salt",
      "Pillow",
      "Promises",
    ],
  },
  { time: "4:50 – 5:25 PM", title: "Q & A" },
  { time: "5:25 – 6:25 PM", title: "Dinner Break" },
  {
    time: "6:25 – 7:25 PM",
    title: "Fifth Block",
    films: ["Whale of a Tale", "Between Peaks"],
  },
  { time: "7:25 – 8:00 PM", title: "Q & A" },
  { time: "8:00 PM", title: "Awards Ceremony" },
]

export default function FilmFestivalPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <Header />
      <main className="flex-1">
        <PageBanner title="Playhouse West Film Festival — Dallas" />

        {/* Tickets CTA */}
        <section className="bg-zinc-900 py-12 md:py-16">
          <div className="max-w-[900px] mx-auto px-6 lg:px-4 text-center">
            <p className="text-primary font-serif text-2xl md:text-4xl uppercase tracking-widest mb-3">
              Saturday, September 19, 2026
            </p>
            <p className="text-white text-lg md:text-xl mb-2">
              Red Carpet 8:30 AM &middot; Screenings 9:15 AM &middot; Awards
              Ceremony 8:00 PM
            </p>
            <p className="text-zinc-400 text-base md:text-lg mb-8">
              East Dallas Christian Church, Dallas, TX &middot;{" "}
              <span className="text-white font-bold">$20 All-Day Pass</span>
            </p>

            <p className="text-zinc-300 text-base md:text-lg mb-8 max-w-[640px] mx-auto">
              Join us for the first annual Playhouse West Film Festival in
              Dallas — five screening blocks of independent films made by
              Playhouse West members, with a Q&amp;A after every block.
            </p>
            <a
              href={TICKETS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-white hover:text-primary text-white text-sm font-bold uppercase tracking-widest px-10 py-4 transition-colors w-full md:w-auto text-center"
            >
              Buy Tickets on TicketLeap
            </a>
          </div>
        </section>

        {/* Venue & Organizers */}
        <section className="bg-white py-12 md:py-16 border-b border-zinc-200">
          <div className="max-w-[900px] mx-auto px-6 lg:px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-background p-6 border border-zinc-200 rounded-sm">
                <h2 className="font-serif text-primary text-xl uppercase tracking-wider mb-4">
                  Venue &amp; Date
                </h2>
                <p className="text-slate-700 text-base lg:text-lg leading-relaxed">
                  East Dallas Christian Church
                  <br />
                  629 N Peak St
                  <br />
                  Dallas, TX 75246
                </p>
                <p className="text-slate-700 text-base lg:text-lg leading-relaxed mt-4 pt-4 border-t border-zinc-200">
                  <strong className="text-primary">
                    Saturday, September 19, 2026
                  </strong>
                  <br />
                  9:00 AM – 9:00 PM CDT
                </p>
              </div>

              <div className="bg-background p-6 border border-zinc-200 rounded-sm">
                <h2 className="font-serif text-primary text-xl uppercase tracking-wider mb-4">
                  Organizers
                </h2>
                <div className="text-slate-700 text-base lg:text-lg leading-relaxed space-y-3">
                  <p>
                    <strong className="text-primary">Tamara Olson</strong>
                    <br />
                    <span className="text-sm uppercase tracking-widest text-slate-600">
                      Co-Festival Director
                    </span>
                  </p>
                  <p>
                    <strong className="text-primary">Richard Maddox</strong>
                    <br />
                    <span className="text-sm uppercase tracking-widest text-slate-600">
                      Co-Festival Director
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2026 Film Schedule */}
        <section className="bg-zinc-50 py-14 md:py-20 border-b border-zinc-200">
          <div className="max-w-[900px] mx-auto px-6 lg:px-4">
            <h2 className="font-serif text-primary text-2xl md:text-4xl uppercase tracking-[0.15em] mb-4 text-center text-balance">
              2026 Film Schedule
            </h2>
            <p className="text-muted-foreground text-center text-base md:text-lg mb-12">
              Saturday, September 19, 2026 &middot; 27 films across five
              screening blocks
            </p>

            <ol className="space-y-4">
              {schedule.map((item) => (
                <li
                  key={`${item.time}-${item.title}`}
                  className={`border-l-4 pl-5 py-4 pr-5 ${
                    item.films
                      ? "border-primary bg-white border-y border-r border-y-zinc-200 border-r-zinc-200"
                      : "border-zinc-300"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest whitespace-nowrap">
                      {item.time}
                    </span>
                    <span className="font-serif text-slate-800 text-lg uppercase tracking-wider">
                      {item.title}
                    </span>
                  </div>

                  {item.films && (
                    <ul className="mt-3 grid sm:grid-cols-2 gap-x-8 gap-y-1">
                      {item.films.map((film) => (
                        <li
                          key={film}
                          className="text-slate-700 text-base before:content-['—'] before:text-primary before:mr-2"
                        >
                          {film}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>

            <p className="text-muted-foreground text-sm text-center mt-10">
              Schedule is subject to change.
            </p>
          </div>
        </section>

        {/* Transparency / About */}
        <section className="bg-card py-14 md:py-20">
          <div className="max-w-[900px] mx-auto px-6 lg:px-4">
            <h2 className="font-serif text-primary text-2xl md:text-4xl uppercase tracking-[0.15em] mb-10 text-center text-balance">
              Transparency
            </h2>

            <div className="text-slate-700 space-y-6 leading-relaxed text-base lg:text-lg">
              <p>
                PWFF-Dallas is an off-shoot of the Playhouse West Film Festival
                in Los Angeles, established in 1997. In 2023, Artistic
                Directors/Instructors and PWFF Directors{" "}
                <strong className="text-primary">Richard Maddox</strong> and{" "}
                <strong className="text-primary">Tamara Olson</strong> moved to
                Dallas and founded a branch of the world-renowned school,
                Playhouse West-Dallas. This year, in 2026, the school will host
                its first annual film festival in Dallas and plans to continue
                this event annually, just like it&apos;s been held in Los
                Angeles.
              </p>

              <p>
                The Playhouse West Film Festival screens films showcasing the
                filmmaking and acting talents of Playhouse West students, both
                current and former. As a Meisner-based acting school (Sanford
                Meisner taught there late in his teaching career), Playhouse
                West is the only acting school which not only inspires its
                acting students to take control of their careers by making their
                own projects, but also hosts a top-notch festival where they can
                show off their work.
              </p>

              <div className="bg-primary/10 border border-primary/20 p-6">
                <p className="text-primary font-medium">
                  All films must either have a Playhouse West member in a
                  leading or primary supporting acting role, or as the director,
                  writer, producer, D.P., editor, etc.
                </p>
              </div>

              <p>
                The Playhouse West Film Festival-Dallas is sponsored by the
                Playhouse West Dallas Arts Foundation, a 501(c)(3) non-profit
                organization dedicated to the inspiration, education and
                development of motion picture and theater artists of independent
                vision, and to the exhibition of their work. By sponsoring
                programs such as the Playhouse West Film Festival, we can also
                educate the public about the art of filmmaking and introduce
                them to the work of aspiring new film artists of the future.
              </p>

              <p>
                The Playhouse West Film Festival is well-known as one of the
                most positive, filmmaker-friendly festivals in the country. Each
                year we hear more and more from filmmakers that our festival has
                been their favorite. From our well-organized, run-on-time format
                to our unique Q&amp;As after each screening block — giving
                filmmakers a platform to discuss their films at length with our
                audience — we take great pride in making our festival a
                fantastic experience for filmmakers.
              </p>

              <p>
                As an institution, Playhouse West leads the way in encouraging
                young filmmakers. Playhouse West members from Los Angeles,
                Philadelphia and now Dallas produce over 250 films per year,
                many of which go on to be accepted and win awards at film
                festivals around the country and world.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white py-10 md:py-14 border-b border-zinc-200">
          <div className="max-w-[900px] mx-auto px-6 lg:px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-primary font-serif text-3xl font-bold mb-2">
                  1997
                </div>
                <p className="text-slate-700 text-sm uppercase tracking-widest font-medium">
                  Festival Established in L.A.
                </p>
              </div>
              <div className="text-center">
                <div className="text-primary font-serif text-3xl font-bold mb-2">
                  27
                </div>
                <p className="text-slate-700 text-sm uppercase tracking-widest font-medium">
                  Films Screening in 2026
                </p>
              </div>
              <div className="text-center">
                <div className="text-primary font-serif text-3xl font-bold mb-2">
                  1st
                </div>
                <p className="text-slate-700 text-sm uppercase tracking-widest font-medium">
                  Annual Dallas Festival
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Prizes */}
        <section className="bg-primary py-14 md:py-20">
          <div className="max-w-[900px] mx-auto px-6 lg:px-4">
            <h2 className="font-serif text-white text-2xl md:text-4xl uppercase tracking-[0.15em] mb-4 text-center">
              Awards &amp; Prizes
            </h2>
            <p className="text-white/90 text-center text-base md:text-lg mb-10">
              Grand Jury Awards — presented in both Feature and Short Film
              categories.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {awards.map((award) => (
                <li
                  key={award}
                  className="border border-white/25 bg-white/5 px-6 py-5 text-white font-serif uppercase tracking-wider text-base md:text-lg text-center"
                >
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-zinc-50 py-14 md:py-20">
          <div className="max-w-[800px] mx-auto px-6 lg:px-4 text-center">
            <h2 className="font-serif text-primary text-2xl md:text-4xl uppercase tracking-[0.15em] mb-6">
              Join Us at the Festival
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-[600px] mx-auto mb-8">
              $20 all-day passes for the 2026 Playhouse West Film
              Festival–Dallas are on sale now through TicketLeap. Saturday,
              September 19, 2026 at East Dallas Christian Church.
            </p>
            <a
              href={TICKETS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-zinc-900 text-white text-sm font-bold uppercase tracking-widest px-10 py-4 transition-colors w-full md:w-auto text-center"
            >
              Buy Tickets on TicketLeap
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
