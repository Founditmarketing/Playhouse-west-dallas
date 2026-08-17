import type { Metadata } from "next"
import { Header } from "@/components/header"
import { PageBanner } from "@/components/page-banner"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Playhouse West Film Festival Dallas | Playhouse West Dallas",
  description:
    "The first annual Playhouse West Film Festival–Dallas. Screenings, awards, submission rules, and tickets for the 2026 festival at East Dallas Christian Church.",
  alternates: {
    canonical: "https://www.playhousewestdallas.com/film-festival",
  },
  openGraph: {
    title: "Playhouse West Film Festival – Dallas",
    description:
      "One of the most positive, filmmaker-friendly festivals in the country, now in Dallas for its first annual year.",
    type: "website",
  },
}

const TICKETS_URL =
  "https://events.ticketleap.com/tickets/playhouse-west-dallas/playhouse-west-dallas-film-festival"

const awards = [
  "Best Picture / Film",
  "Best Director",
  "Best Screenplay",
  "Best Actress & Actor",
  "Best Supporting Actress & Actor",
]

export default function FilmFestivalPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <PageBanner title="Playhouse West Film Festival — Dallas" />

        {/* Tickets CTA */}
        <section className="bg-zinc-900 py-10 md:py-14">
          <div className="max-w-[900px] mx-auto px-6 lg:px-4 text-center">
            <h2 className="font-serif text-white text-xl md:text-3xl uppercase tracking-widest mb-4">
              Get Your Tickets
            </h2>
            <p className="text-zinc-300 text-base md:text-lg mb-8 max-w-[640px] mx-auto">
              Join us for the first annual Playhouse West Film Festival in
              Dallas — a full slate of independent films made by Playhouse West
              members, with a Q&amp;A after every screening block.
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
                  Venue
                </h2>
                <p className="text-slate-700 text-base lg:text-lg leading-relaxed">
                  East Dallas Christian Church
                  <br />
                  629 N Peak St
                  <br />
                  Dallas, TX 75246
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
                  250+
                </div>
                <p className="text-slate-700 text-sm uppercase tracking-widest font-medium">
                  Member Films Produced Yearly
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

        {/* Rules & Terms */}
        <section className="bg-card py-14 md:py-20">
          <div className="max-w-[900px] mx-auto px-6 lg:px-4">
            <h2 className="font-serif text-primary text-2xl md:text-4xl uppercase tracking-[0.15em] mb-10 text-center">
              Rules &amp; Terms
            </h2>

            <div className="text-slate-700 space-y-6 leading-relaxed text-base lg:text-lg">
              <h3 className="font-serif text-primary text-xl uppercase tracking-wider">
                General Requirements
              </h3>

              <p>
                We strongly encourage you to review the following carefully. By
                submitting your project, you acknowledge that you have read and
                agreed to all of the following rules and terms. We will not be
                responsible for refunding submission fees when the guidelines
                are not properly followed. All projects that have been submitted
                by our final deadline and that adhere to the following terms
                will be considered for inclusion in the 2026 Playhouse West
                Dallas Film Festival.
              </p>

              <ol className="list-decimal pl-6 space-y-3 marker:text-primary marker:font-bold">
                <li>
                  <strong className="text-primary uppercase">
                    All entries must submit a cover letter.
                  </strong>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-zinc-50 py-14 md:py-20">
          <div className="max-w-[800px] mx-auto px-6 lg:px-4 text-center">
            <h2 className="font-serif text-primary text-2xl md:text-4xl uppercase tracking-[0.15em] mb-6">
              Join Us at the Festival
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-[600px] mx-auto mb-8">
              Tickets for the 2026 Playhouse West Film Festival–Dallas are
              available now through TicketLeap.
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
