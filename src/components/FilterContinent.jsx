import { useDispatch, useSelector } from "react-redux";
import { filterByContinentAction } from "../redux/actions";



export const FilterContinent = () => {
    const continents = useSelector((state) => state.continents);
    const continentFilter = useSelector((state) => state.continentFilter);
    const dispatch = useDispatch();

    const handleChange = (event)=>{
        dispatch(filterByContinentAction(event.target.value));
    }

    return (
        <div>
            <label style={{color:"black"}}>
                Continent:
                <span> </span>
                <select onChange={handleChange} defaultValue={continentFilter}>
                <option value="all">All</option>
                {continents.map((continent) => {
                    return (
                    <option key={continent} value={continent}>
                        {continent}
                    </option>
                    );
                })}
                </select>
            </label>
        </div>
  );
};
