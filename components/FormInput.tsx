import React from "react";

import styles from "../styles/Login.module.css";

interface FormParameters {
  title: string;
  placeholder: string;
  isPassword: boolean;
  stateVariable: React.Dispatch<React.SetStateAction<string>>;
}

function FormInput({
  title,
  placeholder,
  isPassword,
  stateVariable,
}: FormParameters) {
  return (
    <div className={styles.FormGroup}>
      <label className={styles.FormGroupLabel}>{title}</label>
      <input
        placeholder={placeholder}
        type={isPassword ? "password" : "text"}
        onChange={(e) => stateVariable(e.target.value)}
        className={styles.FormGroupInput}
      />
    </div>
  );
}

export default FormInput;
