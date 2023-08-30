
import carousel_img01 from '../../assets/images/carousel/carousel_img01.png';
import carousel_img02 from '../../assets/images/carousel/carousel_img02.png';
import carousel_img03 from '../../assets/images/carousel/carousel_img03.png';
import { carousel } from '../../helpers/info';
import './Carousel.css';

const Carousel = () => {
  const {carousel01, carousel02, carousel03} = carousel.pt_br;
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
            <img src={carousel_img01} className="carousel-image d-block w-100" loading='lazy' aria-hidden='true'/>
            <div className="carousel-caption carousel-text d-md-block">
              <h2>{carousel01[0]}</h2>
              <p>{carousel01[1]}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel_img02} className="carousel-image d-block w-100" loading='lazy' aria-hidden='true'/>
            <div className="carousel-caption carousel-text d-md-block">
              <h2>{carousel02[0]}</h2>
              <p>{carousel02[1]}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel_img03} className="carousel-image d-block w-100" loading='lazy' aria-hidden='true'/>
            <div className="carousel-caption carousel-text d-md-block">
              <h2>{carousel03[0]}</h2>
              <p>{carousel03[1]}</p>
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
      </div>
    </>
  )
}

export default Carousel;
