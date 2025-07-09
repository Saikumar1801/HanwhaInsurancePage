import './globals.css';
import type { Metadata } from 'next';
import AppContainer from './components/AppContainer'; // Import our new component

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
        {/*
          We replace the list of components with our single AppContainer.
          It handles the header, footer, and zoom logic internally.
        */}
        <AppContainer>{children}</AppContainer>
      </body>
    </html>
  );
}