import pacmanImg from '../../../assets/image/pacman.png'
import pacmanMobile from '../../../assets/image/pacman_mobile.svg'
import { useResize } from '../../../hooks/use-resize'
import mod from './Pacman.module.scss'

const Pacman = () => {
  const { width } = useResize()

  return (
    <div className={mod.pacman}>
      <div className='container'>
        <div className={mod.pacman__wrapper}>
          <img src={width >= 576 ? pacmanImg : pacmanMobile} alt='pacman' />
        </div>
      </div>
    </div>
  );
}

export default Pacman