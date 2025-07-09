'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from './FloatingNav.module.css';

const FloatingNav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Always expanded on desktop
      if (!mobile) setIsExpanded(true);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${styles.floatingNav} ${isExpanded ? styles.expanded : ''}`}>
      {/* Mobile Handle Button */}
      {isMobile && !isExpanded && (
        <button 
          className={styles.handleButton}
          onClick={() => setIsExpanded(true)}
          aria-label="Open navigation"
        >
          <Image 
            src="/Vector.svg" 
            width={24} 
            height={24} 
            alt="Menu"
          />
        </button>
      )}

      <div className={styles.contentWrapper}>
        {/* Mobile Close Button */}
        {isMobile && isExpanded && (
          <button 
            className={styles.closeButton}
            onClick={() => setIsExpanded(false)}
            aria-label="Close navigation"
          >
            <Image 
              src="/close.svg" 
              width={20} 
              height={20} 
              alt="Close"
            />
          </button>
        )}
        
        {/* Navigation Items */}
        <div className={styles.navItems}>
          <a href="#" className={styles.navItem}>
            <Image width={24.2} height={22.3} alt="Kakao" src="/Group_316.svg" />
            <span>카톡 상담</span>
          </a>
          <a href="tel:0233957180" className={styles.navItem}>
            <Image width={24} height={24} alt="Phone" src="/Call.svg" />
            <span>전화 상담</span>
          </a>
          <a href="mailto:tobego@naver.com" className={styles.navItem}>
            <Image width={24} height={24} alt="Email" src="/email.svg" />
            <span>메일 상담</span>
          </a>
        </div>
        
        <div className={styles.divider} />
        
        <a href="#" className={styles.navItem}>
          <div className={styles.logoWrapper}>
            <Image width={61.6} height={13.8} alt="YESECO" src="/YESECO_logo.png" />
          </div>
          <span>바로가기</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingNav;