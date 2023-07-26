import React, { FC } from 'react';
import styles from './typograph.module.scss';
import classNames from 'classnames';

interface ITypographProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'title4'
    | 'title5'
    | 'subtitle'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'caption2'
    | 'caption1'
    | 'span';
  className?: string;
  children: React.ReactNode;
}

const Typograph = ({
  variant = 'span',
  className,
  children,
}: ITypographProps) => {
  const getComponentAndClassName = (): [
    keyof JSX.IntrinsicElements,
    string
  ] => {
    switch (variant) {
      case 'h1':
        return ['h1', styles.heading1];
      case 'h2':
        return ['h2', styles.heading2];
      case 'h3':
        return ['h3', styles.heading3];
      case 'h4':
        return ['h4', styles.heading4];
      case 'title1':
        return ['p', styles.title1];
      case 'title2':
        return ['p', styles.title2];
      case 'title1':
        return ['p', styles.title3];
      case 'title1':
        return ['p', styles.title4];
      case 'title1':
        return ['p', styles.title5];
      case 'subtitle':
        return ['p', styles.subtitle];
      case 'body1':
        return ['p', styles.body1];
      case 'body2':
        return ['p', styles.body1];
      case 'body3':
        return ['p', styles.body1];
      case 'body4':
        return ['p', styles.body1];
      case 'caption1':
        return ['p', styles.caption1];
      case 'caption2':
        return ['p', styles.caption2];
      case 'span':
      default:
        return ['span', styles.span];
    }
  };

  const [Component, defaultClassName] = getComponentAndClassName();

  const combinedClassName = classNames(defaultClassName, className); // 기존 className과 추가 className을 결합

  return <Component className={combinedClassName}>{children}</Component>;
};

export default Typograph;
