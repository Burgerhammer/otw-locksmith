import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OTW Locksmith | 24/7 Locksmith Services in South Florida",
  description:
    "Fast, reliable locksmith services for your home, business, and vehicle. Licensed & insured. Available 24/7 with no hidden fees. We come to you.",
  keywords: [
    "locksmith",
    "south florida locksmith",
    "emergency lockout",
    "lock rekey",
    "automotive locksmith",
    "24/7 locksmith",
    "mobile locksmith",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
