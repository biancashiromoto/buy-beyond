
import carousel02 from '../../assets/images/carousel02.png';
import carousel03 from '../../assets/images/carousel03.png';
import carousel04 from '../../assets/images/carousel04.png';

const Carousel = () => {
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carousel02} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Compre nos EUA e receba na sua casa!</h5>
        <p>Suas compras internacionais entregues em confiança.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={carousel03} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Compras online ou com personal shopper</h5>
        <p>Compre com facilidade: escolha ou deixe um expert escolher por você.</p>
      </div>
    </div>
     <div className="carousel-item">
      <img src={carousel04} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Encontre produtos únicos</h5>
        <p>Produtos exclusivos ao seu alcance.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div></>
  )
}

export default Carousel;
