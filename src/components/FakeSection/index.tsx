import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { contentAtom, modalSectionContent } from "../../recoil";
import { ButtonAdd } from "../ButtonAdd";
import { GlobalContainer, GlobalTitle } from "../GlobalComponents";
import * as Styles from "./styles";

const FakeSection: React.FC = () => {
  const { contentName } = useRecoilValue(contentAtom);
  const [_, setState] = useRecoilState(modalSectionContent);
  return (
    <GlobalContainer>
      {contentName && <ButtonAdd onClick={() => setState({ visible: true })} />}
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
