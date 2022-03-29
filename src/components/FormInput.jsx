import React, { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const { id, label, errorMessage, onChange, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        className="input"
        {...inputProps}
        onChange={onChange}
        focused={focused.toString()}
        onBlur={() => setFocused(true)}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
