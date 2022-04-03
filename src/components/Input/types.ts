import React from "react";

export interface IPropsInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  onChangeText?: (text?: string) => void;
}
