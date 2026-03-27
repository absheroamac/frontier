import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import { MenuOverlay } from "@/components/MenuOverlay";

// For now, using Inter as a highly readable technical sans-serif stand-in for Geist
// We establish the CSS variables to match standard branding.
const defaultBodyFont = Inter({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Frontier | Founder",
  description: "Founder insights, systems, and product thinking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${defaultBodyFont.variable}`}>
      <body className="bg-carbon text-white antialiased">
        <SmoothScrolling>{children}</SmoothScrolling>
        <MenuOverlay />
      </body>
    </html>
  );
}
