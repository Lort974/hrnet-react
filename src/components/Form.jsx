import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import DateInput from "./DateInput";
import { useEffect, useRef } from "react";
import Modal from "react-modal";
import { useState } from "react";
import { createEmployee } from "../services/api";

Modal.setAppElement("#root");

const Form = ({ className, inputs, dateInputs, selects, formId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [focus, setFocus] = useState("input[data-order='1']");

  //L'ordre des inputs est réorganisé en css, donc l'ordre HTML n'est pas le bon.
  //On doit donc gérer l'appui sur "Tab" et faire en sorte de passer à l'input suivant :
  useEffect(() => {
    const focusedInput = document.querySelector(focus);
    if (focusedInput) {
      focusedInput.focus();
      const inputType = focusedInput.getAttribute("type");
      const currentOrder = focusedInput.getAttribute("data-order");
      const newOrder = inputType === "submit" ? 1 : parseInt(currentOrder) + 1;
      const allInputs = document.querySelectorAll("input");
      allInputs.forEach((input) => {
        input.addEventListener("keydown", (e) => {
          if (
            e.key === "Tab" &&
            input.getAttribute("data-order") === currentOrder
          ) {
            e.preventDefault();
            setFocus("input[data-order='" + newOrder + "']");
          }
        });
      });
    }
  }, [focus]);

  let formContent = [];
  const inputsList = inputs.map((input) => {
    return (
      <FormInput
        id={input.id}
        name={input.name}
        label={input.label}
        type={input.type}
        key={input.id}
        order={input.order}
        dataOrder={input.order}
      />
    );
  });
  const dateInputsList = dateInputs.map((dateInput) => {
    return (
      <DateInput
        id={dateInput.id}
        name={dateInput.name}
        label={dateInput.label}
        type={dateInput.type}
        key={dateInput.id}
        order={dateInput.order}
        formId={formId}
        dataOrder={dateInput.order}
      />
    );
  });
  const selectsList = selects.map((select) => {
    return (
      <FormSelect
        id={select.id}
        key={select.id}
        label={select.label}
        name={select.name}
        options={select.options}
        order={select.order}
        dataOrder={select.order}
        setFocus={setFocus}
      />
    );
  });

  formContent = [
    ...formContent,
    ...inputsList,
    ...dateInputsList,
    ...selectsList,
  ];

  const newEmployeeForm = useRef("new-employee-form");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employeeData = {
      firstName: newEmployeeForm.current[0].value,
      lastName: newEmployeeForm.current[1].value,
      dateOfBirth: newEmployeeForm.current[5].value,
      startDate: newEmployeeForm.current[6].value,
      address: newEmployeeForm.current[2].value,
      city: newEmployeeForm.current[3].value,
      state: newEmployeeForm.current[8].value,
      zipCode: newEmployeeForm.current[4].value,
      department: newEmployeeForm.current[10].value,
    };
    const res = await createEmployee(employeeData);
    if (res.status === 201) {
      setModalIsOpen(true);
    } else {
      alert(res);
    }
  };

  //Fonction pour effacer les champs du formulaire à la fermeture de la modale
  const eraseFields = () => {
    //Tous les inputs du form
    const allFields = newEmployeeForm.current.querySelectorAll("input");
    //Les fake inputs sont les div qui affichent la valeur cliquée dans react-select
    const fakeFields = newEmployeeForm.current.querySelectorAll(
      ".css-1dimb5e-singleValue"
    );
    allFields.forEach((field) => {
      field.value = "";
    });
    fakeFields.forEach((field) => {
      field.textContent = "";
    });
  };

  // useEffect(() => {
  //   const inputs = document.querySelectorAll("input");
  // }, []);

  return (
    <>
      <form
        className={className}
        id={formId}
        ref={newEmployeeForm}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {formContent}

        <input
          type="submit"
          className="button"
          form="new-employee-form"
          id="new-employee-form-button"
          style={{ order: formContent.length + 1 }}
          data-order={formContent.length + 1}
          value="Save"
        />
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Employee creation confirmation message"
        id="confirmation"
        className="employee-modal"
      >
        <h2>Employee created!</h2>
        <ul>
          <li>
            <span>First Name</span>
            <span>{newEmployeeForm.current[0].value}</span>
          </li>
          <li>
            <span>Last Name</span>
            <span>{newEmployeeForm.current[1].value}</span>
          </li>
          <li>
            <span>Address</span>
            <span>{newEmployeeForm.current[2].value}</span>
          </li>
          <li>
            <span>City</span>
            <span>{newEmployeeForm.current[3].value}</span>
          </li>
          <li>
            <span>Zip Code</span>
            <span>{newEmployeeForm.current[4].value}</span>
          </li>
          <li>
            <span>Date Of Birth</span>
            <span>{newEmployeeForm.current[5].value}</span>
          </li>
          <li>
            <span>Start Date</span>
            <span>{newEmployeeForm.current[6].value}</span>
          </li>
          <li>
            <span>State</span>
            <span>{newEmployeeForm.current[8].value}</span>
          </li>
          <li>
            <span>Department</span>
            <span>{newEmployeeForm.current[10].value}</span>
          </li>
        </ul>
        <button
          onClick={() => {
            setModalIsOpen(false);
            eraseFields();
          }}
        >
          X
        </button>
      </Modal>
    </>
  );
};

export default Form;
