import { currentPag, processFilter } from "../helpers";
import {
    GET_ACTIVITIES,
    NEXT_PAGE,
    PREV_PAGE,
    FILTER_CONTINENT,
    FILTER_TOURIST_ACT,
    ORDER_ACTION,
    SAVE_SEARCH_NAME,
    CREATE_ACTIVITY,
    SAVE_COUNTRIES,
} from "./action_types";

const initialState = {
  countries: [],
  countriesBackup:[],
  activities: [],
  continents: [],
  countriesPage: [],
  currentPage: 1,
  totalPages: 1,
  continentFilter: "all",
  activitiesFilter: "all",
  orderFlow: "default",
  orderBy: "default",
  searchName: "",
};

export const reducer = (state = initialState, action) => {
  const { 
    countriesBackup, continentFilter, continents, 
    activitiesFilter, orderFlow, orderBy, activities,
  } = state;
  switch (action.type) {
    case SAVE_COUNTRIES:
      const saveCountries = processFilter({
        immutableArrayState: action.payload,
        continentFilter: continentFilter,
        activityFilter: activitiesFilter,
        activities,
        continents,
        currentPage: 1,
        orderFlow,
        orderBy,
      });

      return {
        ...state,
        ...saveCountries,
        countriesBackup: action.payload,
      };

    case NEXT_PAGE:
      const nxtPage = state.currentPage + 1;
      return {
        ...state,
        countriesPage: currentPag(state.countries, nxtPage),
        currentPage: nxtPage,
      };
    case PREV_PAGE:
      const prvPage = state.currentPage - 1;
      return {
        ...state,
        countriesPage: currentPag(state.countries, prvPage),
        currentPage: prvPage,
      };

    case FILTER_CONTINENT:
      const filterContinent = processFilter({
        immutableArrayState: countriesBackup,
        continentFilter: action.payload,
        activityFilter: activitiesFilter,
        activities,
        continents,
        currentPage: 1,
        orderFlow,
        orderBy,
      });
    
      return {
        ...state,
        ...filterContinent,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case FILTER_TOURIST_ACT:
      const filterActivity = processFilter({
        immutableArrayState: countriesBackup,
        continentFilter: continentFilter,
        activityFilter: action.payload,
        currentPage: 1,
        orderFlow,
        orderBy,
        continents,
        activities,
      });

      return {
        ...state,
        ...filterActivity,
      };

    case ORDER_ACTION:
      const orderResult = processFilter({
        immutableArrayState: countriesBackup,
        continentFilter: continentFilter,
        activityFilter: activitiesFilter,
        currentPage: 1,
        orderFlow,
        orderBy,
        continents,
        activities,
        ...action.payload,
      });

      return {
        ...state,
        ...orderResult,
      };

    case SAVE_SEARCH_NAME:
      return {
        ...state,
        searchName: action.payload,
      };

    case CREATE_ACTIVITY:
      return {
        ...state,
        countriesBackup: [],
        countriesPage: [],
        countries: [],
        activities: [],
        currentPag: 1,
        totalPages: 1,
      };

    default:
      return { ...state };
  }
};
