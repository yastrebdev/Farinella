import AboutPizzeria from "../components/AboutPizzeria/AboutPizzeria";
import Banner from "../components/Bunner/Banner";
import Delivery from "../components/Delivery/Delivery";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu/Menu";
import Pacman from "../components/Pacman/Pacman";
import Stocks from "../components/Stocks/Stocks";
import Team from "../components/Team/Team";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Menu />
      <Stocks />
      <AboutPizzeria />
      <Team />
      <Delivery />
      <Pacman />
      <Footer />
    </>
  );
}

export default Home