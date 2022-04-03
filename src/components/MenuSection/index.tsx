import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import React from "react";
import { IPropsMenu } from "./types";
import { Edit } from "@mui/icons-material";

const MenuSection: React.FC<IPropsMenu> = ({
  anchorEl,
  visible,
  handleClose,
  handleEdit,
}) => {
  if (!visible) return null;

  function onClickEdit() {
    handleClose();
    handleEdit && handleEdit();
  }

  return (
    <Menu
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      id="basic-menu"
      anchorEl={anchorEl}
      open={visible}
      onClose={handleClose}
    >
      <MenuItem onClick={onClickEdit}>
        <ListItemIcon>
          <Edit />
        </ListItemIcon>
        <ListItemText>Editar</ListItemText>
      </MenuItem>
    </Menu>
  );
};

export { MenuSection };
