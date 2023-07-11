import { useDispatch, useSelector } from "react-redux";
import { filterByTouristAct} from '../redux/actions'


export const FilterActivity = () => {
  
  const activitiesFilter = useSelector((state) => state.activitiesFilter);
  const activities = useSelector((state) => state.activities);
  
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(filterByTouristAct(event.target.value));
  };

  return (
    <div>
      <label style={{color:"black"}}>
        Activity:
        <span> </span>
        <select name="selectActivity" onChange={handleChange} defaultValue={activitiesFilter}>
        <option value="all">All</option>
        {activities.map((activity) => {
                    return (
                    <option key={activity}>
                        {activity}
                    </option>
                    );
                })}
      
        </select>
      </label>
    </div>
  );
};
