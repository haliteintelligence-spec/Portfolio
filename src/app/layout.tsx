import type { Metadata } from "next";
import { Lato, Questrial, Quattrocento_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400",
});

const quattrocento = Quattrocento_Sans({
  variable: "--font-quattrocento",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const mayfest = localFont({
  src: "./fonts/Mayfest-Regular.ttf",
  variable: "--font-mayfest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marie K. Ozenua — Procurement Strategist & AI Builder",
  description:
    "Portfolio of Marie K. Ozenua — procurement strategist, operations leader, and founder building at the intersection of AI and inclusive beauty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${mayfest.variable} ${questrial.variable} ${quattrocento.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
