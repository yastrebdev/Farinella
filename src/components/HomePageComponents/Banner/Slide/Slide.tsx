import { useResize } from '../../../../hooks/use-resize';
import ButtonPrimary from '../../../ButtonPrimary/ButtonPrimary';
import mod from './Slide.module.scss';

type SlideProps = {
  buttonText: string;
  bannerImage: string;
  bannerTablet: string;
  bannerMobile: string;
};

const Slide: React.FC<SlideProps> = ({ buttonText, bannerImage, bannerTablet, bannerMobile }) => {
  const { width } = useResize();

  return (
    <div className={mod.slide}>
      {width >= 768 && <img className={mod.bannerBg} src={bannerImage} alt="bannerImage" />}
      {width < 768 && width > 576 ? <img className={mod.bannerBg} src={bannerTablet} alt="bannerImage" /> : ''}
      {width <= 576 ? <img className={mod.bannerBg} src={bannerMobile} alt="bannerImage" /> : ''}
      <div className={mod.buttonMain}>
        <ButtonPrimary buttonText={buttonText} />
      </div>
    </div>
  );
};

export default Slide;
