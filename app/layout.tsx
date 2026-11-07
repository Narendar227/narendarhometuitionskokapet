import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const siteUrl = 'https://narendarhometuitions.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Narendar Home Tuitions Kokapet | Home Tutors in Kokapet Hyderabad',
    template: '%s | Narendar Home Tuitions Kokapet',
  },
  description:
    'Narendar Home Tuitions Kokapet helps families enquire about one-to-one home tuition in Kokapet, Hyderabad for school classes, core subjects and CBSE, ICSE or State Board learning needs.',
  keywords: [
    'Home Tuition in Kokapet',
    'Home Tutors in Kokapet',
    'Best Home Tuition in Kokapet',
    'Home Tuition Teachers in Kokapet',
    'Private Tutors in Kokapet',
    'Personal Home Tutors in Kokapet',
    'Home Tuition for School Students in Kokapet',
    'Maths Home Tuition in Kokapet',
    'Science Home Tuition in Kokapet',
    'CBSE Home Tuition in Kokapet',
    'ICSE Home Tuition in Kokapet',
    'One-to-One Home Tuition in Kokapet',
    'Experienced Home Tutors in Kokapet',
  ],
  authors: [{ name: 'Narendar Home Tuitions' }],
  creator: 'Narendar Home Tuitions',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Narendar Home Tuitions',
    title: 'Narendar Home Tuitions Kokapet | Home Tutors in Kokapet Hyderabad',
    description:
      'Expert, certified home tutors for all classes, subjects and boards in Kokapet, Hyderabad areas. Personalized learning with experienced tutors. Learn Today, Lead Tomorrow.',
    images: [
      {
        url: '/images/narendar-logo.png',
        width: 1200,
        height: 1200,
        alt: 'Narendar Home Tuitions logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narendar Home Tuitions Kokapet | Home Tutors in Kokapet Hyderabad',
    description:
      'Expert home tutors for all classes, subjects and boards in Kokapet, Hyderabad areas.',
    images: ['/images/narendar-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#053067',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}#business`,
  name: 'Narendar Home Tuitions',
  image: `${siteUrl}/images/narendar-logo.png`,
  url: siteUrl,
  telephone: '+91-6304079622',
  slogan: 'Learn Today, Lead Tomorrow',
  description:
    'Home tuition enquiries for families in Kokapet, Hyderabad, including nearby west Hyderabad localities.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kokapet',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  areaServed: [
    'Kokapet',
    'Narsingi',
    'Gandipet',
    'Manchirevula',
    'Puppalaguda',
    'Nanakramguda',
    'Financial District',
    'Gachibowli',
    'Tellapur',
    'Neknampur',
    'Khajaguda',
    'Manikonda',
  ],
  priceRange: '₹₹',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '21:00',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
