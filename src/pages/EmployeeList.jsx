import employeesList from "../data/employeesList.json";
import DataTableWrapper from "../DataTablePlugIn/DataTableWrapper";

const EmployeeList = () => {
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
