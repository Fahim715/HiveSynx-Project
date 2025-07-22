

import { type Metadata } from 'next'
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Geist } from 'next/font/google'
import './globals.css'
import {ThemeProvider} from "@/components/providers/theme-provider";
import { cn } from '@/lib/utils';




const font = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: 'HiveSync - Collaborative Workspace',
  description: 'Modern team collaboration platform with real-time communication',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "bg-[#f4f1de] dark:bg-[#232323]")}>
          <ThemeProvider 
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="hivesynx-theme"
          >
          <div className="min-h-screen">
            
            
            <main className="flex-1">{children}</main>
            
          </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}