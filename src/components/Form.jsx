import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import DateInput from "./DateInput";

const Form = ({ className, inputs, dateInputs, selects }) => {
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
      />
    );
  });

  formContent = [
    ...formContent,
    ...inputsList,
    ...dateInputsList,
    ...selectsList,
  ];

  console.log(formContent);

  return <form className={className}>{formContent}</form>;
};

export default Form;
