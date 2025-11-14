import "./globals.css";
import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lex in Pleno Legal Services - Expert Legal Representation",
  description:
    "Premium legal services by Dr. Umesh Manshore and associates. Expert advocates for criminal, business, family, and civil law.",
  generator: "mohit",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.className} font-sans antialiased`}>
        {/* ✅ Important: attribute="class" makes Tailwind dark: variants work */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
