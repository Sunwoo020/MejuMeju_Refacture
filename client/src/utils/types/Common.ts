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
export type DateProps = {
  dateState: {
    Date: Date | null;
  };
};

export type Datatype = {
  cartId: string;
  itemCarts: [ItemOrder];
};
export type stateProps = {
  loginState?: string;
  markerState?: {
    address: string;
    choice: boolean;
    comment: string;
    lat: number;
    lng: number;
    marketId: number;
    name: string;
    phone: string;
    workTime: string;
  };
};

export interface PayinfoProps {
  onDateChange: (date: Date | null) => void;
}
export interface ChildComponentProps {
  userInfo: UserProps;
  updateUserInfo: (user: UserProps) => void;
}
