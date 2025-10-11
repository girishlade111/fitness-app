import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FitTrack Pro",
  description: "Your personal fitness companion",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
