import PropTypes from "prop-types"

const StepCard = ({imgSrc, key, text, className}) => {
  return (
    <div
      className={`${className} card flex-row align-items-center justify-content-center`}
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

StepCard.propTypes = {
  className: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default StepCard;
