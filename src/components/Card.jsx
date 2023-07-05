import { Link } from "react-router-dom";

export const Card = ({ id, name, imageUrl, continent }) => {
  return (
    <Link className="card" to={`/detail/${id}`}>
      <div className="imageContainer">
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <p>
          <span>{name}</span> - <span>{continent}</span>
        </p>
      </div>
    </Link>
  );
};
