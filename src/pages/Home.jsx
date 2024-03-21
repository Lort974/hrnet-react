import Form from "../components/Form";
import fields from "../data/createEmployeeFormFields.json";

const Home = () => {
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

export default Home;
