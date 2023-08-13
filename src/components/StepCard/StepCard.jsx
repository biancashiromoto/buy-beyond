import PropTypes from "prop-types"

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

StepCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default StepCard;
