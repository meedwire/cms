export interface IPropsTabs {
  data?: [
    {
      title: string;
      contentID: string;
    }
  ];
  isFake?: boolean;
  onSelect?: (id: string) => void;
}

export interface IPropsTabItem {
  active?: boolean;
}
