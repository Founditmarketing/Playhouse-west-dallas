import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
        {/* Spotlight Section */}
        <div id="scene-night-spotlight" className="mb-20 scroll-mt-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="flex-1 w-full text-center lg:text-left">
              <h2 className="font-serif text-3xl md:text-5xl text-white uppercase tracking-widest mb-6">
                Scene Night Spotlight
              </h2>
              <div className="space-y-3 mb-10 text-zinc-300 text-lg">
                <p className="font-bold text-white text-xl">Saturday, May 23rd, 2026</p>
                <p>7:00 PM - 9:00 PM CDT</p>
                <p>East Dallas Christian Church<br/>Dallas, TX</p>
                <p className="text-primary font-bold text-2xl uppercase tracking-widest mt-6">It&apos;s Free!</p>
              </div>
              <a
                href="https://events.ticketleap.com/tickets/playhouse-west-dallas/playhouse-west-dallas-scene-night-may-23-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-white hover:text-primary text-white text-sm font-bold uppercase tracking-widest px-10 py-4 transition-colors w-full md:w-auto text-center"
              >
                Get Your Free Tickets
              </a>
            </div>

            <div className="flex-1 w-full text-left mt-4 lg:mt-0">
              <Accordion type="single" collapsible className="w-full text-zinc-300">
                <AccordionItem value="details" className="border-zinc-800">
                  <AccordionTrigger className="hover:text-white hover:no-underline font-serif tracking-wider uppercase md:text-lg">
                    Event Details & Guidelines
                  </AccordionTrigger>
                  <AccordionContent className="text-base space-y-4 text-zinc-400">
                    <p>
                      A free public presentation of scenes members have been working on. Open to the public and industry professionals.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Arrive early. Park in the back lot off Peak St, and enter via the green awning.</li>
                      <li>No food or drinks permitted (except bottled water).</li>
                      <li>No recording devices. Scenes may not be videotaped.</li>
                      <li><strong>Adult language & themes.</strong> Not appropriate for children under 16.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="scenes" className="border-zinc-800 border-b-0">
                  <AccordionTrigger className="hover:text-white hover:no-underline font-serif tracking-wider uppercase md:text-lg">
                    Scenes to be Presented
                  </AccordionTrigger>
                  <AccordionContent className="text-base space-y-4 text-zinc-400 pt-2 pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                      <div>
                        <span className="font-bold text-white">Three Years from Thirty</span><br />
                        <span className="text-zinc-500 text-sm">by Mike O&apos;Malley</span><br />
                        <span className="text-zinc-400 text-sm">Jonathon Womack, Frederic Chabbert-Nosek</span>
                      </div>
                      <div>
                        <span className="font-bold text-white">Breaking up</span><br />
                        <span className="text-zinc-500 text-sm">by Michael Cristofer</span><br />
                        <span className="text-zinc-400 text-sm">Gabriel Hill, Stacy Okafor</span>
                      </div>
                      <div>
                        <span className="font-bold text-white">Fat Pig</span><br />
                        <span className="text-zinc-500 text-sm">by Neil LaBute</span><br />
                        <span className="text-zinc-400 text-sm">Erica Howard, Wyatt Coates</span>
                      </div>
                      <div>
                        <span className="font-bold text-white">Reasons to be Pretty</span><br />
                        <span className="text-zinc-500 text-sm">by Neil LaBute</span><br />
                        <span className="text-zinc-400 text-sm">Phoenix Brown, James Lim</span>
                      </div>
                      <div>
                        <span className="font-bold text-white">Fool Me Twice</span><br />
                        <span className="text-zinc-500 text-sm">by Jessica Mayer</span><br />
                        <span className="text-zinc-400 text-sm">Bruce Cobb, Stacy Okafor</span>
                      </div>
                      <div>
                        <span className="font-bold text-white">The Years</span><br />
                        <span className="text-zinc-500 text-sm">by Cindy Lou Johnson</span><br />
                        <span className="text-zinc-400 text-sm">Keyara Chisolm, Andrew Casey</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-zinc-800">
          <p className="text-zinc-500 text-sm">
            {"Copyright \u00A9 2026 Playhouse West Dallas - All Rights Reserved."}
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
