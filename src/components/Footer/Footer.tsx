import logoWhite from '../../assets/image/logo-white.svg';
import mod from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={mod.footer}>
      <div className="container">
        <div className={mod.footer__wrapper}>
          <div>
            <img src={logoWhite} alt='logo-white' />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
