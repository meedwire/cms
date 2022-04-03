import { ReactNode } from "react";
import { atom } from "recoil";

interface IAtomModalState {
  visible: boolean;
  children?: ReactNode;
}

export const modalState = atom<IAtomModalState>({
  key: "modalState",
  default: {
    visible: false,
    children: undefined,
  },
});
