import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard - HackSkye 2.0",
  description: "Admin dashboard for HackSkye 2.0 hackathon registrations",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen bg-gray-50">{children}</div>
}
