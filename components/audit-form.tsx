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
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const message = `Phone: ${formData.phone}\n\nInterested in:\n${formData.interest}\n\nHow did you hear about us?:\n${formData.source || "N/A"}`

      const result = await sendEmailAction({
        name: formData.name,
        email: formData.email,
        subject: "New Audit Registration",
        message: message,
      })

      if (result.success) {
        setSubmitted(true)
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
    <form onSubmit={handleSubmit} className="space-y-4">
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
      </div>

      <div className="flex justify-center pt-4">
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
      </div>
    </form>
  )
}
