import s from '../feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map(option => (
    <li key={option}>
      <button
        type="button"
        onClick={() => onLeaveFeedback(option)}
        className={s.button}
      >
        {option}
      </button>
    </li>
  ));
  return <ul className={s.buttonsWrapper}>{elements}</ul>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
