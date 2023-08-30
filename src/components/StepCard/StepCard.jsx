import PropTypes from "prop-types";
import './StepCard.css';

const StepCard = ({imgSrc, text, className}) => {
  return (
    <div
      className={`${className} card flex-row align-items-center justify-content-center`}
    >
      <img
        src={imgSrc}
        className="number-img"
        aria-hidden="true"
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
  key: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default StepCard;
