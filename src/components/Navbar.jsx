import { useNavigate } from "react-router-dom";
import {ButtonComponent} from "./ButtonComponent";
import { SearchBar } from "./SearchBar";
import { Filters } from "./Filters";
import { OrderComponent } from "./OrderComponent";

export const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form')
  };
  return (
    <nav className="navbar-container">
      <SearchBar />
      <Filters />
      <div className="home-home-container">
        🏡
      </div>
      <OrderComponent />
      <ButtonComponent 
        title="➕ Activity" 
        handleClick={handleClick}
        containerClass="button-activity-container"
        buttonClass={"createButton"}
      />
    </nav>
  );
};
