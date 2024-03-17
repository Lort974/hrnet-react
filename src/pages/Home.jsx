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
        />

        <button className="button" form="create-employee">
          Save
        </button>
      </section>

      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  );
};

export default Home;
