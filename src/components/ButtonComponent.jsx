export const ButtonComponent = ({
  handleClick = () => {},
  title,
  type = "button",
  buttonClass,
  containerClass,
}) => {
  return (
    <div className={containerClass}>
      <button 
        onClick={handleClick} 
        type={type}
        className={buttonClass}
      >
        {title}
      </button>
    </div>
  );
};
