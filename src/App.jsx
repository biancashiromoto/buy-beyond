import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import StepsContainer from './components/StepsContainer/StepsContainer';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
      <Header />
      <Carousel />
      <StepsContainer />
      <Footer />
    </div>
  )
}

export default App
