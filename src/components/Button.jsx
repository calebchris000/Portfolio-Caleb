import PropTypes from "prop-types";

const Button = ({ text, className, url, Icon }) => {
  const handleButtonClick = () => {
   window.open(url, '_break')
  };

  return (
    <button
      className={`${className} font-bold text-sm flex gap-3 transition-all h-12 p-1 justify-center w-fit  items-center`}
      onClick={handleButtonClick}
    >
      {text} <Icon className="w-4 h-4"/>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired
};

export default Button;
