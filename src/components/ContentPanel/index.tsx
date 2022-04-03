import { ref, set } from "firebase/database";
import React from "react";
import { useRecoilState } from "recoil";
import { db } from "../../firebase";
import { contentAtom } from "../../recoil";
import { Section } from "../Section";
import { SectionContenTitle } from "../SectionContenTitle";
import { Tabs } from "../Tabs";
import * as Styles from "./styles";

const Components = {
  Tabs: Tabs,
  Section: Section,
};

const ContentPanel: React.FC = () => {
  const [{ contentName, contentStructure }, setState] =
    useRecoilState(contentAtom);

  function handleSave() {
    set(ref(db), { contentStructure, contentName });
  }
  return (
    <Styles.Container>
      <SectionContenTitle title={contentName} />
      {contentStructure.map((item) =>
        //@ts-ignore
        React.createElement(Components[item.componentType], {
          //@ts-ignore
          ...item.props,
          isFake: false,
        })
      )}
      <button onClick={handleSave}>Salvar</button>
    </Styles.Container>
  );
};

export { ContentPanel };
