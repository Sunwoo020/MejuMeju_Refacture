import * as Type from "@utils/types";

export interface CartItemListProps {
  cartItems: Type.CartItemsProps;
  isCheckedItems: Record<number, boolean>;
  handleCheckItem: (id: number) => void;
  handleIncreaseQuantity: (id: number) => void;
  handleDecreaseQuantity: (id: number) => void;
  isCheckedAll: boolean;
  handleCheckAll: () => void;
}

export interface CartSummaryProps {
  totalQuantity: number;
  totalPrice: number;
  handleDeleteSelectedItems: () => void;
}
