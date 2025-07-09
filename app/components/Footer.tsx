import type { NextPage } from 'next';
import Image from "next/image";
import styles from './Footer.module.css';


const Footer:NextPage = () => {
  	return (
    		<div className={styles.footer}>
      			<div className={styles.columns1}>
        				<div className={styles.div}>
          					<div className={styles.contentsParent}>
            						<div className={styles.hanwhaGeneralInsurance}>대표전화</div>
            						<div className={styles.contents}>
              							<div className={styles.hanwhaGeneralInsurance}>02-3395-7180</div>
            						</div>
          					</div>
          					<div className={styles.div4}>|</div>
          					<div className={styles.contentsParent}>
            						<div className={styles.hanwhaGeneralInsurance}>다이렉트</div>
            						<div className={styles.contents}>
              							<div className={styles.hanwhaGeneralInsurance}>1588-8282</div>
            						</div>
          					</div>
          					<div className={styles.div4}>|</div>
          					<div className={styles.contentsParent}>
            						<div className={styles.hanwhaGeneralInsurance}>해외문의</div>
            						<div className={styles.contents}>
              							<div className={styles.hanwhaGeneralInsurance}>82-2-316-7000</div>
            						</div>
          					</div>
          					<div className={styles.div4}>|</div>
          					<div className={styles.contentsParent}>
            						<div className={styles.hanwhaGeneralInsurance}>무료상담</div>
            						<div className={styles.contents}>
              							<div className={styles.hanwhaGeneralInsurance}>080-236-7000</div>
            						</div>
          					</div>
          					<div className={styles.div4}>|</div>
          					<div className={styles.contentsParent}>
            						<div className={styles.hanwhaGeneralInsurance}>말로거는전화 1641(누르고)</div>
            						<div className={styles.contents}>
              							<div className={styles.hanwhaGeneralInsurance}>한화손해보험</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.contentsParent}>
          					<div className={styles.contents5}>
            						<div className={styles.hanwhaGeneralInsurance}>상품공시</div>
          					</div>
          					<div className={styles.contents5}>
            						<div className={styles.hanwhaGeneralInsurance}>가격공시</div>
          					</div>
          					<div className={styles.contents5}>
            						<div className={styles.hanwhaGeneralInsurance}>개인정보처리방침</div>
          					</div>
          					<div className={styles.contents5}>
            						<div className={styles.hanwhaGeneralInsurance}>보호금융상품등록부</div>
          					</div>
          					<div className={styles.contents5}>
            						<div className={styles.hanwhaGeneralInsurance}>서비스이용약관</div>
          					</div>
        				</div>
        				<div className={styles.div26}>
          					<div className={styles.contentsParent}>
            						<div className={styles.contents}>
              							<div className={styles.hanwhaGeneralInsurance}>한화손해보험 주식회사 대표이사 나채범</div>
            						</div>
            						<div className={styles.div4}>|</div>
            						<div className={styles.contents}>
              							<div className={styles.hanwhaGeneralInsurance}>사업자등록번호 116-81-46445</div>
            						</div>
            						<div className={styles.div4}>|</div>
            						<div className={styles.contents}>
              							<div className={styles.hanwhaGeneralInsurance}>서울시 영등포구 여의대로 56 (여의도동 23-5)</div>
            						</div>
          					</div>
          					<div className={styles.contentsParent}>
            						<div className={styles.contents}>
              							<div className={styles.hanwhaGeneralInsurance}>한화손해보험 관악사업소 : 사업소장 정태영</div>
            						</div>
            						<div className={styles.div4}>|</div>
            						<div className={styles.contents}>
              							<div className={styles.hanwhaGeneralInsurance}>관악사업소 주소 : 서울시 관악구 남부순환로 1796, 10층(삼호빌딩)</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameParent}>
          					<div className={styles.image27Parent}>
            						<Image className={styles.image27Icon} width={31} height={35} sizes="100vw" alt="" src="/logos/1.png" />
            						<Image className={styles.image28Icon} width={35} height={35} sizes="100vw" alt="" src="/logos/2.png" />
            						<Image className={styles.image29Icon} width={34} height={35} sizes="100vw" alt="" src="/logos/3.png" />
            						<Image className={styles.image29Icon} width={34} height={35} sizes="100vw" alt="" src="/logos/4.png" />
            						<Image className={styles.image31Icon} width={40} height={35} sizes="100vw" alt="" src="/logos/5.png" />
            						<Image className={styles.image32Icon} width={46} height={35} sizes="100vw" alt="" src="/logos/6.png" />
          					</div>
          					<div className={styles.groupWrapper}>
            						<div className={styles.image26Parent}>
              							<Image className={styles.image26Icon} width={144} height={35} sizes="100vw" alt="" src="/Flogo.png" />
              							<div className={styles.div35}>관악사업소</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.contents}>
          					<div className={styles.hanwhaGeneralInsurance}>HANWHA GENERAL INSURANCE CO.,LTD. ALL RIGHTS RESERVED.</div>
        				</div>
      			</div>
    		</div>);
};

export default Footer;
