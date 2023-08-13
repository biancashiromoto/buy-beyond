import './StepsContainer.css';
import number01 from '../../assets/images/numbers/number01.png';
import number02 from '../../assets/images/numbers/number02.png';
import number03 from '../../assets/images/numbers/number03.png';
import number04 from '../../assets/images/numbers/number04.png';
import number05 from '../../assets/images/numbers/number05.png';
import { useEffect, useState } from 'react';
import { onlineShopSteps, personalShopperSteps } from '../../helpers/info';
import StepCard from '../StepCard/StepCard';

const StepsContainer = () => {
  const images = [number01, number02, number03, number04, number05];
  const [isOnlineShopping, setIsOnlineShopping] = useState(true);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    if (isOnlineShopping) {
      setSteps(onlineShopSteps.pt_br.content);
    } else {
      setSteps(personalShopperSteps.pt_br.content);
    }
  }, [isOnlineShopping]);

  return (
    <>
      <div className='online-shopping d-flex align-items-center justify-content-center'>
        <label className={isOnlineShopping ? 'active-steps' : ''}>
          Online shopping
          <input
            className='visually-hidden'
            type='radio'
            name='shopping-choice'
            checked={isOnlineShopping}
            onChange={() => setIsOnlineShopping(true)}
          />
        </label>
        <label className={!isOnlineShopping ? 'active-steps' : ''}>
          Personal shopper
          <input
            className='visually-hidden'
            type='radio'
            name='shopping-choice'
            checked={!isOnlineShopping}
            onChange={() => setIsOnlineShopping(false)}
          />
        </label>
      </div>
      <div className='card-container d-flex flex-column'>
        {steps && steps.map((step, index) => {
          return (
          <StepCard
            className={isOnlineShopping ? 'online-steps' : 'personal-shopper-steps'}
            imgSrc={images[index]}
            key={index}
            text={step}
          />
        )
        })}
      </div>
    </>
  )
}

export default StepsContainer;
