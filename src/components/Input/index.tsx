import React from "react";
import * as Styles from "./styles";
import { IPropsInput } from "./types";

const Input: React.FC<IPropsInput> = ({
  label,
  errorMessage,
  onChangeText,
  ...props
}) => {
  function handleChange(e: any) {
    onChangeText && onChangeText(e.currentTarget.value);
  }

  return (
    <Styles.Container>
      {label && <Styles.Label>{label}</Styles.Label>}
      <Styles.Input {...props} onChange={handleChange} />
      {errorMessage && <Styles.TextError>{errorMessage}</Styles.TextError>}
    </Styles.Container>
  );
};

export { Input };
