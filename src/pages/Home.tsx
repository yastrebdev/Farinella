import Banner from '../components/HomePageComponents/Banner/Banner';
import Menu from '../components/HomePageComponents/Menu/Menu';
import Stocks from '../components/HomePageComponents/Stocks/Stocks';
import AboutPizzeria from '../components/HomePageComponents/AboutPizzeria/AboutPizzeria';
import Team from '../components/HomePageComponents/Team/Team';
import Delivery from '../components/HomePageComponents/Delivery/Delivery';
import Pacman from '../components/HomePageComponents/Pacman/Pacman';

const Home = () => {
  return (
    <>
      <Banner />
      <Menu />
      <Stocks />
      <AboutPizzeria />
      <Team />
      <Delivery />
      <Pacman />
    </>
  );
};

export default Home;
