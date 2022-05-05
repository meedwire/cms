import React, { useState } from "react";
import { uuid } from "../../utils";
import { useModal } from "../Modal/hooks";
import { ModalTabs } from "../ModalTabs";
import { SectionEditable } from "../SectionEditable";
import * as Styles from "./styles";
import { IPropsTabs } from "./types";

const initialData = [
  {
    title: "Tab1",
    contentID: uuid(),
  },
  {
    title: "Tab2",
    contentID: uuid(),
  },
  {
    title: "Tab3",
    contentID: uuid(),
  },
];

const Tabs: React.FC<IPropsTabs> = ({
  data = initialData,
  onSelect,
  isFake,
}) => {
  const [active, setActive] = useState(0);
  const { setVisible } = useModal();

  function handleSelect(index: number, id: string) {
    if (onSelect) onSelect(id);
    setActive(index);
  }

  function handleEdit() {
    setVisible(<ModalTabs />);
  }

  return (
    <SectionEditable onEdit={handleEdit} isFake={isFake}>
      <Styles.Container>
        <Styles.TabContainer>
          {data.map((tab, i) => (
            <Styles.TabItem
              key={tab.contentID}
              active={active === i}
              onClick={() => handleSelect(i, tab.contentID)}
            >
              <Styles.Title>{tab.title}</Styles.Title>
            </Styles.TabItem>
          ))}
        </Styles.TabContainer>
      </Styles.Container>
    </SectionEditable>
  );
};

export { Tabs };
