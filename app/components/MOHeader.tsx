import type { NextPage } from 'next';
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import styles from './MOHeader.module.css';

const MOHeader: NextPage = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  const toggleSubmenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        setIsSubmenuOpen(false);
      }
    };

    if (isSubmenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSubmenuOpen]);

  return (
    <div className={styles.moHeaderParent}>
      <div className={styles.moHeader}>
        <div className={styles.headerMo}>
          <Image className={styles.headerMoChild} width={40} height={40} sizes="100vw" alt="" src="/menu.svg" />
          <div className={styles.headerMoInner}>
            <div className={styles.logoParent}>
              <Image className={styles.logoIcon} width={121.9} height={32} sizes="100vw" alt="" src="/logo.png" />
              <div className={styles.div}>관악사업소</div>
            </div>
          </div>
          <Image className={styles.headerMoItem} width={40} height={40} sizes="100vw" alt="" src="/gg_search.svg" />
        </div>
      </div>

      <div className={styles.div1}>
        <div className={styles.title} onClick={toggleSubmenu}>
          <div className={styles.parent}>
            <div className={styles.div}>나눔의행복</div>
            <div className={styles.iconSize}>
              <div className={styles.iconarrowDown}>
                <div className={styles.container} />
                <Image className={styles.vectorIcon} width={13.3} height={8} sizes="100vw" alt="" src="/Vector.svg" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.title1} ${!isSubmenuOpen ? styles.title1Hidden : ''}`}
          ref={submenuRef}
        >
          <div className={styles.wrapper}>
            <div
              className={`${styles.div} ${activeSubmenu === '소개' ? styles.active : ''}`}
              onClick={() => setActiveSubmenu('소개')}
            >
              나눔의행복(특약) 소개
            </div>
          </div>
          <div
            className={`${styles.div} ${activeSubmenu === '절차안내' ? styles.active : ''}`}
            onClick={() => setActiveSubmenu('절차안내')}
          >
            나눔의행복(특약) 절차안내
          </div>
          <div
            className={`${styles.div} ${activeSubmenu === '주의사항' ? styles.active : ''}`}
            onClick={() => setActiveSubmenu('주의사항')}
          >
            주의사항
          </div>
        </div>
      </div>
    </div>
  );
};

export default MOHeader;
