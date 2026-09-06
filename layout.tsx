import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SecretRevealProvider } from '@/components/common/SecretRevealContext';


export const metadata: Metadata = {
  metadataBase: new URL('https://limepak.vercel.app'),
  title: 'LIMEPAK — Building Apps, Websites, SaaS & AI Systems',
  description: 'LIMEPAK is an online technology company building digital products, intelligent systems and AI-powered teams for the next generation.',
  keywords: ['LIMEPAK', 'AI', 'SaaS', 'Web Development', 'App Development', 'AI Agents', 'AI Teams', 'Automation', 'Future Technology'],
  authors: [{ name: 'J. Yoga Dev' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://limepak.vercel.app',
    siteName: 'LIMEPAK',
    title: 'LIMEPAK — Building Apps, Websites, SaaS & AI Systems',
    description: 'LIMEPAK is an online technology company building digital products, intelligent systems and AI-powered teams.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LIMEPAK — Building the Future',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LIMEPAK — Building Apps, Websites, SaaS & AI Systems',
    description: 'LIMEPAK is an online technology company building digital products, intelligent systems and AI-powered teams.',
    images: ['/og-image.png'],
    creator: '@LIMEPAK',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#a3e635',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <SecretRevealProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </SecretRevealProvider>
      </body>
    </html>
  );
}
