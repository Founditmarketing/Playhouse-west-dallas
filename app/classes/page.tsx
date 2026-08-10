import type { Metadata } from "next"
import { ClassesClient } from "./classes-client"

export const metadata: Metadata = {
  title: "Classes & Tuition | Playhouse West Dallas",
  description:
    "Meisner acting class schedule, tuition, and enrollment policies at Playhouse West Dallas.",
  alternates: {
    canonical: "https://www.playhousewestdallas.com/classes",
  },
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Meisner Acting Technique Training",
  description:
    "Professional Meisner acting training taught by teachers personally trained by Sanford Meisner, with Beginning, Intermediate, and Advanced classes.",
  provider: {
    "@type": "Organization",
    name: "Playhouse West Dallas",
    sameAs: "https://www.playhousewestdallas.com",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Onsite",
    courseSchedule: {
      "@type": "Schedule",
      repeatFrequency: "Weekly",
      byDay: ["https://schema.org/Tuesday", "https://schema.org/Saturday"],
    },
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "629 N Peak St",
        addressLocality: "Dallas",
        addressRegion: "TX",
        postalCode: "75246",
        addressCountry: "US",
      },
    },
  },
  offers: {
    "@type": "Offer",
    price: "250",
    priceCurrency: "USD",
    category: "Monthly tuition",
  },
}

export default function ClassesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <ClassesClient />
    </>
  )
}
