import React from 'react';
import styles from './profileImageSelector.module.scss';
import Image from 'next/image';

interface ILoaderProps {
  basic?: boolean;
}
const IMAGES = [
  {
    src: '/images/camera.png',
  },
  {
    src: '/images/profile01.png',
  },
  {
    src: '/images/profile02.png',
  },
  {
    src: '/images/profile03.png',
  },
  {
    src: '/images/profile04.png',
  },
  {
    src: '/images/profile05.png',
  },
  {
    src: '/images/picture.png',
  },
  {
    src: '/images/profile06.png',
  },
  {
    src: '/images/profile07.png',
  },
  {
    src: '/images/profile08.png',
  },
];

export default function ProfileImageSelector({ profile }: { profile: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.basicWrapper}></div>
      <div className={styles.loader}>
        {IMAGES.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.src}
            width={56}
            height={56}
          />
        ))}
      </div>
    </div>
  );
}
