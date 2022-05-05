import React, { useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { MenuSection } from "../MenuSection";
import * as Styles from "./styles";
import { IPropsSectionEditable } from "./types";

const SectionEditable: React.FC<IPropsSectionEditable> = ({
  children,
  onDelete,
  onEdit,
  isFake,
}) => {
  const [element, setElemten] = useState<Element>();
  const [menuVisible, setMenuVisible] = useState(false);

  function handleOpenMenu(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setElemten(e.currentTarget);
    setMenuVisible(true);
  }

  function handleClose() {
    setMenuVisible(false);
    setElemten(undefined);
  }
  return (
    <Styles.Container isFake={isFake}>
      {children}
      <Styles.MoreButton onClick={handleOpenMenu}>
        <AiOutlineMore />
      </Styles.MoreButton>
      <MenuSection
        anchorEl={element}
        visible={menuVisible}
        handleClose={handleClose}
        handleEdit={onEdit}
      />
    </Styles.Container>
  );
};

export { SectionEditable };
