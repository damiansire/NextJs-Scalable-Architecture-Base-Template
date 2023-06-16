import Footer from "@/components/layouts/footer/Footer"
import Navbar from "@/components/layouts/navbar/Navbar"
import { Metadata } from 'next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}