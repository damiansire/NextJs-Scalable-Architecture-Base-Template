import { Metadata } from "next"

export default function Page() {
  return <h1>Hello, Dashboard Page!</h1>
}

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Welcome to Next.js',
}