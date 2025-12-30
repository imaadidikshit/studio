import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

const fontHeading = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const fontBody = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nebula AI | Next-Gen Data Simulation',
  description: 'The future of AI-powered data simulation and analysis.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "min-h-screen bg-background font-body antialiased",
        fontHeading.variable,
        fontBody.variable
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}