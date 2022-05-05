import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { contentAtom } from "../../recoil";
import { Input } from "../Input";
import { Tabs } from "../Tabs";
import { Delete, Add, Save } from "@mui/icons-material";
import { useModal } from "../Modal/hooks";

const uuid = () => (Math.random() * 60).toString(16);

interface IContentTab {
  title: string;
  contentID: string;
}

const ModalTabs: React.FC = () => {
  const [_, setState] = useRecoilState(contentAtom);
  const [contentTabs, setContentTabs] = useState<IContentTab[]>([]);
  const [inputValue, setInputValue] = useState<string>();
  const [onEdit, setOnEdit] = useState<string>();
  const { close } = useModal();

  function handleAdd() {
    if (!inputValue) return;

    if (onEdit) {
      const prevData = [...contentTabs];
      const index = prevData.findIndex((item) => item.contentID === onEdit);

      prevData[index].title = inputValue;

      setContentTabs(prevData);
      setInputValue("");
      setOnEdit(undefined);
      return;
    }

    setContentTabs((prev) => [
      ...prev,
      { title: inputValue, contentID: uuid() },
    ]);
    setInputValue("");
  }

  function handleDelete() {
    setContentTabs((prev) => [
      ...prev.filter((item) => item.contentID !== onEdit),
    ]);
    setOnEdit(undefined);
    setInputValue("");
  }

  function handleSave() {
    //@ts-ignore
    setState((prev) => ({
      ...prev,
      contentStructure: [
        {
          componentType: "Tabs",
          props: {
            data: contentTabs,
          },
        },
      ],
    }));
    close();
  }

  return (
    <>
      <DialogTitle>Adicione as Tabs</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={onEdit ? 10 : 11}>
            <Input
              type="text"
              value={inputValue}
              onKeyDown={(e) => {
                const key = e.key;
                if (key === "NumpadEnter" || key === "Enter") {
                  handleAdd();
                }
              }}
              onChangeText={(text) => setInputValue(text)}
            />
          </Grid>
          <Grid item md={1}>
            <IconButton onClick={handleAdd}>
              {onEdit ? <Save /> : <Add />}
            </IconButton>
          </Grid>
          {onEdit && (
            <Grid item md={1}>
              <IconButton onClick={handleDelete}>
                <Delete />
              </IconButton>
            </Grid>
          )}
        </Grid>
        <Tabs
          data={contentTabs as any}
          isFake={true}
          onSelect={(id) => {
            setOnEdit(id);
            setInputValue(
              contentTabs.find((item) => item.contentID === id)?.title
            );
          }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={close}>Cancelar</Button>
        <Button onClick={handleSave}>Salvar</Button>
      </DialogActions>
    </>
  );
};

export { ModalTabs };
