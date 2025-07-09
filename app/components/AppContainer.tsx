'use client';

import { ReactNode } from 'react';
import { ZoomProvider, useZoom } from './ZoomContext';
import ResponsiveHeader from './ResponsiveHeader';
import ResponsiveFooter from './ResponsiveFooter';
import FloatingNav from './FloatingNav';

function ZoomableLayout({ children }: { children: ReactNode }) {
  const { zoom } = useZoom();

  return (
    // Use a React Fragment <> to return multiple elements at the root level
    <>
      {/* This div contains everything that SHOULD be zoomed */}
      <div
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: 'top left',
          width: `${100 / zoom}%`,
          height: `${100 / zoom}%`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <ResponsiveHeader />
        <main>{children}</main>
        <ResponsiveFooter />
        {/* FloatingNav has been MOVED FROM HERE... */}
      </div>

      {/* ...TO HERE. It is now a sibling to the scaled div. */}
      {/* This component will not be affected by the zoom and will float correctly. */}
      <FloatingNav />
    </>
  );
}

// This parent component does not need to change.
export default function AppContainer({ children }: { children: ReactNode }) {
  return (
    <ZoomProvider>
      <ZoomableLayout>{children}</ZoomableLayout>
    </ZoomProvider>
  );
}