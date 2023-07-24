import { useEffect, useState } from 'react';
import { ButtonComponent } from '../components/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createActivityAction, saveCountries } from '../redux/actions';
import { getCountries } from '../http/countriesRequest';
import { validation } from '../helpers/validation';
import { postActivity } from '../http/activitiesRequest';


export const CreateActivity = () => {
    
    const [countriesObj, setCountriesObj] = useState({})
    const [countriesSelected, setCountriesSelected] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const countries = useSelector((state)=> state.countries);
    const [form, setForm] = useState({
        name: '',
        difficulty: 0, 
        duration: 0, 
        season: '',
    })
    const [error, setError] = useState({
        name: '',
        difficulty: '', 
        duration: '', 
        season: '',
        countries: ''
    })

    const makeActivity = async (body) => {
        try {
          const newActivity = await postActivity(body);
          dispatch(createActivityAction(newActivity));
          alert("Activity was created successfully");   
          navigate("/home"); 
        } catch (error) {
          alert(error)
        }
      }

    const handleChange = (event)=>{
        let property = event.target.name;
        let value = event.target.value;
        if(property === "countries"){
            setCountriesSelected((obj) => setCountriesSelected({...obj,[value]:countriesObj[value]}))
        } else {
            setForm({...form, [property]: value });
        }        
    }
    
    const handleClickCancel = () => {
        navigate("/home");
      };
  
      const handleSubmit = (event)=>{
        event.preventDefault();
          
        const request = {
            ...form,
            difficult: Number(form.difficulty),
            duration: Number(form.duration),
            countries: Object.values(countriesSelected)
        }
            
        makeActivity(request)
    }

    const handleClickDelete = (countryName)=>{
        const newObj = {};
        Object.keys(countriesSelected).forEach(country => {
            if(country !== countryName){
                newObj[country] = countriesSelected[country]
            }
        })

        setCountriesSelected(newObj)
    }

    const makeRequest = async () => {
        try {
          const infoCountries = await getCountries();
          dispatch(saveCountries(infoCountries));    
        } catch (error) {
          console.log(error);
        }
    }
    
    useEffect(() => {
        if(countries.length === 0){
          makeRequest();
        } else {
            countries.forEach(country => {
                setCountriesObj((obj) => ({...obj,[country.name]:country.id}))
            })
        }
    }, [countries]);

    useEffect(() => {
        setError(validation({...form,countriesSelected }));
    }, [form,countriesSelected])

    return ( 
        <div className='form-container'>
            <div className='form-title-container'>
                <h3>Fill out the form  📝</h3>
            </div>
            <div>                
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    placeholder="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={error.name ? "error" : "success"}
                />
                <br />
                {error.name && <span className='please'> {error.name}</span>}
                <br />

                <label htmlFor="duration">Duration: </label>
                <input
                    type="number"
                    min="0"
                    max="24"
                    step="0.1"           
                    name="duration"
                    value={form.duration}
                    onChange={handleChange}
                    className={error.duration ? "error" : "success"}
                />
                <span> Hours ⏱️  </span>
                <span>/ {form.duration*60} Minutes ⏲️ </span> 
                <br />    
                             
                {error.duration && <span className='please'>{error.duration}</span>}                 
                <br />  


                <label htmlFor="difficulty">Difficulty: </label>
                <input
                    type="range"
                    id='difficulty'
                    min={0}
                    max={5}
                    step={1}
                    name="difficulty"
                    value={form.difficulty}
                    onChange={handleChange}
                    className='range'
                />
                <span>{form.difficulty}</span>   
                <br />
                {error.difficulty && <span className='please'> {error.difficulty}</span>}        
                <br />      

                <select className={error.season ? "error" : "success"} name='season' id='season-select' onChange={handleChange}>
                    <option value={'Choose a season'}>Choose a season</option>
                    <option value={'fall'}>Fall🍂</option>
                    <option value={'spring'}>Spring🌈</option>
                    <option value={'summer'}>Summer☀️</option>
                    <option value={'winter'}>Winter☃️</option>
                </select>
                <br />
                {error.season && <span className='please'> {error.season}</span>} 
                <br />    
                
                <select className={error.countries ? "error" : "success"} name='countries' id='countries-select' onChange={handleChange}>
                    <option>Choose country</option>
                    {
                        countries.map((country)=>(
                            <option 
                              key={country.id}
                            >{country.name}</option> 
                        ))
                    }
                </select>
                <br />
                {error.countries && <span className='please'>{error.countries}</span>} 
                <div style={{display:"flex", flexWrap:"wrap",}}>
                    {
                        countriesSelected&&(Object.keys(countriesSelected).map((country)=>{
                            return(
                                <div key={country}>
                                    {/* <span>{country}</span> */}
                                    <div className='country-selected' onClick={()=> handleClickDelete(country)}>{country}
                                        
                                    </div>
                                </div>)
                        }))
                    }
                </div>
                <br />      

            <div className='buttons-form-container'>
                <ButtonComponent 
                    handleClick={handleClickCancel} 
                    title="Cancel ❎" 
                    containerClass="button-activity-container"
                    buttonClass={"createButton"}
                />

                <button className='createButton'
                    disabled = {Object.keys(error).length !== 0}>
                    Submit ✅
                </button>
            </div>
            
             </form>
        </div>

             

  )
}

