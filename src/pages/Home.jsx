// Importation du composant Form et des champs du formulaire
import Form from "../components/Form";
import fields from "../data/createEmployeeFormFields.json";

// Composant pour la page d'accueil
const Home = () => {
  // Affichage du formulaire de création d'un employé
  return (
    <>
      <h1>Create Employee</h1>
      <section className="create-employee">
        <Form
          className="new-employee-form"
          inputs={fields.inputs}
          dateInputs={fields.dateInputs}
          selects={fields.selects}
          formId="new-employee-form"
        />
      </section>
    </>
  );
};

// Exportation du composant Home
export default Home;
