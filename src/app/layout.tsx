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
  title: "AutonomousX AI Academy  Learn AI, Build Real Products",
  description:
    "Master AI tools, build real websites & SaaS products, and future-proof your career with hands-on AI bootcamps. Foundation Track (13–18) and Advanced AI Track (18+).",
  keywords: [
    "AI education",
    "AI bootcamp",
    "learn AI",
    "SaaS development",
    "machine learning course",
    "LLM training",
    "PyTorch course",
    "AI for students",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
