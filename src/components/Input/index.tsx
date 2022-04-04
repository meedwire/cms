import { FormControl, TextField } from "@mui/material";
import React from "react";
import * as Styles from "./styles";
import { IPropsInput } from "./types";

const Input: React.FC<IPropsInput> = ({
  label,
  errorMessage,
  onChangeText,
  onChange,
  ...props
}) => {
  function handleChange(e: any) {
    onChange && onChange(e);
    onChangeText && onChangeText(e.currentTarget.value);
  }

  return (
    <FormControl fullWidth>
      <TextField
        {...props}
        label={label}
        variant="outlined"
        fullWidth
        size="small"
        onChange={handleChange}
      />
    </FormControl>
  );
};

export { Input };
