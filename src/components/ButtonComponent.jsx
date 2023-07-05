export const ButtonComponent = ({
  handleClick = () => {},
  title,
  type = "button",
}) => {
  return (
    <div>
      <button onClick={handleClick} type={type}>
        {title}
      </button>
    </div>
  );
};
