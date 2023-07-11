import {
    ORDER_ASC,
    ORDER_BY_POPULATION,
    ORDER_BY_NAME,
    ORDER_DESC,
  } from "./constants";
  import { STEPS, currentPag } from "./pagination";
  
  const orderByTypeDESC = ({ type, array }) => {
    
    switch (type) {
      case ORDER_BY_NAME:
        array.sort((a,b) => b.orderName.localeCompare(a.orderName))
        break;
  
      case ORDER_BY_POPULATION:
        array.sort((a,b)=> b.population - a.population)
        break;
  
      default:
        break;
    }
  };
  
  const orderByTypeASC = ({ type, array }) => {
    switch (type) {
      case ORDER_BY_NAME:
        array.sort((a,b) => a.orderName.localeCompare(b.orderName))
        break;
  
      case ORDER_BY_POPULATION:
        array.sort((a,b)=> a.population - b.population)
        break;
  
      default:
        break;
    }
  };
  
  const order = ({ array, orderFlow, orderBy }) => {
    if (orderFlow === "default" || orderBy === "default") {
      return;
    }
  
    switch (orderFlow) {
      case ORDER_ASC:
        orderByTypeASC({ type: orderBy, array });
        break;
      case ORDER_DESC:
        orderByTypeDESC({ type: orderBy, array })
        break;
  
      default:
        break;
    }
  };

  const findAllContinents = (countries) => {
    const allContinents = countries.map(country => country.continent);
    return [...new Set(allContinents)]
  }

  const findAllActivities = (countries) => {
    const allActivities = countries.filter(e => e.activities.length > 0).map(country => country.activities);
    return [...new Set(allActivities.flat())]
  }
  
  export const processFilter = ({
    immutableArrayState,
    continentFilter,
    activityFilter,
    continents,
    activities,
    currentPage,
    orderFlow,
    orderBy,
  }) => {

    const objArray = {
        newArray: immutableArrayState
    }

    if(continentFilter !== "all"){
        objArray.newArray = objArray.newArray.filter(country => {
            return country.continent === continentFilter
        })
    }

    if(activityFilter !== "all"){
        objArray.newArray = objArray.newArray.filter(country => {
            return country.activities.includes(activityFilter)
        })
    }

    order({ array: objArray.newArray, orderFlow, orderBy });
    const totalPages = Math.ceil(objArray.newArray.length / STEPS);
    
    return {
      countries: objArray.newArray,
      countriesPage: currentPag(objArray.newArray, currentPage),
      totalPages,
      currentPage,
      continentFilter: continentFilter,
      activitiesFilter: activityFilter,
      orderFlow,
      orderBy,
      continents: continents.length > 0 
        ? continents 
        : findAllContinents(immutableArrayState),
      activities: activities.length > 0 
        ? activities 
        : findAllActivities(immutableArrayState)
    };
  };
  