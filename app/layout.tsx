import type { Metadata } from "next";
import { Fraunces, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "800"],
  style: ["normal", "italic"],
});

const mono = Space_Mono({
  variable: "--font-mono-retro",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Martin's personal web",
  description: "Martin's personal web — skills, projects and contact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
