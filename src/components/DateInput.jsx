// Importation des hooks et des composants nécessaires
import React, { forwardRef, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { fr } from "date-fns/locale/fr";

// Enregistrement de la locale française pour le DatePicker
registerLocale("fr", fr);

// Composant pour un champ de saisie de date
const DateInput = ({ id, name, label, type, order, formId, dataOrder }) => {
  // Définition de l'état pour la date courante
  const [currentDate, setCurrentDate] = useState(null);

  // Fonction pour réorganiser les DatePicker
  const reorderDatePickers = () => {
    const inputContainer = document.querySelector(
      `form[id="${formId}"] .input-container[data-order="${order}"]`
    );
    inputContainer.parentNode.parentNode.style.order = order;
  };

  // Utilisation de useEffect pour réorganiser les DatePicker au chargement du composant
  useEffect(() => {
    reorderDatePickers();
  }, []);

  // Composant personnalisé pour le conteneur du calendrier
  const MyContainer = ({ className, children }) => {
    return (
      <div
        style={{
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.4)",
          color: "#fff",
          borderRadius: "16px",
        }}
      >
        <CalendarContainer className={className}>
          <div className="calendar-layout" style={{ position: "relative" }}>
            {children}
          </div>
        </CalendarContainer>
      </div>
    );
  };

  // Composant personnalisé pour l'input de date
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <>
      <div className="input-container" data-order={order}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          name={name}
          id={id}
          defaultValue={value}
          onClick={onClick}
          ref={ref}
          required={true}
          data-order={dataOrder}
        />
      </div>
    </>
  ));

  // Retour du DatePicker avec les composants personnalisés
  return (
    <DatePicker
      selected={currentDate}
      onChange={(date) => setCurrentDate(date)}
      dateFormat="yyyy-MM-dd"
      calendarContainer={MyContainer}
      customInput={<ExampleCustomInput />}
      maxDate={new Date()}
    />
  );
};

// Exportation du composant DateInput
export default DateInput;
