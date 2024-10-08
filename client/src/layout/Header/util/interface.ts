export interface IHeaderContainerProps {
  hovering: string;
  y: number;
  pathname?: string;
  isOpen?: string;
  style?: string;
}
export interface ScrollState {
  x: number;
  y: number;
}

export interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}
