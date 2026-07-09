import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ['800'], variable: '--font-manrope' });
const inter = Inter({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-inter' });

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // 1. Ensure this matches your NEW live URL exactly
  metadataBase: new URL('https://two-year-residency-visa.vercel.app'), 
  
  title: {
    default: "SULTAN Travel & Tourism | UAE 2-Year Freelance & Residence Visa Hub",
    template: "%s | SULTAN Hub"
  },
  description: "Official UAE 2-Year Freelance and Employment Residence Visa processing. Specialized services for Pakistan, India, Bangladesh, and worldwide clients.",
  
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://two-year-residency-visa.vercel.app",
    siteName: "SULTAN Travel & Tourism LLC",
    title: "UAE 2-Year Freelance & Residence Visa | SULTAN Hub Dubai",
    description: "Start your Dubai journey with SULTAN Hub. Official 2-Year residency processing starting from 6,000 AED.",
    images: [
      {
        // 2. We use the FULL absolute path here to force WhatsApp to find it
        url: 'https://two-year-residency-visa.vercel.app/assets/images/dubai-hero.jpg',
        width: 1200,
        height: 630,
        alt: "SULTAN Travel & Tourism Dubai Burj Khalifa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SULTAN Hub | UAE 2-Year Residence Visa",
    description: "Fast-track your Dubai residency with SULTAN Travel and Tourism LLC.",
    images: ['https://two-year-residency-visa.vercel.app/assets/images/dubai-hero.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico", // Ensure you have a favicon in /public
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${inter.variable} font-body bg-white antialiased`}>
        {children}
      </body>
    </html>
  );
}