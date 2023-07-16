import {
  DELETE_CITY,
  FETCH_ALL_CITIES,
  SAVE_CITY,
  UPDATE_CITY,
  UPDATE_CITY_FRONTEND,
} from "./ActionsConstantes";

export const saveCity = (city) => {
  return {
    type: SAVE_CITY,
    payload: city,
  };
};

export const fetchCities = (cities) => {
  return {
    type: FETCH_ALL_CITIES,
    payload: cities,
  };
};

export const updateCityFrontend = (city, id) => {
  return {
    type: UPDATE_CITY_FRONTEND,
    payload: { ville: city, villeid: id },
  };
};

export const updateCity = (city, id) => {
  return {
    type: UPDATE_CITY,
    payload: { ville: city, villeid: id },
  };
};

export const deleteCities = (id) => {
  return {
    type: DELETE_CITY,
    payload: id,
  };
};
