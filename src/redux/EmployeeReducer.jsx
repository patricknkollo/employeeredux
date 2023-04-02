import { FETCH_ALL_EMPLOYEES } from "./ActionsConstantes";

export const EmployeeInitialState = {
  employees: [],
  employee: {
    employeeid: 0,
    lastname: "",
    firstname: "",
    age: 0,
    villeid: 0,
  },
};

export const employeeReducer = (state = EmployeeInitialState, action) => {
  switch (action.type) {
    case FETCH_ALL_EMPLOYEES:
      return { ...state, employees: action.payload };

    default:
      return state;
  }
};
