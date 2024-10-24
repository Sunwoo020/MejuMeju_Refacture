export interface Sample {
  string: string;
  number: number;
  boolean: boolean;
  object: object;
}

export interface LoginInfo {
  email: string;
  password: string;
}

export interface SignInfo {
  realName: string;
  displayName: string;
  email: string;
  password: string;
  phone: string;
  birthDate: string;
  mailKey: string;
}

export interface BtnProps {
  children: string;
  width: string;
  height: string;
  fontSize?: string;
  fontWeight?: string;
  border?: string;
  borderRadius?: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: string;
}

export interface Icon {
  icon: string;
}

export interface AlertProps {
  title?: string;
  text: string;
  onClickOk: () => void;
  onClickCancel?: () => void;
}

export interface PriceType {
  price: number;
}

export interface reviewRatingProps {
  reviewRating: number;
  size: number;
}
