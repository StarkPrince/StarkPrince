import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nyas Project',
  description: 'Work done in Nyas Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
{
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
