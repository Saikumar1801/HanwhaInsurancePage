'use client';

import { useEffect, useState } from 'react';
import Footer from './Footer';        // Desktop Footer
import FooterMo from './FooterMo';    // Mobile Footer

const ResponsiveFooter = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // to avoid hydration mismatch

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Define breakpoint
    };

    setHasMounted(true);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  if (!hasMounted) return null;

  return isMobile ? <FooterMo /> : <Footer />;
};

export default ResponsiveFooter;
