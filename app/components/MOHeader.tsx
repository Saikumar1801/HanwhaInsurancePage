'use client';

import type { NextPage } from 'next';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import styles from './MOHeader.module.css';

const MOHeader: NextPage = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const submenuItems = [
    { id: '소개', name: '나눔의행복(특약) 소개', path: '/' },
    { id: '절차안내', name: '나눔의행복(특약) 절차안내', path: '/process' },
    { id: '주의사항', name: '주의사항', path: '/caution' }
  ];

  const getActiveSubmenu = () => {
    const activeItem = submenuItems.find(item => pathname.startsWith(item.path));
    return activeItem ? activeItem.id : null;
  };

  const activeSubmenu = getActiveSubmenu();
  const toggleSubmenu = () => setIsSubmenuOpen(prev => !prev);

  const handleSubmenuClick = (path: string) => {
    setIsSubmenuOpen(false);
    router.push(path);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node) &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsSubmenuOpen(false);
      }
    };

    // Check if document.body exists before manipulating it
    const body = document.body;

    if (isSubmenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      if (body) {
        body.style.overflow = 'hidden'; // Safe manipulation
      }
    } else {
      if (body) {
        body.style.overflow = 'auto'; // Safe manipulation
      }
    }

    // The cleanup function
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Also add the safety check in the cleanup function
      if (body) {
        body.style.overflow = 'auto';
      }
    };
  }, [isSubmenuOpen]);

  return (
    <div
      className={`${styles.moHeaderParent} ${isSubmenuOpen ? styles.headerShadow : ''}`}
      ref={headerRef}
    >
      {isSubmenuOpen && <div className={styles.overlay} />}

      <div className={styles.headerContainer}>
        <div className={styles.moHeader}>
          <div className={styles.headerMo}>
            <Image
              className={styles.headerMoChild}
              width={40}
              height={40}
              sizes="100vw"
              alt="Menu"
              src="/menu.svg"
            />
            <div className={styles.headerMoInner}>
              <div className={styles.logoParent}>
                <Image
                  className={styles.logoIcon}
                  width={121.9}
                  height={32}
                  sizes="100vw"
                  alt="Logo"
                  src="/Mlogo.png"
                />
                <div className={styles.div}>관악사업소</div>
              </div>
            </div>
            <Image
              className={styles.headerMoItem}
              width={40}
              height={40}
              sizes="100vw"
              alt="Search"
              src="/gg_search.svg"
            />
          </div>
        </div>

        <div className={styles.div1}>
          <div className={styles.title} onClick={toggleSubmenu}>
            <div className={styles.parent}>
              <div className={styles.div}>나눔의행복</div>
              <div className={styles.iconSize}>
                <div className={styles.iconarrowDown}>
                  <div className={styles.container} />
                  <Image
                    className={`${styles.vectorIcon} ${isSubmenuOpen ? styles.rotate : ''}`}
                    width={13.3}
                    height={8}
                    sizes="100vw"
                    alt="Arrow"
                    src="/Vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.title1} ${!isSubmenuOpen ? styles.title1Hidden : ''}`}
            ref={submenuRef}
          >
            {submenuItems.map(item => (
              <div
                key={item.id}
                className={`${styles.div} ${activeSubmenu === item.id ? styles.active : ''}`}
                onClick={() => handleSubmenuClick(item.path)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MOHeader;