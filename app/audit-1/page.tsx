import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { PageBanner } from "@/components/page-banner"
import { Footer } from "@/components/footer"
import { AuditForm } from "@/components/audit-form"

export const metadata: Metadata = {
  title: "Audit a Class | Playhouse West Dallas",
  description:
    "Audit a Meisner acting class at Playhouse West Dallas. See our training firsthand before enrolling.",
}

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <PageBanner
          title="Audit A Class"
        />

        {/* Content Section */}
        <section className="bg-card py-14 md:py-20">
          <div className="max-w-[900px] mx-auto px-6 lg:px-4 text-center">
            <h2 className="font-serif text-primary text-xl md:text-3xl uppercase tracking-widest mb-4">
              ALL POTENTIAL STUDENTS MUST FIRST AUDIT A CLASS
            </h2>
            <p className="text-primary text-lg md:text-xl font-medium mb-8">
              Appointment is Required. Audit is free.
            </p>

            <div className="bg-primary/10 border border-primary/20 p-4 mb-12">
              <p className="text-primary font-serif uppercase tracking-wider text-sm md:text-base">
                THE AUDIT REGISTRATION FORM IS AT THE BOTTOM OF THIS PAGE
              </p>
            </div>

            <div className="text-slate-700 text-left space-y-6 leading-relaxed text-base lg:text-lg">
              <p>
                We require all prospective students to first sit in and audit a
                full class. We want people to know how students are being
                taught, and hopefully see the value in our way of training
                actors. We also want you to observe the teacher, the students,
                and the way the class is conducted in a serious, professional
                atmosphere. Immediately following the audit class there will be
                a brief interview with{" "}
                <strong className="text-primary">Tamara Olson</strong> and/or{" "}
                <strong className="text-primary">Ric Maddox</strong> (Directors
                of Playhouse West Dallas).
              </p>

              <p className="font-medium text-primary">
                We accept students 18 years and older.
              </p>

              <div className="bg-background p-6 border border-zinc-200 rounded-sm">
                <h3 className="font-serif text-primary text-xl uppercase mb-4 text-center">
                  Audit Schedule & Location
                </h3>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-12 text-center">
                  <div>
                    <p className="text-primary font-bold text-lg">Tuesdays Only</p>
                    <p className="text-slate-700">6:00 PM - 9:00 PM</p>
                  </div>
                  <div className="hidden md:block w-px h-10 bg-zinc-200 mt-1"></div>
                  <div>
                    <p className="text-primary font-bold text-lg">Dallas Studio</p>
                    <p className="text-slate-700">629 Peak Street, Dallas, TX</p>
                  </div>
                </div>
              </div>

              {/* Commitment Expectations Call-out */}
              <div className="bg-primary text-white p-8 md:p-10 rounded-sm shadow-md my-10">
                <h3 className="font-serif text-xl md:text-2xl uppercase tracking-widest mb-4">
                  A School for Committed Actors
                </h3>
                <div className="text-white/90 leading-relaxed text-base md:text-lg space-y-4">
                  <p>
                    We want to be crystal clear: Playhouse West Dallas is a school of committed, working actors—many of whom are currently on TV shows and actively working in the industry. We demand a high level of professionalism, and <strong>we do not accept everyone.</strong>
                  </p>
                  <p>
                    We are not here to stroke egos or settle for mediocrity. Our sole focus is on discovering the raw truth of performance and developing our actors to work at the highest professional level. A fully trained Playhouse West actor is a deeply prepared actor, capable of working in any capacity and holding their own on any set.
                  </p>
                  <p>
                    This training will not be easy. It requires intense dedication and an unwavering work ethic. If you are looking for a casual hobby, this program is not for you. But if you stay committed and put in the hard work, we will give you the tools to take your craft to the next level—helping you become the actor you have always dreamed of being.
                  </p>
                  <div className="pt-4 mt-2 border-t border-white/20">
                    <p className="text-sm md:text-base italic">
                      While auditing a class is free of charge, we expect you to maintain this standard of professionalism. If you reserve a spot to audit and cannot make it for any reason, you <strong>must</strong> text or call the teacher in advance to notify them.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Any questions will be answered at the time of your audit. Our
                classes are three hours in length.
              </p>

              <p>
                You will be auditing a Level I (beginning level) class - this is
                the fundamental technique level of the work where all new
                students begin. The students at this step will have either just
                started their training or may have been working with us for
                several weeks or months.
              </p>

              <p>
                The exercises and scenes you will observe have at their root two
                clear guidelines: (1) acting is more instinctive than
                intellectual, and (2) it is vital for the actor to connect with
                his working partner. These basic principles are emphasized and
                trained into the actor in various ways until they become habit.
              </p>

              <p>
                As the actor moves through the program there is progressively
                more scene work, accompanied by advanced exercises, public
                &ldquo;Scene Presentations&rdquo;, and participation in future
                Playhouse West Dallas theatrical productions.
              </p>
            </div>
          </div>
        </section>

        {/* Cold-Traffic Context Section */}
        <section className="bg-white py-10 md:py-14 border-b border-zinc-200">
          <div className="max-w-[900px] mx-auto px-6 lg:px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-primary font-serif text-3xl font-bold mb-2">35+</div>
                <p className="text-slate-700 text-sm uppercase tracking-widest font-medium">Years of Training Actors</p>
              </div>
              <div className="text-center">
                <div className="text-primary font-serif text-3xl font-bold mb-2">3</div>
                <p className="text-slate-700 text-sm uppercase tracking-widest font-medium">Locations Nationwide</p>
              </div>
              <div className="text-center">
                <div className="text-primary font-serif text-3xl font-bold mb-2">Free</div>
                <p className="text-slate-700 text-sm uppercase tracking-widest font-medium">To Audit — No Commitment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="bg-zinc-50 py-14 md:py-24">
          <div className="max-w-[800px] mx-auto px-6 lg:px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-primary text-2xl md:text-4xl uppercase tracking-[0.15em] mb-6">
                AUDITOR REGISTRATION FORM
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-[600px] mx-auto">
                To make an appointment to audit a class, please fill out all
                required fields. You will receive an email asking you to confirm
                your date and time.
              </p>
            </div>

            <AuditForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
