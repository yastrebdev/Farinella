import { useResize } from '../../../hooks/use-resize';
import Carousel from '../../Carousel/Carousel';
import TitleBlock from '../../TitleBlock/TitleBlock'
import SlideTeam from './SlideTeam/SlideTeam';
import team1 from '../../../assets/image/team-1.png'
import team2 from '../../../assets/image/team-2.png'
import team3 from '../../../assets/image/team-3.png'
import mod from './Team.module.scss'

type SlideDataItem = {
  imgUrl: string,
  name: string;
  descr: string;
}

const slideData: SlideDataItem[] = [
  {
    imgUrl: team1,
    name: 'Арсен Гаспарян',
    descr: 'делает лучшую пиццу',
  },
  {
    imgUrl: team2,
    name: 'Анна Герасимова',
    descr: 'дотошный технолог',
  },
  {
    imgUrl: team3,
    name: 'Глеб Каспаров',
    descr: 'мастер на все руки',
  },
  {
    imgUrl: team1,
    name: 'Арсен Гаспарян',
    descr: 'делает лучшую пиццу',
  },
  {
    imgUrl: team2,
    name: 'Анна Герасимова',
    descr: 'дотошный технолог',
  },
]

const Team = () => {
  const { width } = useResize()

  return (
    <div className={mod.team}>
      <TitleBlock title={'Мы профессионалы'} description={'Лучшие специалисты'}/>
      <Carousel quantitySlides={width < 768 ? 2 : 3} pagination={true} paginationQuantity={3} pt={50} pb={80}>
        {
          slideData.map((slide, i) => <SlideTeam key={i} {...slide}/>)
        }
      </Carousel>
    </div>
  );
}

export default Team