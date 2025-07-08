'use client';

import { useEffect, useState } from 'react';
import Header from './Header';
import MOHeader from './MOHeader';

const ResponsiveHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MOHeader /> : <Header />;
};

export default ResponsiveHeader;
