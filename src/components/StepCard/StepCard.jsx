import React from 'react';
import number01 from '../../assets/images/numbers/number01.png';
import number02 from '../../assets/images/numbers/number02.png';
import number03 from '../../assets/images/numbers/number03.png';
import number04 from '../../assets/images/numbers/number04.png';
import number05 from '../../assets/images/numbers/number05.png';

const StepCard = ({imgSrc, key, text}) => {
  return (
    <div
      className="card  flex-row align-items-center justify-content-center"
    >
      <img
        src={imgSrc}
        className="number-img"
        alt={`Step ${key}`}
        style={{width: '15vw'}}
      />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  )
}

export default StepCard;
