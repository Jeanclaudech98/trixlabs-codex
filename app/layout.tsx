import type { Metadata } from "next";
import { Space_Mono, Syncopate } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
  variable: "--font-display",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrixLabs | Web3 AI Hardware Manufacturer",
  description:
    "Bridging digital crypto and physical reality through verified AI hardware inventory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syncopate.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
