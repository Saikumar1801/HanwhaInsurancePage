'use client';

import { useState } from 'react';
import Image from "next/image";
import styles from './Content.module.css';
import ApplicationModal from './ApplicationModal';

const Content = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const TABS = [
    {
      label: '관공서 공무원 기부',
      images: [
        { src: 'tab1/1.png', width: 968, height: 1197.3 },
        { src: 'tab1/2.png', width: 968, height: 1264.5 },
        { src: 'tab1/3.png', width: 968, height: 1231.8 },
        { src: 'tab1/4.png', width: 968, height: 1318 }
      ]
    },
    {
      label: '관공서 국민 기부',
      images: [
        { src: 'tab2/1.png', width: 968, height: 1197.3 },
        { src: 'tab2/2.png', width: 968, height: 1264.5 },
        { src: 'tab2/3.png', width: 968, height: 1231.8 },
        { src: 'tab2/4.png', width: 968, height: 1318 }
      ]
    },
    {
      label: '종교단체 기부보험',
      images: [
        { src: 'tab3/1.png', width: 968, height: 1197.3 },
        { src: 'tab3/2.png', width: 968, height: 1264.5 },
        { src: 'tab3/3.png', width: 968, height: 1231.8 },
        { src: 'tab3/4.png', width: 968, height: 1318 }
      ]
    },
    {
      label: '종교단체와 종교인 기부보험',
      images: [
        { src: 'tab4/1.png', width: 968, height: 1197.3 },
        { src: 'tab4/2.png', width: 968, height: 1264.5 },
        { src: 'tab4/3.png', width: 968, height: 1231.8 },
        { src: 'tab4/4.png', width: 968, height: 1318 }
      ]
    }
  ];

  return (
    <div className={styles.content}>
      {/* Application Modal */}
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className={styles.frameParent}>
        <div className={styles.titleParent}>
          <div className={styles.title}>
            <div className={styles.div}>나눔의행복(특약) 소개</div>
          </div>
          <Image 
            className={styles.icon} 
            width={1000} 
            height={218} 
            sizes="100vw" 
            alt="나눔의행복 헤로 이미지" 
            src="/Hero.png" 
            priority
          />
        </div>
        
        <Image 
          className={styles.image1799Icon} 
          width={1000} 
          height={976} 
          sizes="100vw" 
          alt="상품 정보 이미지" 
          src="/ProductInfo.png" 
        />
        
        {/* Contact Section */}
        <div className={styles.parent}>
          <div className={styles.div1}>
            {/* ==================== START: REPLACEMENT ==================== */}
            {/* The old detailed structure is replaced by this single Image component. */}
            {/* Make sure to use the correct src, width, and height for your image. */}
            <Image
              className={styles.contactInfoImage}
              width={578} // Replace with your image's actual width
              height={80} // Replace with your image's actual height
              sizes="(max-width: 768px) 60vw, 40vw"
              alt="한화손해보험 관악사업소 연락처 정보"
              src="/1Contactlayer.png" // Replace with your image's path
            />
            {/* ===================== END: REPLACEMENT ===================== */}
            
            <div className={styles.frame}>
              <div 
                className={styles.div}
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: 'pointer' }}
              >
                <span>
                  <span>{`「나눔의 행복」 `}</span>
                  <span className={styles.span}>{`가입신청  `}</span>
                </span>
                <span className={styles.span}>
                  <span>{`>`}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className={styles.tab}>
          {TABS.map((tab, index) => (
            <div 
              key={index}
              className={index === activeTab ? styles.wrapper2 : styles.wrapper3}
              onClick={() => setActiveTab(index)}
            >
              <div className={styles.div}>{tab.label}</div>
            </div>
          ))}
        </div>
        
        {/* Tab Content - Images */}
        <div className={styles.image1795Parent}>
          {TABS[activeTab].images.map((img, i) => (
            <Image
              key={i}
              className={styles.icon}
              width={img.width}
              height={img.height}
              sizes="100vw"
              alt={`${TABS[activeTab].label} 설명 이미지 ${i+1}`}
              src={`/${img.src}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
