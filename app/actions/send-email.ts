"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

/** Rejects after `ms` milliseconds — used to guarantee the action always resolves. */
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
    return Promise.race([
        promise,
        new Promise<T>((_, reject) =>
            setTimeout(() => reject(new Error(`Request timed out after ${ms / 1000}s`)), ms)
        ),
    ])
}

export async function sendEmailAction(formData: {
    name: string
    email: string
    subject: string
    message: string
}) {
    try {
        const { name, email, subject, message } = formData

        const { data, error } = await withTimeout(
            resend.emails.send({
                from: "Playhouse West Dallas <info@playhousewestdallas.com>",
                to: ["Playhousewestdallas@gmail.com"],
                subject: `New Contact Form Submission: ${subject || "General Inquiry"}`,
                replyTo: email,
                html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
            }),
            15_000 // 15-second ceiling — button can never stay frozen past this
        )

        if (error) {
            console.error("Resend Error:", error)
            return { success: false, error: error.message }
        }

        return { success: true, data }
    } catch (err: any) {
        console.error("Email action error:", err)
        return { success: false, error: err.message || "Something went wrong. Please try again." }
    }
}

