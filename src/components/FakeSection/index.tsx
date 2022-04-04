import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { contentAtom, modalSectionContent } from "../../recoil";
import { ButtonAdd } from "../ButtonAdd";
import { GlobalContainer, GlobalTitle } from "../GlobalComponents";
import { useModal } from "../Modal/hooks";
import { ModalContentSection } from "../ModalContentSection";
import * as Styles from "./styles";

const FakeSection: React.FC = () => {
  const { contentName } = useRecoilValue(contentAtom);
  const { setVisible } = useModal();
  return (
    <GlobalContainer>
      {contentName && (
        <ButtonAdd onClick={() => setVisible(<ModalContentSection />, "lg")} />
      )}
      <GlobalTitle>Section</GlobalTitle>
      <Styles.FakeSection>
        <Styles.TitleSection>Title Section</Styles.TitleSection>
      </Styles.FakeSection>
      <div>
        <p>Section content</p>
      </div>
    </GlobalContainer>
  );
};

export { FakeSection };
