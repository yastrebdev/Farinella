import React from 'react';
import mod from './DeliveryCard.module.scss';

type DeliveryCardProps = {
  imgUrl: string;
  description: string;
};

const DeliveryCard: React.FC<DeliveryCardProps> = ({ imgUrl, description }) => {
  return (
    <div className={mod.item__wrapper}>
      <div className={mod.item}>
        <img className={mod.img} src={imgUrl} alt="delivery" />
        <p className={mod.description}>{description}</p>
      </div>
    </div>
  );
};

export default DeliveryCard;
