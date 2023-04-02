import { combineReducers, createStore } from "redux";
import {
  EmployeeInitialState,
  employeeReducer,
} from "../redux/EmployeeReducer";
import { cityReducers, VilleInitialState } from "../redux/VilleReducer";

export const rootReducer = combineReducers({
  employeeRedux: employeeReducer,
  villeRedux: cityReducers,
});

export const Store = createStore(
  rootReducer,
  {
    employeeRedux: EmployeeInitialState,
    villeRedux: VilleInitialState,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
