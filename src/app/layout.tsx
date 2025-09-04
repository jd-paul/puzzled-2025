import type { Metadata } from "next";
import { Young_Serif, Caprasimo, Work_Sans } from "next/font/google";
import "./globals.css";

// Serif / vintage headers
const youngSerif = Young_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

const caprasimo = Caprasimo({
  variable: "--font-caprasimo",
  subsets: ["latin"],
  weight: "400",
});

// Body sans
const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Puzzled 2025",
  description: "Vintage puzzle fest website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${youngSerif.variable} ${caprasimo.variable} ${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
