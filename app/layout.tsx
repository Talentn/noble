import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Noble',
  description: 'Description a faire',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider/>
          <ToastProvider />
          {children}
          <SpeedInsights />
          </body>
      </html>
    </ClerkProvider>
  )
}