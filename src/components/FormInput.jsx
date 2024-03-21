const FormInput = ({ id, name, label, type, order, dataOrder }) => {
  return (
    <div className="input-container" style={{ order: order }}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        required={true}
        data-order={dataOrder}
      />
    </div>
  );
};

export default FormInput;
