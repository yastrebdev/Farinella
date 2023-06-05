import mainAbout from '../../../assets/image/main-about.png';
import contentImg1 from '../../../assets/image/content-img-1.png';
import contentImg2 from '../../../assets/image/content-img-2.png';
import contentImg3 from '../../../assets/image/content-img-3.png';
import contentImg4 from '../../../assets/image/content-img-4.png';
import TitleBlock from '../../TitleBlock/TitleBlock';
import mod from './AboutPizzeria.module.scss';

const AboutPizzeria = () => {
  return (
    <div id='about' className={mod.about}>
      <div className="container">
        <TitleBlock title={'О пиццерии'} description={'Только мы'} />
        <div className={mod.about__main}>
          <div className={`${mod.about__mainImg} ${mod.img}`}>
            <img src={mainAbout} alt="about" />
          </div>
          <div className={mod.about__mainContent}>
            <h4 className={`${mod.about__title} ${mod.about__titleMain}`}>Качество ингридиентов</h4>
            <p className={`${mod.about__description}`}>
              Мы гордимся тем, что используем только лучшие ингредиенты для приготовления нашей
              пиццы. Наша мука изготавливается из высококачественной пшеницы, а наши помидоры и
              овощи поставляются нам напрямую от местных фермеров. Мы также используем только свежие
              травы и специи, чтобы придать нашей пицце неповторимый вкус.
            </p>
          </div>
        </div>
        <div className={mod.about__content}>
          <div className={`${mod.img}`}>
            <img src={contentImg1} alt="about" />
          </div>
          <div className={mod.about__contentInfo}>
            <h4 className={`${mod.about__title} ${mod.about__titleSub}`}>Разнообразие меню</h4>
            <p className={mod.about__description}>
              Наши клиенты могут выбирать из широкого ассортимента пицц, которые мы предлагаем.{' '}
            </p>
            <p className={mod.about__description}>
              Кроме того, мы предлагаем разнообразные соусы и топпинги, такие как ветчина, грибы,
              перец и многое другое.
            </p>
          </div>
          <div className={`${mod.img} ${mod.about__img2}`}>
            <img src={contentImg2} alt="about" />
          </div>
          <div className={`${mod.img}`}>
            <img src={contentImg3} alt="about" />
          </div>
          <div className={`${mod.img} ${mod.about__img4}`}>
            <img src={contentImg4} alt="about" />
          </div>
          <div className={mod.about__contentInfo}>
            <div>
              <h4 className={`${mod.about__title} ${mod.about__titleSub}`}>Доставка</h4>
              <p className={mod.about__description}>
                Мы понимаем, что наши клиенты ценят свое время и усилия, поэтому мы предлагаем
                быструю и удобную доставку.
              </p>
            </div>
            <div>
              <h4 className={`${mod.about__title} ${mod.about__titleSub}`}>Обслуживание</h4>
              <p className={mod.about__description}>Мы также стараемся обеспечить высокий уровень обслуживания в нашей пиццерии, чтобы каждый клиент чувствовал себя особенным.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPizzeria;
