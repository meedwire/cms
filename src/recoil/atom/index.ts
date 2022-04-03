import { atom } from "recoil";

interface IAtomContent {
  contentName?: string;
  contentStructure: any[];
}

export const contentAtom = atom<IAtomContent>({
  key: "content",
  default: {
    contentName: "",
    contentStructure: [],
  },
});

export const modalTabsContent = atom({
  key: "modalTabsContent",
  default: {
    visible: false,
  },
});

export const modalSectionContent = atom({
  key: "modalSectionContent",
  default: {
    visible: false,
  },
});
