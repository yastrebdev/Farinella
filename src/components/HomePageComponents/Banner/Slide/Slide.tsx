import ButtonPrimary from '../../../ButtonPrimary/ButtonPrimary';
import mod from './Slide.module.scss';

type SlideProps = {
  buttonText: string;
  bannerImage: string;
}

const Slide: React.FC<SlideProps> = ({buttonText, bannerImage}) => {
  return (
    <div className={mod.slide}>
      <img className={mod.bannerBg} src={bannerImage} alt="bannerImage" />
      <div className={mod.buttonMain}>
        <ButtonPrimary buttonText={buttonText} />
      </div>
    </div>
  );
};

export default Slide;
