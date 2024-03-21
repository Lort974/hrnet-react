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

  useEffect(() => {
    const inputs = document.querySelectorAll("input");
  }, []);

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
        <p>Employee created!</p>
        <ul>
          <li>
            {newEmployeeForm.current[0].name} :{" "}
            {newEmployeeForm.current[0].value}
          </li>
          <li>
            {newEmployeeForm.current[1].name} :{" "}
            {newEmployeeForm.current[1].value}
          </li>
          <li>
            {newEmployeeForm.current[2].name} :{" "}
            {newEmployeeForm.current[2].value}
          </li>
          <li>
            {newEmployeeForm.current[3].name} :{" "}
            {newEmployeeForm.current[3].value}
          </li>
          <li>
            {newEmployeeForm.current[4].name} :{" "}
            {newEmployeeForm.current[4].value}
          </li>
          <li>
            {newEmployeeForm.current[5].name} :{" "}
            {newEmployeeForm.current[5].value}
          </li>
          <li>
            {newEmployeeForm.current[6].name} :{" "}
            {newEmployeeForm.current[6].value}
          </li>
          <li>
            {newEmployeeForm.current[8].name} :{" "}
            {newEmployeeForm.current[8].value}
          </li>
          <li>
            {newEmployeeForm.current[10].name} :{" "}
            {newEmployeeForm.current[10].value}
          </li>
        </ul>
        <button onClick={() => setModalIsOpen(false)}>X</button>
      </Modal>
    </>
  );
};

export default Form;
