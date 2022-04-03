import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { contentAtom } from "../../recoil";
import { Input } from "../Input";
import { Tabs } from "../Tabs";
import { Delete, Add } from "@mui/icons-material";
import * as Styles from "./styles";

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

  function handleAdd() {
    if (!inputValue) return;

    if (onEdit) {
      setContentTabs((prev) => [
        ...prev.filter((item) => item.contentID !== onEdit),
        { title: inputValue, contentID: uuid() },
      ]);
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
  }

  return (
    <Styles.Container>
      <h3>Adicione as Tabs</h3>
      <Styles.ContainerInput>
        <Input
          type="text"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />

        <IconButton color="primary">
          <Add />
        </IconButton>
        {onEdit && (
          <IconButton color="primary">
            <Delete />
          </IconButton>
        )}
      </Styles.ContainerInput>
      <Tabs
        data={contentTabs as any}
        isFake={false}
        onSelect={(id) => {
          setOnEdit(id);
          setInputValue(
            contentTabs.find((item) => item.contentID === id)?.title
          );
        }}
      />
      <button
        onClick={() => {
          handleSave();
          setContentTabs([]);
        }}
        className="Modal_TitleContent_Button"
      >
        Salvar
      </button>
    </Styles.Container>
  );
};

export { ModalTabs };
