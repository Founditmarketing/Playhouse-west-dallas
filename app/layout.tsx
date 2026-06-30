import type { Metadata } from 'next'
import Script from 'next/script'
import { Source_Sans_3, Righteous } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Toaster } from 'sonner'
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
      <head>
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K3RGGRMG');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K3RGGRMG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Toaster />
        <Analytics />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3024117911106034');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=3024117911106034&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      
      {/* Google Analytics */}
      <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-E5N92BL8WR')` }} />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-E5N92BL8WR" strategy="afterInteractive" />
            {/* Found It Lead Capture */}
      <Script src="https://www.founditos.com/embed/lead-capture.js" data-account="166677fd-a122-489a-b3cd-8b3b6b30c71c" strategy="afterInteractive" />
      </body>
    </html>
  )
}
