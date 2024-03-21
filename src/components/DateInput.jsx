import React, { forwardRef, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { fr } from "date-fns/locale/fr";
registerLocale("fr", fr);

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateInput = ({ id, name, label, type, order, formId, dataOrder }) => {
  const [startDate, setStartDate] = useState(null);

  const reorderDatePickers = () => {
    const inputContainer = document.querySelector(
      `form[id="${formId}"] .input-container[data-order="${order}"]`
    );
    inputContainer.parentNode.parentNode.style.order = order;
  };

  useEffect(() => {
    reorderDatePickers();
  }, []);

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
          {/* <div className="calendar-title"></div> */}
          <div className="calendar-layout" style={{ position: "relative" }}>
            {children}
          </div>
        </CalendarContainer>
      </div>
    );
  };

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

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="dd/MM/yyyy"
      calendarContainer={MyContainer}
      customInput={<ExampleCustomInput />}
      maxDate={new Date()}
    />
  );
};

export default DateInput;
