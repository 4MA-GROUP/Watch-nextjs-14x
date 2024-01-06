import './globals.css'
{/*import Providers from './components/Provider'*/}
import ToasterContext from '@/context/ToasterContext'
import type { Metadata } from 'next'
import Providers from '@/components/Provider';
export const metadata: Metadata = {
  title: 'Watch',
  description: '...',
}

import { getCurrentUser } from '@/actions/getCurrentUser'
import Navbar from '@/components/nav/Navbar'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body>
        <Providers>
          <ToasterContext />
            <Navbar />
          {children}
          </Providers>
        </body>
    </html>
  )
}
