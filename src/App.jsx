import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import StepsContainer from './components/StepsContainer/StepsContainer';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import AffiliateStores from './components/AffiliateStores/AffiliateStores';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner/Spinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

    return (
    <>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Carousel />
          <div className='steps-about'>
            <StepsContainer />
            <AboutUs />
          </div>
          <AffiliateStores />
          <Footer />
        </>
      )}
    </>
  )
  }

export default App
