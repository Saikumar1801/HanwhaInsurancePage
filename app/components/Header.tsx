import type { NextPage } from 'next';
import Image from "next/image";
import styles from './Header.module.css';


const Header:NextPage = () => {
  	return (
    		<div className={styles.header}>
      			<div className={styles.headerTempletPc}>
        				<div className={styles.utilityGroup}>
          					<Image
  src="/logo.png"
  width={240}
  height={44}
  alt=""
  className={styles.utilityGroupChild}
/>
        				</div>
      			</div>
      			<div className={styles.headerTempletPc1}>
        				<div className={styles.mainmenudefault}>
          					<Image className={styles.headerMenuAtomicIcon} width={52} height={52} sizes="100vw" alt="" src="/menu.svg" />
          					<div className={styles.mainMenuBarAtomicPcParent}>
            						<div className={styles.mainMenuBarAtomicPc}>
              							<b className={styles.mainMenu}>나눔의행복</b>
            						</div>
            						<div className={styles.mainMenuBarAtomicPc}>
              							<b className={styles.mainMenu}>보험소개</b>
            						</div>
            						<div className={styles.mainMenuBarAtomicPc}>
              							<b className={styles.mainMenu}>관악사업소</b>
            						</div>
            						<div className={styles.mainMenuBarAtomicPc}>
              							<b className={styles.mainMenu}>커뮤니티</b>
            						</div>
          					</div>
          					<div className={styles.ggsearchParent}>
            						<Image className={styles.ggsearchIcon} width={30} height={30} sizes="100vw" alt="" src="/gg_search.svg" />
            						<div className={styles.mainMenuBarAtomicPcGroup}>
              							<div className={styles.mainMenuBarAtomicPc4}>
                								<div className={styles.mainMenu}>마이페이지</div>
              							</div>
              							<div className={styles.mainMenuBarAtomicPc5}>
                								<div className={styles.mainMenu}>로그아웃</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.div2}>
        				<div className={styles.div3}>
          					<div className={styles.breadcrumb}>
            						<div className={styles.breadcrumbAtomic}>
              							<div className={styles.iconSize}>
                								<div className={styles.iconhome}>
                  									<div className={styles.container} />
                  									<Image className={styles.vectorIcon} width={12} height={11.9} sizes="100vw" alt="" src="/Vector.svg" />
                								</div>
              							</div>
              							<div className={styles.depth}>홈</div>
            						</div>
            						<div className={styles.breadcrumbAtomic1}>
              							<div className={styles.depth}>나눔의행복</div>
            						</div>
            						<div className={styles.breadcrumbAtomic2}>
              							<div className={styles.depth}>나눔의행복(특약) 소개</div>
            						</div>
          					</div>
          					<div className={styles.parent}>
            						<div className={styles.depth}>100%</div>
            						<Image className={styles.tdesignplusIcon} width={24} height={24} sizes="100vw" alt="" src="/tdesign_plus.svg" />
            						<Image className={styles.tdesignplusIcon} width={24} height={24} sizes="100vw" alt="" src="/ic_outline-minus.svg" />
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Header;
