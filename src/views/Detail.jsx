import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getCountryById } from "../http/countriesRequest";
import { DetailContent } from "../components/DetailContent";

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
        activities: [],
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
        {country.name && (
            <h2 className="title-detail">{country.name}'s ({country.shortName}) details</h2>
        )}
        <DetailContent 
            country={country}
        />
        <div className="button-detail-container">
            <button className="button-detail" onClick={handleClickBack} >🏡🔙  </button>
        </div>
    </div>
  );
};


