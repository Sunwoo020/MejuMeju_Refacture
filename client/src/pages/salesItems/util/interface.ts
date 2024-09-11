import * as CommonType from "@utils/types";
import { ItemReviewsType } from "@utils/types/AlcholInterfaces";
export interface ItemReviewsProps {
  itemId: number;
  reviewRating: number;
}

export interface ItemDatailProps {
  data: CommonType.AlcoholData;
}

export interface QuantityProps {
  quantity: number;
  maxQuantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

export interface ItemReviewListProps {
  reviews: ItemReviewsType[];
  itemId: number;
}

export interface ReveiwUpdateProps {
  mode: string;
  itemId: number;
  reviewId: number;
}
