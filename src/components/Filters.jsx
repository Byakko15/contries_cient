import { FilterActivity } from "./FilterActivity";
import { FilterContinent } from "./FilterContinent";

export const Filters = () => {
  return (
    <div className="filters-container">
        <FilterContinent />
        <FilterActivity />
    </div>
  );
};
