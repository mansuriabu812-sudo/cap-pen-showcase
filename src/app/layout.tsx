import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CAP Pen Showcase',
  description: 'Professional CAP Pen showcase with 3D viewer and plasma simulator',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark text-white`}>{children}</body>
    </html>
  );
}