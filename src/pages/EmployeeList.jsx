// Importation des hooks et des services nécessaires
import { useEffect, useState } from "react";
import { getEmployees } from "../services/api";

// Importation du composant de tableau de données
import { DataTableWrapper } from "data-table-by-lort";

// Composant pour afficher la liste des employés
const EmployeeList = () => {
  // Définition des états pour la liste des employés et la réponse de l'API
  const [employeesList, setEmployeesList] = useState([]);
  const [response, setResponse] = useState(null);

  // Utilisation de useEffect pour récupérer les données au chargement du composant
  useEffect(() => {
    // Fonction pour récupérer les employés
    const fetchEmployees = async () => {
      const res = await getEmployees();
      setEmployeesList(res.data);
      setResponse(res);
    };

    // Appel de la fonction pour récupérer les employés
    fetchEmployees();
  }, []);

  // Gestion des erreurs de l'API
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

  // Affichage de la liste des employés dans un tableau de données
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

// Exportation du composant EmployeeList
export default EmployeeList;
