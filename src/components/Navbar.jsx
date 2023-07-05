import {ButtonComponent} from "./ButtonComponent";

export const Navbar = () => {
  const handleClick = () => {
    console.log("ir a vista de crear actividad");
  };
  return (
    <nav className="navbar-container">
      <ButtonComponent 
        title="Create Activity" 
        handleClick={handleClick} 
      />
    </nav>
  );
};
