import React from "react";
import "./styles.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonAdd: React.FC<Props> = ({ ...props }) => {
  return (
    <button className="Button_Add" {...props}>
      +
    </button>
  );
};

export { ButtonAdd };
