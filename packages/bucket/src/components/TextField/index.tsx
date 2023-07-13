import React from 'react';
import styles from './TextField.module.scss';
import classNames from 'classnames';
import Typograph from '../Typograph';
import Image from 'next/image';

interface ITextFieldProps {
  error?: boolean;
  active?: boolean;
  isvalid?: boolean;
  placeholder?: string;
  otherProps?: React.InputHTMLAttributes<HTMLInputElement>; // 다른 필요한 props들
}

const TextField: React.FC<ITextFieldProps> = ({
  error = false,
  active = false,
  isvalid,
  placeholder,
  otherProps,
}) => {
  const getClassName = (): string => {
    let className = styles.inputWrapper;
    if (error) className = classNames(className, styles.error);
    if (active) className = classNames(className, styles.active);
    return className;
  };

  const classNameInputWrapper = getClassName();

  return (
    <div>
      <div className={classNameInputWrapper}>
        <input
          className={styles.textinput}
          placeholder={placeholder}
          {...otherProps}
        />
        {isvalid ? (
          <Image
            src='/images/checked.png'
            alt='cheked'
            height={24}
            width={24}
          />
        ) : isvalid === false ? (
          <Image src='/images/error.png' alt='error' height={24} width={24} />
        ) : null}
      </div>
      <Typograph variant='caption2' className={styles.helperText}>
        {isvalid === false ? '유효하지 않은 이메일입니다.' : ''}
      </Typograph>
    </div>
  );
};

export default TextField;
