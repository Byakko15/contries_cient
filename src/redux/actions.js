
import {
    SAVE_COUNTRIES,
    FILTER_CONTINENT, 
    FILTER_TOURIST_ACT,
    NEXT_PAGE,
    PREV_PAGE,
    ORDER_ACTION,
    SEARCH_NAME,
    CREATE_ACTIVITY,
  } from "./action_types";


export const saveCountries = (countries)=>({
    type: SAVE_COUNTRIES,
    payload: countries,
})

export const nextPageAction = () => ({
    type: NEXT_PAGE,
  });
  
  export const prevPageAction = () => ({
    type: PREV_PAGE,
  });
