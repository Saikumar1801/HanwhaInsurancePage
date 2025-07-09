"use client";
import Content from './components/Content';
import styles from './page.module.css';


export default function FullInsurancePage() {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContainer}>      
        <Content />      
      </main>
    </div>
  );
}

