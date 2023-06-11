import bannerImage from '../../../assets/image/banner-img.png';
import bannerTablet from '../../../assets/image/banner_tablet.png';
import bannerMobile from '../../../assets/image/banner_mobile.png';
import Carousel from '../../Carousel/Carousel';
import Slide from './Slide/Slide';
import mod from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={mod.banner}>
      <Carousel quantitySlides={1} pagination={false}>
        <Slide
          buttonText={'Вся пицца ниже'}
          bannerImage={bannerImage}
          bannerTablet={bannerTablet}
          bannerMobile={bannerMobile}
        />
        <Slide
          buttonText={'А пицца ниже'}
          bannerImage={bannerImage}
          bannerTablet={bannerTablet}
          bannerMobile={bannerMobile}
        />
        <Slide
          buttonText={'А пицца ниже'}
          bannerImage={bannerImage}
          bannerTablet={bannerTablet}
          bannerMobile={bannerMobile}
        />
      </Carousel>
    </div>
  );
};

export default Banner;
