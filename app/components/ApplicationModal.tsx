// app/components/ApplicationModal.tsx
import React from 'react';
import styles from './ApplicationModal.module.css';

type ApplicationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FormField = ({ label, placeholder, fullWidth = false }: { 
  label: string, 
  placeholder: string, 
  fullWidth?: boolean 
}) => (
  <div className={`${styles.formField} ${fullWidth ? styles.fullWidth : ''}`}>
    <label htmlFor={label}>{label}</label>
    <input type="text" id={label} name={label} placeholder={placeholder} />
  </div>
);

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  if (!isOpen) return null;

  const handleModalContentClick = (e: React.MouseEvent) => e.stopPropagation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('상담 신청이 접수되었습니다.');
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={handleModalContentClick}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <header className={styles.header}>
          <h2>(단체) 나눔의행복 가입 신청</h2>
          <p>한화손해보험 관악사업소 귀중</p>
        </header>
        
        <div className={styles.introBox}>
          <p>다음세대의 미래를 위한 투자, 나눔의행복에 가입해주셔서 감사합니다.<br/>
          아래의 내용을 입력해 주시면, 담당자가 신속하게 가입상담을 진행해드리겠습니다.</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formContent}>
            <FormField label="단체명" placeholder="단체명을 입력해주세요." fullWidth />
            
            <div className={styles.formGrid}>
              <FormField label="단체장명" placeholder="단체장명을 입력해주세요." />
              <FormField label="대표 연락처" placeholder="대표 연락처를 입력해주세요." />
            </div>

            <FormField label="주소" placeholder="주소를 입력해주세요." fullWidth />

            <div className={styles.formGrid}>
              <FormField label="담당자명" placeholder="담당자명을 입력해주세요." />
              <FormField label="담당자 연락처" placeholder="담당자 연락처를 입력해주세요." />
            </div>

            <div className={`${styles.formField} ${styles.fullWidth}`}>
              <label>사업자등록증</label>
              <div className={styles.fileUploadWrapper}>
                <input type="text" placeholder="파일을 첨부해주세요." readOnly />
                <label htmlFor="file-upload" className={styles.fileUploadButton}>첨부</label>
                <input id="file-upload" type="file" style={{ display: 'none' }} />
              </div>
            </div>
            
            <div className={styles.checkboxWrapper}>
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">
                접수내용 확인후, 전문상담사가 나눔의행복 가입을 안내드립니다.
                <br/>
                접수된 정보가 상담을 위해 제공되는 것에 동의합니다. <span className={styles.required}>(필수)</span>
              </label>
            </div>
          </div>
          
          <button type="submit" className={styles.submitButton}>상담 신청하기</button>
        </form>
      </div>
    </div>
  );
}