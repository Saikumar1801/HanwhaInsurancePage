'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from './FloatingNav.module.css';

const FloatingNav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Always show on desktop
      if (window.innerWidth > 768) setIsVisible(true);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Floating Toggle Button (Mobile Only) */}
      {isMobile && (
        <button 
          className={styles.floatingButton}
          onClick={() => setIsVisible(!isVisible)}
          aria-label={isVisible ? "Close navigation" : "Open navigation"}
        >
          <Image 
            src={isVisible ? "/close-icon.svg" : "/menu-icon.svg"} 
            width={24} 
            height={24} 
            alt="Toggle navigation"
          />
        </button>
      )}

      {/* Floating Navigation */}
      <div className={`${styles.floatingNavContainer} ${isMobile ? styles.mobile : ''} ${!isVisible && isMobile ? styles.hidden : ''}`}>
        {isMobile && (
          <button 
            className={styles.closeButton}
            onClick={() => setIsVisible(false)}
            aria-label="Close navigation"
          >
            <Image 
              src="/close-icon.svg" 
              width={20} 
              height={20} 
              alt="Close"
            />
          </button>
        )}
        
        <div className={styles.floatingNavContent}>
          <div className={styles.navItems}>
            <a href="#" className={styles.navItem}>
              <Image className={styles.icon} width={24.2} height={22.3} alt="Kakao" src="/Group_316.svg" />
              <span className={styles.label}>카톡 상담</span>
            </a>
            <a href="tel:0233957180" className={styles.navItem}>
              <Image className={styles.icon} width={24} height={24} alt="Phone" src="/Call.svg" />
              <span className={styles.label}>전화 상담</span>
            </a>
            <a href="mailto:tobego@naver.com" className={styles.navItem}>
              <Image className={styles.icon} width={24} height={24} alt="Email" src="/email.svg" />
              <span className={styles.label}>메일 상담</span>
            </a>
          </div>
          <div className={styles.divider} />
          <a href="#" className={styles.yesecoLink}>
            <div className={styles.yesecoContent}>
              <div className={styles.logoWrapper}>
                <Image className={styles.logo} width={61.6} height={13.8} alt="YESECO" src="/YESECO_logo.png" />
              </div>
              <div className={styles.linkText}>바로가기</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingNav;