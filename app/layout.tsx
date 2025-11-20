import "./globals.css";
import type { Metadata } from "next";
import type React from "react";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lex in Pleno Legal Services - Expert Legal Representation",
  description:
    "Premium legal services by Dr. Umesh Manshore and associates. Expert advocates for criminal, business, family, and civil law.",
  generator: "mohit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
