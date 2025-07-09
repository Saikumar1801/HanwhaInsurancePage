import type { NextPage } from 'next';
import styles from './MOFooter.module.css';

const MOFooter: NextPage = () => {
  return (
    <div className={styles.footerMo}>
      <div className={styles.content1}>
        <div className={styles.columns1}>
          <div className={styles.contents}>
            <a className={styles.a} href="https://www.hanwhadirect.com/" target="_blank">한화다이렉트</a>
          </div>
          <div className={styles.contents}>
            <div className={styles.div}>상담신청</div>
          </div>
          <div className={styles.contents}>
            <a className={styles.a} href="https://m.hwgeneralins.com/app.do" target="_blank">APP다운</a>
          </div>
          <div className={styles.contents}>
            <div className={styles.div}>PC버전</div>
          </div>
        </div>
        <div className={styles.columns11}>
          <div className={styles.div20}>
            <div className={styles.contents4}>
              <div className={styles.div}>개인정보처리방침</div>
            </div>
            <div className={styles.contents5}>
              <div className={styles.div}>신용정보활용체제</div>
            </div>
          </div>
          <div className={styles.copyright}>
            <div className={styles.div}>
              <span>고객상담센터</span>
              <span className={styles.span2}>{` `}</span>
              <span className={styles.span3}>02-3395-7180</span>
            </div>
          </div>
          <div className={styles.parent5}>
            <div className={styles.div24}>
              <div className={styles.contents6}>
                <div className={styles.div}>한화손해보험 주식회사 대표이사 나채범</div>
              </div>
              <div className={styles.div26}>|</div>
              <div className={styles.contents6}>
                <div className={styles.div}>사업자등록번호 116-81-46445</div>
              </div>
              <div className={styles.div26}>|</div>
              <div className={styles.contents6}>
                <div className={styles.div}>서울시 관악구 남부순환로 1796, 10층(삼호빌딩)</div>
              </div>
            </div>
            <div className={styles.copyright1}>
              <div className={styles.div}>HANWHA GENERAL INSURANCE CO.,LTD. ALL RIGHTS RESERVED.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MOFooter;