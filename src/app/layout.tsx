import { cn } from '@/lib/utils'
import { Inter as FontSans } from "next/font/google"

import '../styles/globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}><ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
          {children}
        </ThemeProvider></body>
    </html>
  )
}
