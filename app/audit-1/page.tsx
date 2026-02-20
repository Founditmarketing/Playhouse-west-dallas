import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { PageBanner } from "@/components/page-banner"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Audit a Class | Playhouse West Dallas",
  description:
    "Audit a Meisner acting class at Playhouse West Dallas. See our training firsthand before enrolling.",
}

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageBanner
          title="Audit Playhouse West - Dallas"
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

              <div className="bg-background p-8 border border-zinc-200 rounded-sm">
                <h3 className="font-serif text-primary text-xl uppercase mb-4 text-center">
                  Audit Schedule
                </h3>
                <div className="flex flex-col items-center text-center space-y-2">
                  <p className="text-lg">Evening</p>
                  <p className="text-primary font-bold text-xl">
                    Tuesdays Only
                  </p>
                  <p className="text-lg">@ 6:30 pm - 9:30 pm</p>
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

            <form className="space-y-4">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name*"
                    required
                    className="w-full bg-white border border-muted-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors h-[50px]"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email*"
                    required
                    className="w-full bg-white border border-muted-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors h-[50px]"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone*"
                    required
                    className="w-full bg-white border border-muted-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors h-[50px]"
                  />
                </div>

                <div>
                  <textarea
                    id="interest"
                    placeholder="I'm interested in*"
                    required
                    rows={6}
                    className="w-full bg-white border border-muted-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <div>
                  <input
                    type="text"
                    id="source"
                    placeholder="How did you hear about Playhouse West - Dallas?"
                    className="w-full bg-white border border-muted-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors h-[50px]"
                  />
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-primary text-white px-10 py-3 uppercase tracking-[0.2em] font-serif text-sm hover:opacity-90 transition-colors"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
