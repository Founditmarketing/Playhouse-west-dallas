"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { sendEmailAction } from "@/app/actions/send-email"
import { toast } from "sonner"

export function AuditForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    source: "",
    seriousness: "",
    knowledge: "",
    willShowUp: "",
    readyToCommit: "",
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
      const message = `Phone: ${formData.phone}\n\nInterested in:\n${formData.interest}\n\nHow did you hear about us?:\n${formData.source || "N/A"}\n\nHow serious are you about acting?:\n${formData.seriousness}\n\nWhat do you know of Playhouse West Dallas and the Meisner method of acting?:\n${formData.knowledge}\n\nIf chosen to audit, will you show up on time and be present?:\n${formData.willShowUp}\n\nAre you ready to commit to a 3 year acting program?:\n${formData.readyToCommit}`

      const result = await sendEmailAction({
        name: formData.name,
        email: formData.email,
        subject: "New Audit Registration",
        message: message,
      })

      if (result.success) {
        setSubmitted(true)
        // GTM: fire conversion event for Google Ads tracking
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({ event: "audit_form_submit" })
        }
        toast.success("Audit registration sent successfully!")
      } else {
        toast.error(result.error || "Failed to send registration")
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12 bg-zinc-50 border border-zinc-200 p-8">
        <h3 className="font-serif text-primary text-xl mb-4">
          Registration Received!
        </h3>
        <p className="text-slate-700 leading-relaxed max-w-md mx-auto">
          Thank you for registering to audit a class. We will review your request and get back to you soon to confirm your date and time.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Class Details Info Box */}
      <div className="bg-primary/5 border border-primary/20 p-5 rounded-sm text-center">
        <p className="text-slate-800">
          <span className="font-bold">Class Time:</span> Tuesdays, 6:30 PM - 9:30 PM
        </p>
        <p className="text-slate-800 mt-1">
          <span className="font-bold">Location:</span> 629 Peak Street, Dallas, TX
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name*"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white border border-muted-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors h-[50px]"
          />
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white border border-muted-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors h-[50px]"
          />
        </div>

        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone*"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-white border border-muted-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors h-[50px]"
          />
        </div>


        <div>
          <input
            type="text"
            id="source"
            name="source"
            placeholder="How did you hear about Playhouse West - Dallas?"
            value={formData.source}
            onChange={handleChange}
            className="w-full bg-white border border-muted-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors h-[50px]"
          />
        </div>

        <div className="w-full bg-white border border-muted-foreground/20 px-4 py-3">
          <p className="text-muted-foreground/80 mb-3">How serious are you about acting?*</p>
          <div className="space-y-2">
            {["Just exploring", "Hobbyist", "Aspiring Professional", "Dedicated Professional"].map((option) => (
              <label key={option} className="flex items-center space-x-3 text-foreground cursor-pointer">
                <input
                  type="radio"
                  name="seriousness"
                  value={option}
                  required
                  checked={formData.seriousness === option}
                  onChange={handleChange}
                  className="accent-primary w-4 h-4"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <textarea
            id="knowledge"
            name="knowledge"
            placeholder="What do you know of Playhouse West Dallas and the Meisner method of acting? (1-4 answers)*"
            required
            rows={4}
            value={formData.knowledge}
            onChange={handleChange}
            className="w-full bg-white border border-muted-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors resize-none"
          ></textarea>
        </div>

        <div className="w-full bg-white border border-muted-foreground/20 px-4 py-3">
          <p className="text-muted-foreground/80 mb-3">If chosen to audit a class, will you show up on time and be present?*</p>
          <div className="flex space-x-6">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center space-x-3 text-foreground cursor-pointer">
                <input
                  type="radio"
                  name="willShowUp"
                  value={option}
                  required
                  checked={formData.willShowUp === option}
                  onChange={handleChange}
                  className="accent-primary w-4 h-4"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="w-full bg-white border border-muted-foreground/20 px-4 py-3">
          <p className="text-muted-foreground/80 mb-3">Are you ready to commit to a 3 year acting program?*</p>
          <div className="flex space-x-6">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center space-x-3 text-foreground cursor-pointer">
                <input
                  type="radio"
                  name="readyToCommit"
                  value={option}
                  required
                  checked={formData.readyToCommit === option}
                  onChange={handleChange}
                  className="accent-primary w-4 h-4"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <textarea
            id="interest"
            name="interest"
            placeholder="I'm interested in*"
            required
            rows={6}
            value={formData.interest}
            onChange={handleChange}
            className="w-full bg-white border border-muted-foreground/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors resize-none"
          ></textarea>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-white px-10 py-3 uppercase tracking-[0.2em] font-serif text-sm hover:opacity-90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[200px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              SENDING...
            </>
          ) : (
            "SEND"
          )}
        </button>
        <p className="text-muted-foreground text-sm text-center">
          We&apos;ll follow up within 1 business day to confirm your audit date and time.
        </p>
      </div>
    </form>
  )
}
