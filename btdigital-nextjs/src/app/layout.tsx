import "./globals.css";
import type { Metadata } from "next";
import {  Raleway } from "next/font/google";
import { ClientThemeProvider } from "@/components/providers/ClientThemeProvider";

import Header from "@/components/Header";
import Footer from "@/components/Footer";


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "B&T Digital",
  description: "B&T Digital is a technology service provider offering software engineering, data science and support services.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

/**
 * Functional Requirements:
 * - Provide the global HTML scaffold, fonts, and hydration-safe attributes for every page.
 * - Wrap all routes with the ClientThemeProvider to ensure consistent theming defaults.
 * - Render persistent site furniture (Header, Footer) around the routed page content.
 * - Enforce a light-first experience while keeping responsiveness and accessibility intact.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.variable} antialiased`}
      >
        <ClientThemeProvider defaultTheme="light">
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
    
  );
}
