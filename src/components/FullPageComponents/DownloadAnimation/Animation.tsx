import mod from './Animation.module.scss';

const Animation = () => {
  return (
    <div className={mod.wrapper}>
      <div className={mod.loader}>
        <div className={mod.circles}>
          <span className={mod.one}></span>
          <span className={mod.two}></span>
          <span className={mod.three}></span>
        </div>
        <div className={mod.pacman}>
          <span className={mod.top}></span>
          <span className={mod.bottom}></span>
          <span className={mod.left}></span>
          <div className={mod.eye}></div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
