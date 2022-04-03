import React from "react";
import { useRecoilState } from "recoil";
import { contentAtom } from "../../recoil";
import { Button } from "../GlobalComponents";
import { Input } from "../Input";
import { useModal } from "../Modal/hooks";
import * as Styles from "./styles";

const ModalContentTitle: React.FC = () => {
  const [{ contentName }, setState] = useRecoilState(contentAtom);
  const { close } = useModal();

  return (
    <Styles.Container>
      <h3>Digite o título do conteúdo</h3>
      <Styles.InputTitle
        value={contentName}
        onChangeText={(text) =>
          setState((prev) => ({
            ...prev,
            contentName: text,
          }))
        }
      />
      <Styles.ButtonSave onClick={close}>Salvar</Styles.ButtonSave>
    </Styles.Container>
  );
};

export { ModalContentTitle };
