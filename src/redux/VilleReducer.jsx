import {
  DELETE_CITY,
  FETCH_ALL_CITIES,
  SAVE_CITY,
  UPDATE_CITY,
  UPDATE_CITY_FRONTEND,
} from "./ActionsConstantes";

export const VilleInitialState = {
  villes: [],
  ville: {
    villeid: 0,
    name: "",
    paysname: "",
    paysid: 0,
  },
};

export const cityReducers = (state = VilleInitialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CITIES:
      return { ...state, villes: action.payload };

    case UPDATE_CITY_FRONTEND:
      return state.villes.map((v) => {
        if (v.id === action.payload.villeid) {
          // This isn't the item we care about - keep it as-is

          v.name = action.payload.ville.name;
          v.paysname = action.payload.ville.paysname;
          v.paysid = action.payload.ville.paysid;
        }
        return v;
      });

    case UPDATE_CITY:
      return { ...state, villes: action.payload };

    case SAVE_CITY:
      return { ...state, villes: state.villes.push(action.payload) };

    case DELETE_CITY:
      return {
        ...state,
        villes: state.villes.filter(
          (ville) => ville.villeid !== action.payload
        ),
      };

    default:
      return state;
  }
};
