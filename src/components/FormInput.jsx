// Composant pour un champ de saisie du formulaire
const FormInput = ({ id, name, label, type, order, dataOrder }) => {
  // Retour du div contenant le label et l'input
  return (
    <div className="input-container" style={{ order: order }}>
      {/* Label pour l'input */}
      <label htmlFor={id}>{label}</label>
      {/* Input pour la saisie de l'utilisateur */}
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

// Exportation du composant FormInput
export default FormInput;
