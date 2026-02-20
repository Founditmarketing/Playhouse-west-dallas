import type { Metadata } from 'next'
import { Source_Sans_3, Righteous } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
})
const _righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-righteous',
})

export const metadata: Metadata = {
  title: 'Acting Training Classes in Dallas | Playhouse West Dallas',
  description:
    'Learn Meisner acting training with expert teachers at Playhouse West Dallas. Enhance your skills with our professional instructors and start your dream career.',
  openGraph: {
    title: 'Playhouse West Dallas',
    description:
      'Learn Meisner acting training with expert teachers at Playhouse West Dallas.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#a92527',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-US">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
