import React, { useState } from "react";
import { Add, ExpandLess, ExpandMore, LocalOffer } from "@mui/icons-material";
import {
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Input } from "../../../Input";

interface Props {
  value?: string;
  handleAdd?: () => void;
}

const ItemListTags: React.FC<Props> = ({ value, handleAdd }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItemButton onClick={() => setOpen((prev) => !prev)}>
        <ListItemIcon>
          <LocalOffer />
        </ListItemIcon>
        <ListItemText primary="Tags" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <Input value={value} />
            <IconButton onClick={handleAdd}>
              <Add />
            </IconButton>
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export { ItemListTags };
