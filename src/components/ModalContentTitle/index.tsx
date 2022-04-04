import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { contentAtom } from "../../recoil";
import { useModal } from "../Modal/hooks";
import * as Styles from "./styles";

const ModalContentTitle: React.FC = () => {
  const [{ contentName }, setState] = useRecoilState(contentAtom);
  const { close } = useModal();

  function changeText(text?: string) {
    setState((prev) => ({
      ...prev,
      contentName: text,
    }));
  }

  return (
    <>
      <DialogTitle>Digite o título do conteúdo</DialogTitle>
      <DialogContent>
        <Styles.InputTitle value={contentName} onChangeText={changeText} />
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancelar</Button>
        <Button onClick={close}>Salvar</Button>
      </DialogActions>
    </>
  );
};

export { ModalContentTitle };
