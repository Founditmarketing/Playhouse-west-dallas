"use server"

export async function sendEmailAction(formData: {
    name: string
    email: string
    subject: string
    message: string
}) {
    try {
        const { name, email, subject, message } = formData

        const res = await fetch('https://www.founditos.com/api/contact-form/166677fd-a122-489a-b3cd-8b3b6b30c71c', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                phone: '',
                message: `Subject: ${subject || 'General Inquiry'}\n\n${message}`,
            }),
        })

        if (!res.ok) {
            const data = await res.json()
            return { success: false, error: data.error || 'Failed to send.' }
        }

        return { success: true, data: null }
    } catch (err: any) {
        console.error("Email action error:", err)
        return { success: false, error: err.message || "Something went wrong. Please try again." }
    }
}
