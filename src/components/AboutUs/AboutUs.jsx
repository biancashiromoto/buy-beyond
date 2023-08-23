import { aboutUs } from '../../helpers/info';
import './AboutUs.css';

const AboutUs = () => {
  const {content} = aboutUs.pt_br;
  return (
    <>
      <div className='about-us-container' id='about-us'>
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
