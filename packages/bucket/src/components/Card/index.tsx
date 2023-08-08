'use client';
import Image from 'next/image';
import styles from './card.module.scss';
import Typograph from '../typograph';
import { useState } from 'react';

type genderType = 'man' | 'woman';

const Card = ({
  type,
  size,
  active,
  onClick,
}: {
  type: genderType;
  size: number;
  active: boolean;
  onClick: (gender: genderType) => void;
}) => {
  return (
    <div
      className={active ? styles.activeCardContainer : styles.cardContainer}
      onClick={() => onClick(type)}
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
        <Typograph variant='body1'>
          {type === 'man' ? '남성' : '여성'}
        </Typograph>
      </div>
    </div>
  );
};
export default Card;
