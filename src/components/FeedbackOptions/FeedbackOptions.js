import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onClick }) {
  return (
    <div className="container">
      {options.map(option => {
        return (
          <button
            className={s.btn}
            key={option}
            name={option}
            onClick={onClick}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedback: PropTypes.func.isRequired,
};
