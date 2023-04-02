import { FETCH_ALL_CITIES, SAVE_CITY } from "./ActionsConstantes";

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

export const updateCity = (city, id) => {
  return {
    type: SAVE_CITY,
    payload: { ville: city, villeid: id },
  };
};

export const deleteCities = (id) => {
  return {
    type: SAVE_CITY,
    payload: id,
  };
};
