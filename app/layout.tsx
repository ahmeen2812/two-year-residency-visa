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
  title: {
    default: "SULTAN Travel & Tourism | UAE 2-Year Freelance & Residence Visa Hub",
    template: "%s | SULTAN Hub"
  },
  description: "Official UAE 2-Year Freelance and Employment Residence Visa processing. Specialized services for Pakistan, India, Bangladesh, and worldwide clients. Fast-track Emirates ID & Labour approval in Dubai.",
  keywords: ["UAE Freelance Visa", "Dubai 2 Year Residence Visa", "Sultan Travel and Tourism", "Dubai Visa for Pakistanis", "Indian Visa UAE", "Bangladesh Visa Dubai", "Family Sponsorship Dubai", "Ejari Services Deira"],
  authors: [{ name: "Ahmed Touqeer", url: "https://www.linkedin.com/in/ahmed-touqeer-4105503a7" }],
  creator: "Ahmed Touqeer",
  openGraph: {
  type: "website",
  locale: "en_AE",
  url: "https://two-year-residency-visa.vercel.app", // This must match your final domain
  siteName: "SULTAN Travel & Tourism LLC",
  title: "UAE 2-Year Freelance & Residence Visa | SULTAN Hub Dubai",
  description: "Official 2-Year residency processing for Pakistan, India, Bangladesh and worldwide. Start your Dubai journey with SULTAN Hub.",
  images: [
    {
      url: "/assets/images/dubai-hero.jpg", // WhatsApp will pull this image
      width: 1200,
      height: 630,
      alt: "SULTAN Travel and Tourism Dubai",
    },
  ],
},
  twitter: {
    card: "summary_large_image",
    title: "SULTAN Hub | UAE 2-Year Residence Visa",
    description: "Fast-track your Dubai residency with SULTAN Travel and Tourism LLC.",
    images: ["/assets/images/dubai-hero.jpg"],
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