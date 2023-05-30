import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import FullProductCard from './pages/FullProductCard';
import TrackOrder from './pages/TrackOrder';
import mod from './scss/App.module.scss';

function App() {
  return (
    <div className={mod.app}>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product/:id' element={<FullProductCard />} />
      <Route path='/track' element={<TrackOrder />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
