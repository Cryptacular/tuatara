import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Logo from "./components/Logo";
import PageWrapper from "./components/PageWrapper";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title =
  "Tuatara — musical scales and modes — interactive reference for keyboard, guitar and bass guitar";

export const metadata: Metadata = {
  title,
  description:
    "Easily find the notes in a particular key, scale and mode for your next musical project or jam session.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Tuatara" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageWrapper>
          <h1 className="text-xl font-light">
            <Link
              href="/"
              className="flex flex-row items-center justify-center"
            >
              <Logo />
              <span className="sr-only">{title}</span>
            </Link>
          </h1>

          {children}

          <footer className="text-xs mt-4">
            Tuatara musical scale & mode selector
          </footer>
        </PageWrapper>
        <Analytics />
      </body>
    </html>
  );
}
