import {
  FETCH_ALL_EMPLOYEES,
  SAVE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "./ActionsConstantes";

export function getAllEmployees(employees) {
  return {
    type: FETCH_ALL_EMPLOYEES,
    payload: employees,
  };
}

export function saveEmployee(employee) {
  return {
    type: SAVE_EMPLOYEE,
    payload: employee,
  };
}

export function updateEmployee({ newEmployee, id }) {
  return {
    type: UPDATE_EMPLOYEE,
    payload: { employee: newEmployee, employeeid: id },
  };
}

export function deleteEmployees(id) {
  return {
    type: FETCH_ALL_EMPLOYEES,
    payload: id,
  };
}
