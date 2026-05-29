import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.autonomousx.tech"),
  title: {
    default: "AutonomousX AI Academy | Learn AI & Build Real Products",
    template: "%s | AutonomousX AI Academy"
  },
  description:
    "Learn actual real AI, not just ChatGPT wrappers. Become a good AI engineer, learn to code, and ship fast. From PyTorch and local LLMs to building your own SaaS products.",
  keywords: [
    "AI academy",
    "learn AI",
    "AI engineer",
    "learn to code",
    "ship fast",
    "real AI",
    "machine learning bootcamp",
    "SaaS development",
    "PyTorch course",
    "LLM training",
    "AI for students", "AI for Kids", "AI for Teens", "AI for Adults", "AI for retired people",
    "build AI agents"
  ],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "AutonomousX AI Academy | Learn AI now",
    description: "Learn actual real AI, not just ChatGPT wrappers. Become a good AI engineer, learn to code, and ship fast.",
    type: "website",
    locale: "en_US",
    siteName: "AutonomousX AI Academy",
    images: [
      {
        url: '/images/autonomousX.png',
        width: 800,
        height: 600,
        alt: 'AutonomousX AI Academy Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutonomousX AI Academy | Become an AI Engineer",
    description: "Learn to code and ship fast. Learn actual real AI, not just wrappers. Master PyTorch, LLMs, and build real SaaS products.",
    images: ['/images/autonomousX.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AutonomousX",
              "alternateName": "AutonomousX AI Academy",
              "url": "https://www.autonomousx.tech/"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AutonomousX",
              "url": "https://www.autonomousx.tech/",
              "logo": "https://www.autonomousx.tech/images/autonomousX.png",
              "sameAs": [
                "https://www.autonomousx.tech"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
