// app/layout.tsx
import type { Metadata } from 'next';
import ResponsiveHeader from './components/ResponsiveHeader';
import ResponsiveFooter from './components/ResponsiveFooter';
import FloatingNav from './components/FloatingNav';
import './globals.css';

export const metadata: Metadata = {
  title: '한화손해보험',
  description: '...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <body style={{ position: 'relative' }}>
        <ResponsiveHeader />
        <main>{children}</main>
        <ResponsiveFooter />
        <FloatingNav />
      </body>
    </html>
  );
}