// app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import ResponsiveHeader from './components/ResponsiveHeader';
import ResponsiveFooter from './components/ResponsiveFooter';
import FloatingNav from './components/FloatingNav';
import { ZoomProvider } from './components/ZoomContext'; // adjust the path if needed

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
        <ZoomProvider>
          <ResponsiveHeader />
          <main>{children}</main>
          <ResponsiveFooter />
          <FloatingNav />
        </ZoomProvider>
      </body>
    </html>
  );
}
