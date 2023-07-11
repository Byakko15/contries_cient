
export const validation = (form) => {
    const { name, duration, difficulty, season, countriesSelected} = form;
    const error = {};
  
    if (name.length === 0 || !name || /^[0-9]*$/.test(name) ) {
      error.name = "Please enter a valid name";
    }
    if (duration === 0) {
      error.duration = "Please select a duration";
    }
    if (difficulty === 0) {
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
  