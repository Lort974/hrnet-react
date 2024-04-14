// Importation du composant de tableau de données
import { DataTableWrapper } from "data-table-by-lort";

import { useSelector } from "react-redux";

// Composant pour afficher la liste des employés
const EmployeeList = () => {
  const employees = useSelector((state) => state.employeesReducer);

  if (Object.keys(employees).length === 0 && employees.constructor === Object) {
    return (
      <>
        <div id="employee-div" className="container">
          <h1>Current Employees</h1>
          <p>Loading data...</p>
        </div>
      </>
    );
  }

  // Affichage de la liste des employés dans un tableau de données
  return (
    <>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <DataTableWrapper
          data={employees}
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

// Exportation du composant EmployeeList
export default EmployeeList;
