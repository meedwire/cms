import { Dialog, DialogContent, Slide } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { useModal } from "./hooks";
import { modalState } from "./state";
import * as Styles from "./styles";

import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal: React.FC = () => {
  const { visible, children, maxWidth } = useRecoilValue(modalState);
  const { close } = useModal();

  if (!visible) return null;

  return (
    <Dialog
      fullWidth
      keepMounted
      maxWidth={maxWidth}
      open={visible}
      onClose={close}
      TransitionComponent={Transition}
    >
      {children}
    </Dialog>
  );
};

export { Modal };
