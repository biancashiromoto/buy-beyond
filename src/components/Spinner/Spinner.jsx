import './Spinner.css';

const Spinner = () => {
  return (
    <div className='spinner-container'>
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Carregando...</span>
      </div>
    </div>
  )
}

export default Spinner;
