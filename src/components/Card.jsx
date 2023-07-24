import { Link } from "react-router-dom";

export const Card = ({ id, name, imageUrl, continent, activities }) => {
  return (
    <Link className="card" to={`/detail/${id}`}>
      <div className="imageContainer">
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <p>
          <span>{name}</span> - <span>{continent}</span> 
          {/* <ul> {activities.map(((act)=>
            <li>{act}</li>))}
            
            </ul> */}
        </p>
      </div>
    </Link>
  );
};
