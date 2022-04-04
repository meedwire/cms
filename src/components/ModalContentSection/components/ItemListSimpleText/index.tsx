import React, { useState } from "react";
import { Add, ExpandLess, ExpandMore, TextFields } from "@mui/icons-material";
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
import MUIRichTextEditor from "mui-rte";

interface Props {
  value?: string;
  handleAdd?: () => void;
}

const ItemListSimpleText: React.FC<Props> = ({ value, handleAdd }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItemButton onClick={() => setOpen((prev) => !prev)}>
        <ListItemIcon>
          <TextFields />
        </ListItemIcon>
        <ListItemText primary="Texto Simples" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <MUIRichTextEditor
              controls={["italic", "bold"]}
              label="Start typing..."
              inlineToolbar
              onChange={(state) => console.log(state)}
            />
            {/* <Input multiline rows={6} value={value} /> */}
            <IconButton onClick={handleAdd}>
              <Add />
            </IconButton>
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export { ItemListSimpleText };
