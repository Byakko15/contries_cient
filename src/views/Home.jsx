import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { getCountries } from "../http/countriesRequest";
import { useDispatch, useSelector } from "react-redux";
import { saveCountries } from "../redux/actions";
import { Cards } from "../components/Cards";
import { Pagination } from "../components/Pagination";


export const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state)=>state.countriesPage);
  const allCountries = useSelector((state)=>state.countries);
  
  const makeRequest = async () => {
    try {
      const infoCountries = await getCountries();
      dispatch(saveCountries(infoCountries));    
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(allCountries.length === 0){
      makeRequest();
    }
  }, []);


  return( 
    <div className="homePage">
      <Navbar />
      <Cards countries={countries} />
      <Pagination />
    </div>
  );
};
