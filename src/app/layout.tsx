import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UNMASK — A Literary Game of Hidden Identity",
  description:
    "Enter the archive. UNMASK is a literary-inspired card experience where stories reveal who we truly are — a secret society of readers, writers, and seekers.",
  keywords: [
    "UNMASK",
    "card game",
    "literary game",
    "hidden identity",
    "storytelling",
    "dark academia",
  ],
  openGraph: {
    title: "UNMASK — A Literary Game of Hidden Identity",
    description:
      "Discover a rare literary artifact hidden inside an old library. Stories, symbols, and revelation await.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
