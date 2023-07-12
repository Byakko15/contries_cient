import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getCountryById } from "../http/countriesRequest";

export const Detail = () => {

    const [country, setCountry] = useState({
        flagImageUrl: '',
        name: '',
        id: '',
        shortName: '',
        continent: '',
        capital: '',
        subregion: '',
        area: 0,
        population: 0,
    })

    const searchCountryById = async (id)=>{
        try {
            const result = await getCountryById(id);
            setCountry(result)
        } catch (error) {
            console.log(error);
        }
    }

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(()=>{
        searchCountryById(id)
    }, [])

    const handleClickBack = ()=>{
        navigate("/home"); 
    }

  return (
    <div className="container-detail">
        <h2 className="title-detail">{country.name}'s details</h2>
        <div className="container-ima-data">
            <div className="container-image-detail">
                <img src={country.flagImageUrl} alt={country.name}></img>
            </div>
            <div className="container-data-detail" >
                <h3>Name: {country.name}</h3>
                <h4>Id: {country.shortName}</h4>
                <h4>Continent: {country.continent}</h4>
                <h4>Capital: {country.capital}</h4>
                <h4>Subregion: {country.subregion}</h4>
                <h4>Area: {country.area}  Km²</h4>
                <h4>Population: {country.population}</h4>
            </div>
        </div>
       
        <div className="button-detail-container">
            <button className="button-detail" onClick={handleClickBack} >🏡🔙  </button>    
        </div>   
      
    </div>
  );
};


