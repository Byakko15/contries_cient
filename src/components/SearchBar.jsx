import { useState } from "react";
import { handleError } from "../helpers/error";
import { getCountries } from "../http/countriesRequest";
import { useDispatch, useSelector } from "react-redux";
import { saveCountries, saveSearchName } from "../redux/actions";

export const SearchBar = () => {
  const searchName = useSelector((state) => state.searchName);
  const [input, setInput] = useState(searchName);
  const dispatch = useDispatch();



  const searchCountries = async () => {
    try {
      const countries = await getCountries(input.trim());
      dispatch(saveCountries(countries));
      dispatch(saveSearchName(input));
    } catch (error) {
      const message = handleError(error);
      console.log(message);
    }
  }

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    searchCountries();
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Search country"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};
