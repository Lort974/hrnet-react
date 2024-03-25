import React, { useState, useEffect } from "react";
import Select from "react-select";

const FormSelect = ({
  id,
  name,
  label,
  options,
  order,
  dataOrder,
  setFocus,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const reorderSelects = () => {
    const inputContainer = document.getElementById(id);
    inputContainer.parentNode.style.order = order;
    const input = inputContainer.querySelector("input");
    input.setAttribute("data-order", dataOrder);
  };

  useEffect(() => {
    reorderSelects();
  }, []);

  return (
    <div className="input-container">
      <label
        htmlFor={id}
        onClick={(e) => setFocus("input[data-order='" + dataOrder + "']")}
      >
        {label}
      </label>
      <Select
        id={id}
        name={name}
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={{ order: { order } }}
        placeholder=""
        required={true}
        data-order={dataOrder}
      />
    </div>
  );
};

export default FormSelect;
