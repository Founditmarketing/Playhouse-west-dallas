import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  FESTIVAL_AWARDS,
  FESTIVAL_DATE,
  FESTIVAL_HOURS,
  FESTIVAL_PAGE_URL,
  FESTIVAL_PRICE,
  FESTIVAL_TICKETS_URL,
  FESTIVAL_VENUE,
} from "@/lib/festival"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-2" },
  { label: "Audit", href: "/audit-1" },
  { label: "Classes", href: "/classes" },
  { label: "Film Festival", href: "/film-festival" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-black py-14 md:py-20">
      <div className="max-w-[1160px] mx-auto px-6 lg:px-4">
        {/* Film Festival Highlight */}
        <div id="film-festival-highlight" className="mb-20 scroll-mt-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="flex-1 w-full text-center lg:text-left">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                First Annual &middot; Dallas
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-white uppercase tracking-widest mb-6">
                Playhouse West Film Festival
              </h2>
              <div className="space-y-3 mb-10 text-zinc-300 text-lg">
                <p className="font-bold text-white text-xl">{FESTIVAL_DATE}</p>
                <p>{FESTIVAL_HOURS}</p>
                <p>
                  {FESTIVAL_VENUE.name}
                  <br />
                  {FESTIVAL_VENUE.cityState}
                </p>
                <p className="text-primary font-bold text-2xl uppercase tracking-widest mt-6">
                  {FESTIVAL_PRICE}
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <a
                  href={FESTIVAL_TICKETS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-white hover:text-primary text-white text-sm font-bold uppercase tracking-widest px-10 py-4 transition-colors w-full md:w-auto text-center"
                >
                  Buy Tickets
                </a>
                <Link
                  href={FESTIVAL_PAGE_URL}
                  className="inline-block text-zinc-300 hover:text-primary text-sm font-bold uppercase tracking-widest underline underline-offset-4 decoration-zinc-600 transition-colors w-full md:w-auto text-center"
                >
                  Full Schedule &amp; Details
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full text-left mt-4 lg:mt-0">
              <Accordion type="single" collapsible className="w-full text-zinc-300">
                <AccordionItem value="details" className="border-zinc-800">
                  <AccordionTrigger className="hover:text-white hover:no-underline font-serif tracking-wider uppercase md:text-lg">
                    What to Expect
                  </AccordionTrigger>
                  <AccordionContent className="text-base space-y-4 text-zinc-400">
                    <p>
                      27 independent films made by Playhouse West members, screening across five
                      blocks, with a Q&amp;A after every block.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Red carpet opens at 8:30 AM; screenings begin at 9:15 AM.</li>
                      <li>Lunch and dinner breaks are built into the day.</li>
                      <li>Awards ceremony closes the festival at 8:00 PM.</li>
                      <li>
                        One {FESTIVAL_PRICE.toLowerCase()} covers every block, all day long.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="awards" className="border-zinc-800 border-b-0">
                  <AccordionTrigger className="hover:text-white hover:no-underline font-serif tracking-wider uppercase md:text-lg">
                    Awards &amp; Prizes
                  </AccordionTrigger>
                  <AccordionContent className="text-base space-y-4 text-zinc-400 pt-2 pb-4">
                    <p>
                      Grand Jury Awards, presented in both Feature and Short Film categories.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                      {FESTIVAL_AWARDS.map((award) => (
                        <li key={award} className="text-white">
                          {award}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-zinc-800">
          <p className="text-zinc-500 text-sm">
            {"Copyright © 2026 Playhouse West Dallas - All Rights Reserved."}
          </p>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-primary font-medium text-sm transition-colors uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
