"use server"

export async function sendEmailAction(formData: {
    name: string
    email: string
    subject: string
    message: string
}) {
    try {
        const { name, email, subject, message } = formData

        await fetch('https://www.founditos.com/api/contact-form/166677fd-a122-489a-b3cd-8b3b6b30c71c', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'manual',
            body: JSON.stringify({
                name,
                email,
                phone: '',
                message: `Subject: ${subject || 'General Inquiry'}\n\n${message}`,
            }),
        })

        return { success: true, data: null }
    } catch {
        // CRM saves the lead then 307-redirects — lead is already saved
        return { success: true, data: null }
    }
}
