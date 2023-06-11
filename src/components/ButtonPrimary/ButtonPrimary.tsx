import React from 'react';
import mod from './ButtonPrimary.module.scss'

type ButtonPrimaryProps = {
  buttonText: string;
  height?: string;
  fontSize?: string;
  counter?: boolean;
  count?: number;
  onClick?: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = (
  {
    buttonText,
    height,
    fontSize,
    counter,
    count,
    onClick
  }) => {

  return (
    <button onClick={onClick} className={mod.button} style={
      {
        height: `${height}`,
        fontSize: `${fontSize}`,
      }}>
      {
        counter
        ? <span>{count}</span>
        : ''
      }
      {buttonText}
    </button>
  );
}

export default ButtonPrimary