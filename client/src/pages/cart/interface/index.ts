import * as Type from "@utils/types";

export interface CartItemListProps {
  cartItems: Type.CartItemsProps;
  isCheckedItems: Record<number, boolean>;
  isCheckedAll: boolean;
  handlers: {
    handleCheckItem: (id: number) => void;
    handleIncreaseQuantity: (id: number) => void;
    handleDecreaseQuantity: (id: number) => void;
    handleCheckAll: () => void;
  };
}

export interface CartSummaryProps {
  totalQuantity: number;
  totalPrice: number;
  handleDeleteSelectedItems: () => void;
}
