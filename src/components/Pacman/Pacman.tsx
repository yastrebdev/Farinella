import pacmanImg from '../../assets/image/pacman.png'
import mod from './Pacman.module.scss'

const Pacman = () => {
  return (
    <div className={mod.pacman}>
      <div className='container'>
        <div className={mod.pacman__wrapper}>
          <img src={pacmanImg} alt='pacman' />
        </div>
      </div>
    </div>
  );
}

export default Pacman