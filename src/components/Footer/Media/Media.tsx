import { ReactComponent as TelegramSvg } from '../../../assets/image/telegram.svg';
import { ReactComponent as VkontakteSvg } from '../../../assets/image/vkontakte.svg';
import { ReactComponent as InstagramSvg } from '../../../assets/image/instagram.svg';
import logoWhite from '../../../assets/image/logo-white.svg';
import mod from './Media.module.scss';

const Media = () => {
  return (
    <div className={mod.footer__media}>
      <img className={mod.footer__logo} src={logoWhite} alt="logo-white" />
      <h4 className={mod.footer__title}>Наши соцсети</h4>
      <div className={mod.footer__social}>
        <a href="#none">
          <TelegramSvg />
        </a>
        <a href="#none">
          <VkontakteSvg />
        </a>
        <a href="#none">
          <InstagramSvg />
        </a>
      </div>
    </div>
  );
};

export default Media;
