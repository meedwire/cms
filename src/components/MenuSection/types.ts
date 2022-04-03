export interface IPropsMenu {
  anchorEl?: Element;
  visible?: boolean;
  handleClose: () => void;
  handleEdit?: () => void;
}

export interface IContainerProps {
  position: {
    x?: number;
    y?: number;
  };
}
