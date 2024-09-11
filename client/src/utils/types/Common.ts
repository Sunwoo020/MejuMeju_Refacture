export interface TitleProps {
  fontSize: string;
  fontWeight: string;
}

export interface StepProps {
  type: "on" | "off";
}

export interface UserProps {
  memberId: string;
  realName: string;
  displayName: string;
  email: string;
  phone: string;
}

export interface ItemOrder {
  itemId: number;
  titleKor: string;
  price: number;
  profile: string;
  quantity: number;
}
export interface Props {
  items: ItemOrder[];
  cartId?: number;
}
export type TypeProps = {
  type: string;
};
export interface FormData {
  name: string;
  nick: string;
  birth: string;
  number: string;
  email: string;
  code: string;
  password: string;
  passwordCheck: string;
}
