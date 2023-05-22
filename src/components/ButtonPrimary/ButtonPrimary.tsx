import React from 'react';
import mod from './ButtonPrimary.module.scss'

type ButtonPrimaryProps = {
  buttonText: string;
  height?: string;
  fontSize?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({buttonText, height, fontSize}) => {
  return (
    <button className={mod.button} style={
      {
        height: `${height}`,
        fontSize: `${fontSize}`
      }}>
      {buttonText}
    </button>
  );
}

export default ButtonPrimary