"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { PageBanner } from "@/components/page-banner"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Phone, Loader2 } from "lucide-react"
import { sendEmailAction } from "@/app/actions/send-email"
import { toast } from "sonner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendEmailAction(formData)

      if (result.success) {
        setSubmitted(true)
        toast.success("Message sent successfully!")
      } else {
        toast.error(result.error || "Failed to send message")
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageBanner title="Contact Us" />

        <section className="bg-white py-14 md:py-20">
          <div className="max-w-[1160px] mx-auto px-6 lg:px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Info */}
              <div className="w-full lg:w-1/3">
                <h2 className="font-serif text-primary text-xl md:text-2xl uppercase tracking-wider mb-6">
                  Get in Touch
                </h2>
                <p className="text-slate-600 leading-relaxed text-base mb-8">
                  Interested in studying the Meisner technique at Playhouse West
                  Dallas? Have questions about our classes, auditing, or
                  enrollment? We{"'"}d love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-slate-900 font-semibold mb-1">
                        Location
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Dallas, Texas
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-slate-900 font-semibold mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:info@playhousewestdallas.com"
                        className="text-primary hover:text-accent text-sm transition-colors"
                      >
                        info@playhousewestdallas.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-slate-900 font-semibold mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:2142336405"
                        className="text-slate-600 text-sm hover:text-primary transition-colors"
                      >
                        (214) 233-6405
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h3 className="font-serif text-primary text-lg uppercase tracking-wider mb-3">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/PlayhouseWestDallas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-primary transition-colors text-sm"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://x.com/PlayhouseWest"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-primary transition-colors text-sm"
                    >
                      X (Twitter)
                    </a>
                    <a
                      href="https://www.youtube.com/user/PlayhouseWestSchool"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-primary transition-colors text-sm"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="w-full lg:w-2/3">
                <div className="bg-zinc-50 p-8 md:p-10 border border-zinc-200">
                  <h2 className="font-serif text-primary text-xl md:text-2xl uppercase tracking-wider mb-6">
                    Send Us a Message
                  </h2>

                  {submitted ? (
                    <div className="text-center py-12">
                      <h3 className="font-serif text-primary text-xl mb-4">
                        Thank You!
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        Your message has been received. We will get back to you
                        as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-slate-700 text-sm mb-2"
                          >
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white border border-slate-300 text-slate-900 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-slate-700 text-sm mb-2"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white border border-slate-300 text-slate-900 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-slate-700 text-sm mb-2"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-300 text-slate-900 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="">Select a topic</option>
                          <option value="enrollment">
                            Class Enrollment
                          </option>
                          <option value="audit">Auditing a Class</option>
                          <option value="tuition">
                            Tuition Information
                          </option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-slate-700 text-sm mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-300 text-slate-900 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-primary text-primary-foreground font-serif uppercase tracking-wider text-sm px-8 py-3 hover:bg-accent transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
