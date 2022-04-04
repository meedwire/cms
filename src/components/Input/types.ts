import { TextFieldProps } from "@mui/material";

export type IPropsInput = TextFieldProps & {
  label?: string;
  errorMessage?: string;
  onChangeText?: (text?: string) => void;
};
