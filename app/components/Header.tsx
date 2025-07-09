import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.css';
import { useZoom } from './ZoomContext'; // Make sure this path is correct

export const menuData = [
  {
    title: '나눔의행복',
    links: [
      { name: '나눔의행복(특약) 소개', href: '/nanum-special-intro' },
      { name: '나눔의행복(특약) 절차안내', href: '/nanum-special-process' },
      { name: '주의사항', href: '/nanum-special-notice' },
    ],
  },
  {
    title: '보험소개',
    links: [
      { name: '간편검색', href: '/insurance-search-simple' },
      { name: '추천검색', href: '/insurance-search-recommended' },
    ],
  },
  {
    title: '관악사업소',
    links: [
      { name: '사업소장인사말', href: '/branch-greeting' },
      { name: '관악사업소 소개', href: '/branch-intro' },
      { name: '소속FP', href: '/branch-fp' },
      { name: '인재채용', href: '/branch-recruit' },
      { name: '찾아오는길', href: '/branch-location' },
    ],
  },
  {
    title: '커뮤니티',
    links: [
      { name: '공지사항', href: '/community-notice' },
      { name: 'Q&A', href: '/community-qna' },
      { name: 'FAQ', href: '/community-faq' },
      { name: '이벤트', href: '/community-event' },
    ],
  },
];

const Header: NextPage = () => {
  const { zoom, zoomIn, zoomOut } = useZoom();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    // The wrapper div that applied the `transform: scale` has been REMOVED.
    // The component now starts with the main header container.
    <div className={styles.header}>
      <div className={styles.headerTempletPc}>
        <div className={styles.utilityGroup}>
          <button className={styles.iconButton}>
            <Image
              src="/logo.png"
              width={240}
              height={44}
              alt="로고"
              className={styles.utilityGroupChild}
            />
          </button>
        </div>
      </div>

      <div className={styles.headerTempletPc1}>
        <div
          className={styles.mainmenudefault}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <button className={styles.iconButton}>
            <Image
              className={styles.headerMenuAtomicIcon}
              width={52}
              height={52}
              sizes="100vw"
              alt="메뉴"
              src="/menu.svg"
            />
          </button>
          <div className={styles.mainMenuBarAtomicPcParent}>
            {menuData.map(menu => (
              <div
                key={menu.title}
                className={styles.mainMenuBarAtomicPc}
                onMouseEnter={() => setActiveMenu(menu.title)}
              >
                <button className={styles.mainMenuButton}>{menu.title}</button>
              </div>
            ))}
          </div>

          <div className={styles.ggsearchParent}>
            <button className={styles.iconButton}>
              <Image
                className={styles.ggsearchIcon}
                width={30}
                height={30}
                sizes="100vw"
                alt="검색"
                src="/gg_search.svg"
              />
            </button>
            <div className={styles.mainMenuBarAtomicPcGroup}>
              <div className={styles.mainMenuBarAtomicPc4}>
                <input
                  type="text"
                  placeholder="검색어 입력"
                  className={styles.searchInput}
                />
              </div>
              <button className={styles.mainMenuBarAtomicPc5}>
                <span className={styles.mainMenu}>로그아웃</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeMenu && (
        <div className={styles.dropdownPanel}>
          <div className={styles.dropdownContent}>
            {menuData
              .find(menu => menu.title === activeMenu)
              ?.links.map(link => (
                <button
                  key={link.href}
                  className={styles.dropdownLink}
                  onClick={() => (window.location.href = link.href)}
                >
                  {link.name}
                </button>
              ))}
          </div>
        </div>
      )}

      <div className={styles.div2}>
        <div className={styles.div3}>
          <div className={styles.breadcrumb}>
            <button className={styles.breadcrumbAtomic}>
              <div className={styles.iconSize}>
                <div className={styles.iconhome}>
                  <div className={styles.container} />
                  <Image
                    className={styles.vectorIcon}
                    width={12}
                    height={11.9}
                    sizes="100vw"
                    alt="홈"
                    src="/home.svg"
                  />
                </div>
              </div>
              <span className={styles.depth}>홈</span>
            </button>
            <div className={styles.breadcrumbAtomic1}>
              <div className={styles.depth}>나눔의행복</div>
            </div>
            <div className={styles.breadcrumbAtomic2}>
              <div className={styles.depth}>나눔의행복(특약) 소개</div>
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.depth}>{Math.round(zoom * 100)}%</div>
            <button className={styles.iconButton} onClick={zoomIn}>
              <Image
                className={styles.tdesignplusIcon}
                src="/tdesign_plus.svg"
                alt="Zoom In"
                width={24}
                height={24}
              />
            </button>
            <button className={styles.iconButton} onClick={zoomOut}>
              <Image
                className={styles.tdesignplusIcon}
                src="/ic_outline-minus.svg"
                alt="Zoom Out"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;