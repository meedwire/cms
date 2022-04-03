import React, { useRef, useState } from "react";
import * as Styles from "./styles";
import { IPropsSectionContentTitle } from "./types";
import { AiOutlineMore } from "react-icons/ai";
import { MenuSection } from "../MenuSection";
import { useModal } from "../Modal/hooks";
import { ModalContentTitle } from "../ModalContentTitle";

const SectionContenTitle: React.FC<IPropsSectionContentTitle> = ({ title }) => {
  const [element, setElemten] = useState<Element>();
  const [menuVisible, setMenuVisible] = useState(false);
  const { setVisible } = useModal();

  function handleOpenMenu(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setElemten(e.currentTarget);
    setMenuVisible(true);
  }

  function handleClose() {
    setMenuVisible(false);
    setElemten(undefined);
  }

  function handleEdit() {
    setVisible(<ModalContentTitle />);
  }

  if (!title) return null;

  return (
    <Styles.Container>
      <Styles.Title>{title}</Styles.Title>
      <Styles.MoreButton onClick={handleOpenMenu}>
        <AiOutlineMore />
      </Styles.MoreButton>
      <MenuSection
        anchorEl={element}
        visible={menuVisible}
        handleClose={handleClose}
        handleEdit={handleEdit}
      />
    </Styles.Container>
  );
};

export { SectionContenTitle };
