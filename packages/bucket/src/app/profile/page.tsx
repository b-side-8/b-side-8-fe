'use client';

import Image from 'next/image';
import styles from './profile.module.scss';
import Typograph from '@/components/Typograph';
import { useState } from 'react';
import ProfileImageSelector from '@/components/ProfileImageSelector';

export default function Profile() {
  const [profileImage, setProfileImage] = useState<string>(
    '/images/profile_default.png',
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className={styles.profileImage}>
        <div className={styles.imageWrapper}>
          <Image src={profileImage} alt={'default'} width={100} height={100} />
          <button
            onClick={() => {
              setIsModalOpen(_isOpen => !_isOpen);
            }}
            className={styles.imageChageButton}
          >
            <Image src="/images/round.png" alt="round" width={32} height={32} />
          </button>
        </div>
      </div>
      <div className={styles.menuWrapper}>
        <div className={styles.menuItem}>
          <Typograph variant="body2">닉네임</Typograph>
          <Typograph variant="body3">김아름</Typograph>
        </div>
        <div className={styles.menuItem}>
          <Typograph variant="body2">성별</Typograph>
          <Typograph variant="body3">여성</Typograph>
        </div>
        <div className={styles.menuItem}>
          <Typograph variant="body2">출생연도</Typograph>
          <Typograph variant="body3">1995.06.26</Typograph>
        </div>
      </div>
      {/* {!isModalOpen && <ProfileImageSelector />} */}
    </div>
  );
}
