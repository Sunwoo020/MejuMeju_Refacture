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
export interface HeaderContainerProps {
  children: React.ReactNode;
  y: number;
  pathname: string;
}

export interface LogoContainerProps {
  y: number;
  isHover: boolean;
}
