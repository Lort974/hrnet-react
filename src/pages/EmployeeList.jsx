import { useEffect, useState } from "react";
import { getEmployees } from "../services/api";

import { DataTableWrapper } from "data-table-by-lort";

const EmployeeList = () => {
  const [employeesList, setEmployeesList] = useState([]);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await getEmployees();
      setEmployeesList(res.data);
      setResponse(res);
    };

    fetchEmployees();
  }, []);

  if (response) {
    if (response.status === "error") {
      return (
        <>
          <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <p>{response.data}</p>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <DataTableWrapper
          data={employeesList}
          id="data-table"
          columns={[
            { title: "First Name", valueName: "firstName" },
            { title: "Last Name", valueName: "lastName" },
            { title: "Start Date", valueName: "startDate" },
            { title: "Department", valueName: "department" },
            { title: "Date of Birth", valueName: "dateOfBirth" },
            { title: "Address", valueName: "address" },
            { title: "City", valueName: "city" },
            { title: "State", valueName: "state" },
            { title: "Zip Code", valueName: "zipCode" },
          ]}
          customClassNames="employees-table-wrapper"
          defaultDataLength="10" //optional
        />
      </div>
    </>
  );
};

export default EmployeeList;
