import './StepsContainer.css';
import number01 from '../../assets/images/numbers/number01.png';
import number02 from '../../assets/images/numbers/number02.png';
import number03 from '../../assets/images/numbers/number03.png';
import number04 from '../../assets/images/numbers/number04.png';
import number05 from '../../assets/images/numbers/number05.png';

const StepsContainer = () => {
  return (
    <div className='card-container d-flex flex-column'>
      <div
        className="card flex-row align-items-center justify-content-center"
      >
        <img
          src={number01}
          className="number-img"
          alt="Number 01"
          style={{width: '15vw'}}
        />
        <div className="card-body">
          <p className="card-text">Você envia sua compra online para o nosso endereço</p>
        </div>
      </div>
      <div
        className="card  flex-row align-items-center justify-content-center"
      >
        <img
          src={number02}
          className="number-img"
          alt="Number 02"
          style={{width: '15vw'}}
        />
        <div className="card-body">
          <p className="card-text">Nossa equipe revisa seu produto para garantir a integridade dele</p>
        </div>
      </div>
      <div
        className="card  flex-row align-items-center justify-content-center"
      >
        <img
          src={number03}
          className="card-img-top number-img"
          alt="Number 03"
          style={{width: '15vw'}}
        />
        <div className="card-body">
          <p className="card-text">O frete é calculado com base no peso da compra</p>
        </div>
      </div>
      <div
        className="card  flex-row align-items-center justify-content-center"
      >
        <img
          src={number04}
          className="card-img-top number-img"
          alt="Number 04"
          style={{width: '15vw'}}
        />
        <div className="card-body">
          <p className="card-text">Seu produto é embalado e enviado de forma segura</p>
        </div>
      </div>
      <div
        className="card  flex-row align-items-center justify-content-center"
      >
        <img
          src={number05}
          className="card-img-top number-img"
          alt="Number 04"
          style={{width: '15vw'}}
        />
        <div className="card-body">
          <p className="card-text">Você recebe suas compras no conforto da sua casa!</p>
        </div>
      </div>
    </div>
  )
}

export default StepsContainer;
