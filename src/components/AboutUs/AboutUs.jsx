import { aboutUs } from '../../helpers/info';
import bg_image from '../../assets/images/bg_image.png';
import './AboutUs.css';

const AboutUs = () => {
  const {content} = aboutUs.pt_br;
  return (
    <>
      <div className='about-us-container' id='about-us'>
        <img className='bg-image d-md-none' src={bg_image} aria-label='hidden' />
        <div className='about-us-text d-flex flex-column'>
        <h3 className='text-center'>Sobre nós</h3>
          {content.map((phrase, index) => (
            <span key={index}>{phrase}</span>
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutUs;
