import { Breakpoint } from "@mui/material";
import { ReactNode, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { modalState } from "./state";

export const useModal = () => {
  const setModalState = useSetRecoilState(modalState);

  const setVisible = useCallback(
    (children: ReactNode, maxWidth?: Breakpoint) => {
      setModalState({ children, visible: true, maxWidth });
    },
    [setModalState]
  );

  const close = useCallback(() => {
    setModalState({ visible: false });
  }, [setModalState]);

  return {
    setVisible,
    close,
  };
};
