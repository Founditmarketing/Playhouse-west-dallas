"use client"

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { PageBanner } from "@/components/page-banner"
import { Footer } from "@/components/footer"

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <PageBanner title="Tuition & Class Structure" />

        {/* Heritage Section - Full Width & Centered */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-[1240px] mx-auto px-6 text-center">
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-700">
              <p className="font-serif text-2xl md:text-3xl text-slate-900 leading-tight">
                There are only a handful of people personally trained by
                Sanford Meisner to teach his technique. Robert Carnegie is
                part of this very select group.
              </p>
              <p>
                All of the teachers at Playhouse West have learned Mr. Meisner's
                approach and have been specifically trained to teach it. While
                many claim to teach The Meisner Technique, only a handful have
                first-hand experience with Mr. Meisner himself, let alone ten
                years of work with him as we have.
              </p>
              <p className="font-semibold text-slate-900">
                Therefore, our presentation of this approach to acting is
                legitimate and first-hand, something very few can claim.
              </p>
            </div>
          </div>
        </section>

        {/* Tuition and Class Structure Grid Section */}
        <section className="bg-zinc-50 py-16 md:py-24 border-y border-zinc-200">
          <div className="max-w-[1240px] mx-auto px-6">
            <h2 className="font-serif text-primary text-3xl md:text-5xl uppercase tracking-tighter mb-16 text-center">
              Tuition and Class Structure
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 1. Class Structure */}
              <div className="bg-white p-8 border border-zinc-200 shadow-sm flex flex-col h-full">
                <h3 className="font-serif text-primary text-xl md:text-2xl uppercase tracking-wider mb-6 pb-2 border-b border-zinc-100">
                  Class Structure
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-slate-700 text-sm md:text-base leading-relaxed">
                  <li>Two Classes per week (3hrs/class)</li>
                  <li>You will work EVERY class.</li>
                  <li>Everyone starts in the beginning class regardless of prior training or experience.</li>
                  <li>Promotion to Intermediate/Advanced is based on teacher assessment.</li>
                </ul>
              </div>

              {/* 2. New Students */}
              <div className="bg-white p-8 border border-zinc-200 shadow-sm flex flex-col h-full">
                <h3 className="font-serif text-primary text-xl md:text-2xl uppercase tracking-wider mb-6 pb-2 border-b border-zinc-100">
                  New Students
                </h3>
                <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    ALL NEW STUDENTS must start in a Beginning class regardless
                    of prior training.
                  </p>
                  <p>
                    You can start at any time during the month as classes are ongoing. When you start is where you start, we tailor our program to you!
                  </p>
                </div>
              </div>

              {/* 3. Returning / Advanced Students */}
              <div className="bg-white p-8 border border-zinc-200 shadow-sm flex flex-col h-full">
                <h3 className="font-serif text-primary text-xl md:text-2xl uppercase tracking-wider mb-6 pb-2 border-b border-zinc-100">
                  Returning / Advanced
                </h3>
                <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    Please choose which days you want your two classes.
                  </p>
                  <p>
                    Tuition is a flat monthly rate enabling focused, continuous development. Promotion remains at the discretion of the teacher.
                  </p>
                </div>
              </div>

              {/* 4. Attendance */}
              <div className="bg-white p-8 border border-zinc-200 shadow-sm flex flex-col h-full">
                <h3 className="font-serif text-primary text-xl md:text-2xl uppercase tracking-wider mb-6 pb-2 border-b border-zinc-100">
                  Attendance
                </h3>
                <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    We take attendance <strong>VERY</strong> seriously. No make-ups or refunds for missed classes.
                  </p>
                  <p>
                    Consistent absence or lack of communication regarding absences may result in suspension or expulsion from the school.
                  </p>
                </div>
              </div>

              {/* 5. Tuition */}
              <div className="bg-white p-8 border border-zinc-200 shadow-sm flex flex-col h-full">
                <h3 className="font-serif text-primary text-xl md:text-2xl uppercase tracking-wider mb-6 pb-2 border-b border-zinc-100">
                  Tuition
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline border-b border-zinc-50 pb-2">
                    <span className="text-slate-900 font-bold text-2xl font-serif text-primary">$200</span>
                    <span className="text-xs text-slate-500 uppercase tracking-widest">per month</span>
                  </div>
                  <ul className="text-slate-700 text-sm space-y-2">
                    <li>• Cash/Check: $200/month</li>
                    <li>• Venmo: $205/month</li>
                    <li>• New students: One-time pro-rate available</li>
                  </ul>
                </div>
              </div>

              {/* 6. Payment */}
              <div className="bg-white p-8 border border-zinc-200 shadow-sm flex flex-col h-full">
                <h3 className="font-serif text-primary text-xl md:text-2xl uppercase tracking-wider mb-6 pb-2 border-b border-zinc-100">
                  Payment
                </h3>
                <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    First month must be paid via Venmo. Subsequently, we accept Cash, Check, or Venmo.
                  </p>
                  <p className="text-xs text-slate-500">
                    Email playhousewestdallas@gmail.com if you cannot use Venmo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policies & Expectations Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-serif text-primary text-3xl md:text-5xl uppercase tracking-widest mb-16 text-center">
              POLICIES & EXPECTATIONS
            </h2>

            <div className="space-y-16">
              {/* Payment Policy */}
              <div className="space-y-4">
                <h3 className="font-serif text-slate-900 text-xl md:text-2xl uppercase tracking-wider border-b border-zinc-300 pb-2">
                  Payment Policy
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                  <p>
                    All students are expected to pay their class fees, in full and on time. Those who pay after the set deadline will be charged a $10 late fee, no exceptions. Payment for Beginning class is due by 11:59pm PST on the 25th of each month for the following month. Intermediate and Advanced students pay on the first class day of each month.
                  </p>
                  <p>
                    Payment must be made no later than the second class of the month or the student cannot work in the class and will be sent home.
                  </p>
                  <div className="bg-zinc-50 p-6 border border-zinc-200 rounded-lg">
                    <p className="text-sm font-semibold text-slate-900 mb-2">BAD CHECK POLICY:</p>
                    <p className="text-sm">
                      If a student writes a bad check, that payment must be made immediately, in cash, plus a $20 fine. In addition, personal checks will no longer be accepted thereafter.
                    </p>
                  </div>
                </div>
              </div>

              {/* How Tuition is Calculated */}
              <div className="space-y-4">
                <h3 className="font-serif text-slate-900 text-xl md:text-2xl uppercase tracking-wider border-b border-zinc-300 pb-2">
                  How Tuition is Calculated
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                  <p>
                    Monthly fees at Playhouse West are based on a year's worth of classes. Each student is offered two classes per week, or an average of eight classes per month.
                  </p>
                  <p>
                    The monthly fee is averaged out to cover the total offered classes per year. Hence, in months with fewer classes (holidays/breaks), you are pre-paying for months with more classes (nine or ten classes).
                  </p>
                </div>
              </div>

              {/* Regarding Vacation & Holidays */}
              <div className="space-y-4">
                <h3 className="font-serif text-slate-900 text-xl md:text-2xl uppercase tracking-wider border-b border-zinc-300 pb-2">
                  Regarding Vacation & Holidays
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                  <p>
                    We break for all major holidays and two weeks off at Christmas. Every student must pay for December/January to maintain enrollment, regardless of these breaks.
                  </p>
                  <p>
                    Our rates are intentionally reasonable to ensure high-quality training remains accessible, and we expect students to honor their financial obligations to the school.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-zinc-50 py-20 md:py-32 border-t border-zinc-200 text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="space-y-12">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white font-serif uppercase tracking-widest px-12 py-5 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Apply to the program
              </Link>
              <div className="pt-8 border-t border-zinc-200">
                <p className="text-slate-400 uppercase tracking-[4px] text-xs">
                  Legitimate Meisner Training &bull; Dallas, TX
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
