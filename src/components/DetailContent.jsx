import React, { useState } from 'react'
import { SelectActivity } from './SelectActivity';

export const DetailContent = ({country}) => {
    const {
        flagImageUrl,
        name,
        id,
        continent,
        capital,
        subregion,
        area,
        population,
        activities,
    } = country;

    const [activitySelected, setActivitySelected] = useState({
        duration:"",
        difficult:"",
        season:""
    })

    const handleChange = (evt) => {
        const activityFound = activities.find(el => el.name === evt.target.value);

        if(activityFound){
            setActivitySelected(activityFound)
            return
        }

        setActivitySelected({
            duration:"",
            difficult:"",
            season:""
        })
    }
  return (
    <div className='detail-content-container'>
        {
            id && (
                <div className='detail-content'>
                    <div className='container-ima-data'>
                        <img src={flagImageUrl} alt={name}></img>
                    </div>
                    <div className="container-data-detail" >
                        {/* <h3>Name: {country.name}</h3>
                        <h3>Id: {country.shortName}</h3>  */}
                        <h3>Continent: {continent}</h3>
                        <h3>Capital: {capital}</h3>
                        <h3>Subregion: {subregion}</h3>
                        <h3>Area: {area}  Km²</h3>
                        <h3>Population: {population}</h3>
                    </div>
                </div>
            )
        }
        {
            activities.length > 0 ? (
                <div className='detail-content'>
                    <div>
                        <h2>Tourist Activities</h2>
                        <SelectActivity 
                            activities={activities}
                            handleChange={handleChange}
                        />
                    </div>
                    {
                        activitySelected.duration && (
                            <div className='container-data-detail-activities'>
                                <h3>Duration: {activitySelected.duration} hours</h3>
                                <h3>Difficult: {activitySelected.difficult}</h3>
                                <h3>Season: {activitySelected.season}</h3>
                            </div>
                        )
                    }
                </div>
            ) : <div className='no-select-detail'><h2>No activities available</h2></div>
        }
    </div>
  )
}


{/* 
<div className="container-ima-data">
            <div>
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
            <div className="button-detail-container">
                <button className="button-detail" onClick={handleClickBack} >🏡🔙  </button>
            </div>
        </div> 
    */}

