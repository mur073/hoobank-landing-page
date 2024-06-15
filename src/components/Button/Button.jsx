import './button.css';
import PropTypes from 'prop-types';

const Button = ({ text }) => {
  return <button className="button-blue bg-blue-gradient">{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
