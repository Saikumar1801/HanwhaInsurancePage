'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ZoomContextType = {
  zoom: number;
  zoomIn: () => void;
  zoomOut: () => void;
};

const ZoomContext = createContext<ZoomContextType | undefined>(undefined);

export const ZoomProvider = ({ children }: { children: ReactNode }) => {
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom(z => Math.min(z + 0.1, 2));
  const zoomOut = () => setZoom(z => Math.max(z - 0.1, 0.5));

  return (
    <ZoomContext.Provider value={{ zoom, zoomIn, zoomOut }}>
      {children}
    </ZoomContext.Provider>
  );
};

export const useZoom = () => {
  const context = useContext(ZoomContext);
  if (!context) throw new Error('useZoom must be used within ZoomProvider');
  return context;
};
