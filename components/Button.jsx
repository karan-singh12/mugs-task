import React from 'react';
import style from './../styles/Button.module.scss';

const Button = ({ children, onClick, type='button', className = '', disabled }) => {
  return (
    <button
      className={`${style.button} ${className} mx-2`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
