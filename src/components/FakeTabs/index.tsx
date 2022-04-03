import React, { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
import { contentAtom } from "../../recoil";
import { uuid } from "../../utils";
import { ButtonAdd } from "../ButtonAdd";
import { GlobalContainer, GlobalTitle } from "../GlobalComponents";
import { useModal } from "../Modal/hooks";
import { ModalTabs } from "../ModalTabs";
import * as Styles from "./styles";

const fakeData = [
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

const FakeTabs: React.FC = () => {
  const { contentName } = useRecoilValue(contentAtom);
  const { setVisible } = useModal();
  const [active, setActive] = useState(0);

  const renderItem = useCallback(() => {
    return fakeData.map((item, index) => (
      <Styles.TabItem
        key={item.contentID}
        isActive={active === index}
        onClick={() => setActive(index)}
      >
        {item.title}
      </Styles.TabItem>
    ));
  }, [active]);

  return (
    <GlobalContainer>
      {contentName && <ButtonAdd onClick={() => setVisible(<ModalTabs />)} />}
      <GlobalTitle>Tabs</GlobalTitle>
      <Styles.TabContainer>{renderItem()}</Styles.TabContainer>
    </GlobalContainer>
  );
};

export { FakeTabs };
