import type { Metadata } from "next"
import { ContactClient } from "./contact-client"

export const metadata: Metadata = {
  title: "Contact Us | Playhouse West Dallas",
  description:
    "Get in touch with Playhouse West Dallas about classes, auditing, or enrollment. Located at 629 Peak Street, Dallas, TX.",
  alternates: {
    canonical: "https://www.playhousewestdallas.com/contact",
  },
}

export default function ContactPage() {
  return <ContactClient />
}
