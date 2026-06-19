import type { Metadata } from "next";
import { Lobster, Lato } from "next/font/google";
import "./globals.css";

const lobster = Lobster({ weight: "400", subsets: ["latin"], variable: "--font-lobster" });
const lato    = Lato(   { weight: ["400", "700"], subsets: ["latin"], variable: "--font-lato" });

export const metadata: Metadata = {
  title: "Mama's Guesthouse & Cafe — Langkawi",
  description: "A cafe and guesthouse in the village heart of Langkawi, Malaysia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lobster.variable} ${lato.variable}`} data-btn="pill" data-text-fx="tropical-drop">
        {children}
      </body>
    </html>
  );
}
