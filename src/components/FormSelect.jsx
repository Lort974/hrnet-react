const FormSelect = ({ id, name, label, options, order }) => {
  const optionsList = options.map((option) => {
    return <option key={option}>{option}</option>;
  });

  return (
    <div className="input-container" style={{ order: order }}>
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id}>
        {optionsList}
      </select>
    </div>
  );
};

export default FormSelect;
