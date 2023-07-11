
import {
    SAVE_COUNTRIES,
    FILTER_CONTINENT, 
    FILTER_TOURIST_ACT,
    NEXT_PAGE,
    PREV_PAGE,
    ORDER_ACTION,
    SAVE_SEARCH_NAME,
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

export const saveSearchName = (countryName) => ({
  type: SAVE_SEARCH_NAME,
  payload: countryName
});

export const filterByContinentAction = (continent) => ({
  type: FILTER_CONTINENT,
  payload: continent
})

export const filterByTouristAct = (activity) => ({
  type: FILTER_TOURIST_ACT,
  payload: activity
})

export const orderAction = (order) => ({
  type: ORDER_ACTION,
  payload: order,
});
export const createActivityAction = () => ({
  type: CREATE_ACTIVITY,
});