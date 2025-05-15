import type React from "react"
import { LanguageProvider } from "@/lib/language-context"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import RootLayoutContent from "./root-layout-content"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased", inter.className)}>
        <LanguageProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'


