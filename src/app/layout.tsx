import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { Suspense } from 'react';

import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import { SWRProvider } from '../components/providers/SwrProvider';
import './globals.css';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans'
});

export const metadata: Metadata = {
    title: 'Fabula',
    description: 'Your stories, beautifully crafted.'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <title>Fabula</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
                <Suspense>
                    <Analytics />
                    <SpeedInsights />
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <SWRProvider>{children}</SWRProvider>
                    </ThemeProvider>
                </Suspense>
            </body>
        </html>
    );
}
