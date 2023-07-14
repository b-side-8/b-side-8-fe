'use client';
import Image from 'next/image';
import styles from './card.module.scss';
import Typograph from '../Typograph';
import { useState } from 'react';
const Card = ({ type, size }: { type: 'man' | 'woman'; size: number }) => {
  const [active, setActive] = useState(false);
  const onCardClick = () => {
    setActive((_active) => !_active);
  };
  return (
    <div
      className={active ? styles.activeCardContainer : styles.cardContainer}
      onClick={onCardClick}
    >
      <div className={styles.imageTextWrapper}>
        {type === 'man' ? (
          <Image
            src='/images/man.png'
            alt={'manAvatar'}
            width={size}
            height={size}
          />
        ) : (
          <Image
            src='/images/woman.png'
            alt={'womanAvatar'}
            width={size}
            height={size}
          />
        )}
        <Typograph variant='body1'>이름</Typograph>
      </div>
    </div>
  );
};
export default Card;
