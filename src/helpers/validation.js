
export const validation = (form) => {
    const { name, duration, difficulty, season, countriesSelected} = form;
    const error = {};
  
    if ( !name || !/^[a-zA-Z0-9 ]*$/.test(name) || /^[0-9 ]*$/.test(name) ) {
      error.name = "Please enter a valid name";
    } else if (name.length >20){
      error.name = "Activity name is too long";
    }
    if (duration < 0.1 || duration > 24) {
      error.duration = "Please select a duration";
    }
    if (difficulty <1) {
      error.difficulty = "Please select a difficulty";
    }
    if (!season) {
      error.season = "Please select a season";
    }
    if (Object.keys(countriesSelected).length === 0 ) {
      error.countries = "Please select at least one Country";
    }
    
    return error;
  };
  