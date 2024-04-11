// Importation des hooks et du composant Select
import React, { useState, useEffect } from "react";
import Select from "react-select";

// Composant pour un champ de sélection du formulaire
const FormSelect = ({
  id,
  name,
  label,
  options,
  order,
  dataOrder,
  setFocus,
}) => {
  // Définition de l'état pour l'option sélectionnée
  const [selectedOption, setSelectedOption] = useState(null);

  // Fonction pour gérer le changement de l'option sélectionnée
  const handleChange = (option) => {
    setSelectedOption(option);
  };

  // Fonction pour réorganiser les selects
  const reorderSelects = () => {
    const inputContainer = document.getElementById(id);
    inputContainer.parentNode.style.order = order;
    const input = inputContainer.querySelector("input");
    input.setAttribute("data-order", dataOrder);
  };

  // Utilisation de useEffect pour réorganiser les selects au chargement du composant
  useEffect(() => {
    reorderSelects();
  }, []);

  // Retour du div contenant le label et le select
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

// Exportation du composant FormSelect
export default FormSelect;
