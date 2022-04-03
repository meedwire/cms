import React from "react";
import { ButtonAdd } from "../ButtonAdd";
import { GlobalContainer } from "../GlobalComponents";
import { useModal } from "../Modal/hooks";
import { ModalContentTitle } from "../ModalContentTitle";
import * as Styles from "./styles";

const Content: React.FC = ({ children }) => {
  const { setVisible } = useModal();

  return (
    <GlobalContainer>
      <ButtonAdd onClick={() => setVisible(<ModalContentTitle />)} />
      <Styles.Title>Container Component</Styles.Title>
      <Styles.FakeSection>
        <Styles.FakeHeader />
        <Styles.FakeSimpleText />
        <Styles.FakeSimpleText />
        <Styles.FakeSimpleText />
      </Styles.FakeSection>
    </GlobalContainer>
  );
};

export { Content };
