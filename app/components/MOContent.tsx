'use client';

// No need to import NextPage or FC for a standard component
import { useState } from 'react';
import Image from "next/image";
import styles from './MOContent.module.css';

// Remove the `: NextPage` type annotation. It's not needed.
const MOContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const TABS = [
    {
      label: '관공서 공무원 기부',
      images: [
        { src: 'tab1/1.png', width: 317.5, height: 392.7 },
        { src: 'tab1/2.png', width: 317.5, height: 414.8 },
        { src: 'tab1/3.png', width: 317.5, height: 414.8 },
        { src: 'tab1/4.png', width: 317.5, height: 404 }
      ]
    },
    {
      label: '관공서 국민 기부',
      images: [
        { src: 'tab2/1.png', width: 317.5, height: 392.7 },
        { src: 'tab2/2.png', width: 317.5, height: 414.8 },
        { src: 'tab2/3.png', width: 317.5, height: 414.8 },
        { src: 'tab2/4.png', width: 317.5, height: 404 }
      ]
    },
    {
      label: '종교단체 기부보험',
      images: [
        { src: 'tab3/1.png', width: 317.5, height: 392.7 },
        { src: 'tab3/2.png', width: 317.5, height: 414.8 },
        { src: 'tab3/3.png', width: 317.5, height: 414.8 },
        { src: 'tab3/4.png', width: 317.5, height: 404 }
      ]
    },
    {
      label: '종교단체와 종교인 기부보험',
      images: [
        { src: 'tab4/1.png', width: 317.5, height: 392.7 },
        { src: 'tab4/2.png', width: 317.5, height: 414.8 },
        { src: 'tab4/3.png', width: 317.5, height: 414.8 },
        { src: 'tab4/4.png', width: 317.5, height: 404 }
      ]
    }
  ];

  return (
    <div className={styles.content}>
      <div className={styles.frameParent}>
        {/* Title and Hero Image */}
        <div className={styles.titleParent}>
          <div className={styles.title}>
            <div className={styles.div}>나눔의행복(특약) 소개</div>
          </div>
          <Image 
            className={styles.heroImage} 
            width={328} 
            height={71.5} 
            sizes="100vw" 
            alt="Hero" 
            src="/Frame_2085667387.png" 
          />
        </div>
        
        {/* Product Info Image */}
        <Image 
          className={styles.productInfoImage} 
          width={328} 
          height={320.1} 
          sizes="100vw" 
          alt="Product Info" 
          src="/image_1799.png" 
        />
        
        {/* Contact Section */}
        <div className={styles.contactSection}>
          <div className={styles.contactContainer}>
            <div className={styles.contactContent}>
              <Image 
                className={styles.contactIcon} 
                width={39.2} 
                height={32.8} 
                sizes="100vw" 
                alt="Contact" 
                src="/AdobeStock_511441298-removebg-preview_1.png" 
              />
              <div className={styles.contactDetails}>
                <div className={styles.contactTitle}>한화손해보험 관악사업소</div>
                <div className={styles.contactInfo}>담당자 : 정태영 소장</div>
                <div className={styles.contactInfoHighlight}>
                  연락처 02-3395-7180 / 이메일 tobego@naver.com
                </div>
              </div>
            </div>
            <div className={styles.applyButton}>
              <div className={styles.applyText}>
                <span>{`「나눔의 행복」 `}</span>
                <span className={styles.highlightText}>{`가입신청  `}</span>
                <span className={styles.highlightText}>{`>`}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className={styles.tabContainer}>
          {TABS.map((tab, index) => (
            <div 
              key={index}
              className={`${styles.tabItem} ${index === activeTab ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <div className={styles.tabLabel}>{tab.label}</div>
            </div>
          ))}
        </div>
        
        {/* Tab Content - Images */}
        <div className={styles.tabContent}>
          {TABS[activeTab].images.map((img, i) => (
            <Image
              key={i}
              className={styles.tabImage}
              width={img.width}
              height={img.height}
              sizes="100vw"
              alt={`Content ${i+1}`}
              src={`/${img.src}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MOContent;