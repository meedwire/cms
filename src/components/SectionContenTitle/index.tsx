import React from "react";
import * as Styles from "./styles";
import { IPropsSectionContentTitle } from "./types";
import { useModal } from "../Modal/hooks";
import { ModalContentTitle } from "../ModalContentTitle";
import { SectionEditable } from "../SectionEditable";

const SectionContenTitle: React.FC<IPropsSectionContentTitle> = ({ title }) => {
  const { setVisible } = useModal();

  function handleEdit() {
    setVisible(<ModalContentTitle />);
  }

  if (!title) return null;

  return (
    <SectionEditable onEdit={handleEdit}>
      <Styles.Title>{title}</Styles.Title>
    </SectionEditable>
  );
};

export { SectionContenTitle };
