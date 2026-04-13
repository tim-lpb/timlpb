import type { Metadata } from "next";
import Header from "@/components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://timlpb.com"),
  title: {
    default: "timlpb",
    template: "%s | timlpb",
  },
  description: "Software engineer and researcher with a passion for learning new things. Currently studying Biology at University of Bonn.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [
    {
      name: "Tim Bernards",
      url: "https://github.com/tim-lpb",
    },],
  openGraph: {
    type: "website",
    siteName: "timlpb",
    url: "/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />

        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
