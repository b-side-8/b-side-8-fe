import React from 'react';
import styles from './TextField.module.scss';
import classNames from 'classnames';
import Typograph from '../typograph';
import Image from 'next/image';

interface ITextFieldProps {
  size?: 'small' | 'medium';
  error?: boolean;
  active?: boolean;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  isvalid?: boolean;
  placeholder?: string;
  helperWaringText?: string;
  helperText?: string;
  otherProps?: React.InputHTMLAttributes<HTMLInputElement>; // 다른 필요한 props들
}

const TextField: React.FC<ITextFieldProps> = ({
  size = 'medium',
  error = false,
  active = false,
  type = 'string',
  value,
  onChange,
  name,
  isvalid,
  placeholder,
  otherProps,
  helperWaringText = '',
  helperText = '',
}) => {
  const getClassName = (): string => {
    let className = styles.inputWrapper;
    if (error) className = classNames(className, styles.error);
    if (active) className = classNames(className, styles.active);
    if (size === 'small') {
      className = classNames(className, styles.inputWrapperSmall);
    } else {
      className = classNames(className, styles.inputWrapperMedium);
    }
    return className;
  };

  const classNameInputWrapper = getClassName();

  return (
    <div>
      <div className={classNameInputWrapper}>
        <input
          className={styles.textinput}
          value={value}
          onChange={onChange}
          name={name}
          type={type}
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
        {isvalid === false ? helperWaringText : helperText}
      </Typograph>
    </div>
  );
};

export default TextField;
