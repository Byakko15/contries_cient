import { ButtonComponent } from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div>
      <h2>Welcome to Henry Countries App</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima
        exercitationem voluptates nulla nesciunt veniam voluptatem quod eligendi
        ad quo fugiat possimus ipsum, adipisci modi itaque excepturi ipsa
        perferendis placeat.
      </p>
      <ButtonComponent title="Sign in" handleClick={handleClick} />
    </div>
  );
};
