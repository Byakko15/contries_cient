import { ButtonComponent } from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className="landing-image">
      <h2 className="title-landing">Welcome to Henry Countries App</h2>
      <div className="paragraph-landing" >
        <p>
          Do you know that... A country is a distinct part of the world, such as a state, nation, or other political entity. It may be a sovereign state or make up one part of a larger state. For example, the country of Japan is an independent, sovereign state, while the country of Wales is a component of a multi-part sovereign state, the United Kingdom. A country may be a historically sovereign area, a currently sovereign territory with a unified government (such as Senegal), or a non-sovereign geographic region associated with certain distinct political, ethnic, or cultural characteristics.
          I invite you to know the countries characteristics in this SPA!
        </p>
      </div>
      <div className="container-buttonComponent" >
        <ButtonComponent 
          title="Go!" 
          handleClick={handleClick}
          buttonClass="button-landing"
        />
      </div>
    </div>
  );
};
