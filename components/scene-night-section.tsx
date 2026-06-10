import Link from "next/link"

export function SceneNightSection() {
  return (
    <section className="bg-zinc-50 py-16 md:py-24 border-b border-zinc-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-primary text-3xl md:text-5xl uppercase tracking-widest mb-4">
            Upcoming Event: Scene Night
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-[800px] mx-auto">
            Witness our members' work in this free public presentation. 
            Open to everyone, including industry professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Logistics & Details */}
          <div className="space-y-8">
            <div className="bg-white p-6 md:p-8 border border-zinc-200 shadow-sm rounded-sm">
              <h3 className="font-serif text-primary text-xl uppercase tracking-wider mb-4 border-b border-zinc-100 pb-2">
                Event Logistics
              </h3>
              <ul className="space-y-5 text-slate-700">
                <li className="flex items-start gap-4">
                  <span className="font-bold text-slate-900 w-20 shrink-0 uppercase tracking-wider text-sm mt-0.5">When</span>
                  <span>Saturday, May 23, 2026 @ 7:00 PM</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-bold text-slate-900 w-20 shrink-0 uppercase tracking-wider text-sm mt-0.5">Where</span>
                  <span>East Dallas Christian Church<br />629 N Peak St. Dallas, TX 75246</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-bold text-slate-900 w-20 shrink-0 uppercase tracking-wider text-sm mt-0.5">Arrival</span>
                  <span>Park in the back lot off Peak St. Enter through the door with the large green awning. Please arrive early as we start promptly.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-bold text-primary w-20 shrink-0 uppercase tracking-wider text-sm mt-0.5">Cost</span>
                  <span className="font-bold uppercase tracking-widest text-primary">Free Admission</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 p-6 border border-primary/20 rounded-sm">
              <h4 className="font-bold text-primary mb-3 uppercase tracking-wider text-sm">Important Guidelines</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                <li>No food or drinks permitted (except bottled water).</li>
                <li>No recording devices permitted. Scenes may not be videotaped.</li>
                <li>Scenes contain adult language and themes. Not appropriate for children under 16. Please do not bring young children.</li>
              </ul>
            </div>
            
            <div className="text-center md:text-left pt-2">
              <a
                href="https://events.ticketleap.com/tickets/playhouse-west-dallas/playhouse-west-dallas-scene-night-may-23-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-slate-900 text-white font-serif uppercase tracking-widest px-10 py-5 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                RSVP for Free Tickets
              </a>
            </div>
          </div>

          {/* Scene List */}
          <div className="bg-white p-6 md:p-8 border border-zinc-200 shadow-sm rounded-sm">
            <h3 className="font-serif text-primary text-xl uppercase tracking-wider mb-6 border-b border-zinc-100 pb-2">
              Scenes to be Presented
            </h3>
            <div className="space-y-6">
              {[
                { title: "Three Years from Thirty", author: "Mike O'Malley", actors: "Jonathon Womack, Frederic Chabbert-Nosek" },
                { title: "Breaking up", author: "Michael Cristofer", actors: "Gabriel Hill, Stacy Okafor" },
                { title: "Fat Pig", author: "Neil LaBute", actors: "Erica Howard, Wyatt Coates" },
                { title: "Reasons to be Pretty", author: "Neil LaBute", actors: "Phoenix Brown, James Lim" },
                { title: "Fool Me Twice", author: "Jessica Mayer", actors: "Bruce Cobb, Stacy Okafor" },
                { title: "The Years", author: "Cindy Lou Johnson", actors: "Keyara Chisolm, Andrew Casey" }
              ].map((scene, i) => (
                <div key={i} className="group pb-4 border-b border-zinc-50 last:border-0 last:pb-0">
                  <p className="font-medium text-slate-900 text-lg">
                    &ldquo;{scene.title}&rdquo; <span className="text-sm font-normal text-slate-500">by {scene.author}</span>
                  </p>
                  <p className="text-primary text-sm font-medium mt-1">
                    Featuring: <span className="text-slate-600 font-normal">{scene.actors}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
