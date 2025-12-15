import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nolte Küchen Suceava | Bucătării Germane Premium",
  description:
    "Showroom autorizat Nolte Küchen în Suceava, România. Descoperă bucătării germane de excepție - design rafinat, funcționalitate perfectă. Programează o vizită la showroom!",
  keywords: [
    "Nolte Küchen",
    "bucătării germane",
    "Suceava",
    "showroom bucătării",
    "mobilier bucătărie",
    "design bucătărie",
    "bucătării premium",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Nolte Küchen Suceava | Bucătării Germane Premium",
    description: "Showroom autorizat Nolte Küchen în Suceava. Bucătării germane de cea mai înaltă calitate.",
    locale: "ro_RO",
    type: "website",
  },
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
