import { CREATE_EMPLOYEE, GET_EMPLOYEES } from "../actions/employees.action";

const initialState = {};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return action.payload;
    case CREATE_EMPLOYEE:
      return [...state, action.payload];
    default:
      return state;
  }
};
