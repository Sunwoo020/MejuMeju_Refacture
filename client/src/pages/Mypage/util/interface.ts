export type TableProsp = {
  setBody: React.Dispatch<React.SetStateAction<Bodytype>>;
  userInfo: Datatype | null;
  isOauth: boolean;
};
export type Datatype = {
  realName: string;
  displayName: string;
  birth: string;
  phone: string;
  email: string;
};
export interface Bodytype {
  displayName: string;
  phone: string;
  password: string;
  passwordCheck: string;
}

export interface Likeitem {
  titleKor: string;
  price: number;
  quantity: number;
  capacity: number;
  reviewRating: number;
  itemId: number;
  checked: boolean;
  profile: string;
}
