import type React from "react"
import type { Metadata } from "next"
import { Inter, Rubik } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const rubik = Rubik({ subsets: ["latin"], weight: ["700"], variable: "--font-rubik" })

export const metadata: Metadata = {
  title: "APJESC - Associação de Peritos Judiciais do Estado de Santa Catarina",
  description:
    "Somos uma associação que nasceu com intuito de representar e valorizar o ofício do perito catarinense de maneira igualitária e apartidária em todas as suas atuações e em caráter especial, junto ao poder judiciário e as outras entidades que necessitem de serviços profissionais nas áreas específicas de cada associado.",
  keywords: "Advogados, Associação de Peritos Judiciais, Santa Catarina",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${rubik.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
