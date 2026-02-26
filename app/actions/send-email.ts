"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmailAction(formData: {
    name: string
    email: string
    subject: string
    message: string
}) {
    try {
        const { name, email, subject, message } = formData

        const { data, error } = await resend.emails.send({
            from: "Playhouse West Dallas <info@playhousewestdallas.com>",
            to: ["info@playhousewestdallas.com"],
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
        })

        if (error) {
            console.error("Resend Error:", error)
            return { success: false, error: error.message }
        }

        return { success: true, data }
    } catch (err: any) {
        console.error("Email processing error:", err)
        return { success: false, error: err.message || "Something went wrong" }
    }
}
