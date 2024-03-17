const FormInput = ({ id, name, label, type, order }) => {
  return (
    <div className="input-container" style={{ order: order }}>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} />
    </div>
  );
};

export default FormInput;
