import Provider from '@/util/providers'
import { Inter_Tight } from '@next/font/google'
import type { Metadata } from 'next'
import './globals.scss'

const interTight = Inter_Tight({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'FocalPoint',
  description: 'Teste legaplan',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={interTight.className}>
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  )
}
