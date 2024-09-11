import * as Type from "./";
export interface AlcoholListData {
  itemId: number;
  titleKor: string;
  discountRate: number;
  price: number;
  categories: string[];
  profile: string;
  reviewCount: number;
  reviewRating: number;
}

// 주류 리스트 상세 데이터
export interface AlcoholData {
  itemId: number;
  titleKor: string;
  titleEng: string;
  profile: string;
  detailedProfile: string;
  categories: string[];
  price: number;
  capacity: number;
  volume: number;
  country: string;
  aroma: string;
  taste: string;
  field: string;
  sales: string;
  quantity: number;
  discountRate: string;
  reviewCount: number;
  reviewRating: number;
}

// 주류 리스트 아이템 정렬 Props
export interface SortItemsProps {
  totalData: number;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

// 주류 리스트 데이터 Props
export interface AlcoholListProps {
  data: AlcoholListData[] | null;
  totalData: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  size: number;
}

// 페이지네이션 Props
export interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  totalData: number;
}

// 장바구니에 담긴 Props 배열
export interface CartItemsProps {
  cartId?: number;
  itemCarts: Type.ItemOrder[];
}

export interface CheckoutProps {
  onClose?: () => void;
  onPaymentRequest?: () => Promise<void>;
}

// 아이템 리뷰 리스트 조회
export interface ItemReviewsType {
  memberId: number;
  reviewId: number;
  title: string;
  content: string;
  rating: number;
  displayName: string;
  createdAt: string;
  modifiedAt: string;
  reviewImages: string[];
}

// 리뷰 수정 데이터 Type
export interface RequestData {
  title: string;
  content: string;
  rating: number;
}

// 아이템 검색 props
export interface SearchProps {
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<AlcoholListData[] | null>>;
  currentPage: number;
  setTotalData: React.Dispatch<React.SetStateAction<number | null>>;
  size: number;
}
