import axios from "axios";

export const GET_EMPLOYEES = "GET_EMPLOYEES";
export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE";

export const getEmployees = () => {
  return (dispatch) => {
    return axios.get("http://localhost:4000/employees").then((res) => {
      dispatch({ type: GET_EMPLOYEES, payload: res.data });
    });
  };
};

export const createEmployee = (employeeData) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:4000/employees", employeeData)
      .then((res) => {
        dispatch({ type: CREATE_EMPLOYEE, payload: employeeData });
      });
  };
};
