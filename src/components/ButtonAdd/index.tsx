import React from "react";
import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type Props = typeof IconButton["arguments"]["props"];

const ButtonAdd: React.FC<Props> = ({ ...props }) => {
  return (
    <IconButton
      {...props}
      size="small"
      style={{ position: "absolute", right: 6, top: 6 }}
    >
      <Add />
    </IconButton>
  );
};

export { ButtonAdd };
