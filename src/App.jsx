import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import StepsContainer from './components/StepsContainer/StepsContainer';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import AffiliateStores from './components/AffiliateStores/AffiliateStores';

function App() {

  return (
    <>
      <Header />
      <Carousel />
      <div className='steps-about'>
        <StepsContainer />
        <AboutUs />
      </div>
      <AffiliateStores />
      <Footer />
    </>
  )
}

export default App
