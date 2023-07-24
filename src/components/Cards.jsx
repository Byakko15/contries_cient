import { Card } from "./Card";

export const Cards = ({ countries }) => {
  return (
    <div className="cardsPage">
      {countries.length === 0 ? (
        <div>...Loading countries</div>
      ) : (
        countries.map((country) => (
          <Card
            key={country.id}
            id={country.id}
            name={country.name}
            imageUrl={country.flagImageUrl}
            continent={country.continent}
            activities={country.activities}
            />
            ))
            )}
    </div>
  );
 
};
