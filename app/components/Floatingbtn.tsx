'use client';
// components/FloatingBtn.tsx
import { useState } from 'react';
import Image from "next/image";
import styles from './FloatingBtn.module.css';
import FloatingNav from './FloatingNav';

const FloatingBtn = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <div className={styles.floatingBtn} onClick={toggleNav}>
        <Image 
          className={styles.floatingBtnIcon} 
          width={40} 
          height={40} 
          alt="Menu" 
          src="/floating-btn-icon.svg" // Replace with your icon
        />
      </div>
      {isNavVisible && (
        <div className={styles.mobileNavContainer}>
          <FloatingNav />
          <div className={styles.overlay} onClick={toggleNav}></div>
        </div>
      )}
    </>
  );
};

export default FloatingBtn;