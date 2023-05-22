import React from 'react';
import decor from '../../assets/image/title-decoration.svg'
import mod from './TitleBlock.module.scss'

type HeaderBlockProps = {
  title: string;
  description: string;
}

const HeaderBlock: React.FC<HeaderBlockProps> = ({title, description}) => {
  return (
    <div className={mod.title_block}>
      <img className={mod.image} src={decor} alt='decoration' />
      <h2 className={mod.title}>{title}</h2>
      <span className={mod.description}>{description}</span>
    </div>
  );
}

export default HeaderBlock