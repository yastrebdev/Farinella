import React from 'react';
import mod from './SlideTeam.module.scss'

type SlideTeamProps = {
  imgUrl: string;
  name: string;
  descr: string;
}

const SlideTeam: React.FC<SlideTeamProps> = ({imgUrl, name, descr}) => {
  return (
    <div className={mod.team__slide}>
      <img src={imgUrl} alt='team' />
      <div className={mod.team__persone}>
        <h4 className={mod.team__title}>{name}</h4>
        <span className={mod.team__description}>{descr}</span>
      </div>
    </div>
  );
}

export default SlideTeam