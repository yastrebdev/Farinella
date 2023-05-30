import bannerImage from '../../../assets/image/banner-img.png';
import Carousel from '../../Carousel/Carousel';
import Slide from './Slide/Slide';

const Banner = () => {
  return (
    <Carousel quantitySlides={1} pagination={false}>
      <Slide buttonText={'Вся пицца ниже'} bannerImage={bannerImage}/>
      <Slide buttonText={'А пицца ниже'} bannerImage={bannerImage}/>
      <Slide buttonText={'А пицца ниже'} bannerImage={bannerImage}/>
    </Carousel>
  );
};

export default Banner;
