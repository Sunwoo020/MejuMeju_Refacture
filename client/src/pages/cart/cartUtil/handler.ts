import axios from "axios";
import * as Type from "@utils/types";

export const QuantityActions = {
  INCREASE: "increase",
  DECREASE: "decrease",
} as const;

type QuantityAction = (typeof QuantityActions)[keyof typeof QuantityActions];

export const handleCheckAll = (
  cartItems: Type.CartItemsProps,
  isCheckedAll: boolean,
  setIsCheckedAll: (checked: boolean) => void,
  setIsCheckedItems: React.Dispatch<React.SetStateAction<Record<number, boolean>>>,
) => {
  const newCheckedItems: Record<number, boolean> = {};
  cartItems.itemCarts.forEach((item) => {
    newCheckedItems[item.itemId] = !isCheckedAll;
  });
  setIsCheckedAll(!isCheckedAll);
  setIsCheckedItems(newCheckedItems);
};

export const handleCheckItem = (
  id: number,
  isCheckedItems: Record<number, boolean>,
  setIsCheckedItems: React.Dispatch<React.SetStateAction<Record<number, boolean>>>,
) => {
  setIsCheckedItems((prev) => ({
    ...prev,
    [id]: !prev[id],
  }));
};

export const handleQuantityChange = async (
  id: number,
  action: QuantityAction,
  access_token: string,
  cartItems: Type.CartItemsProps,
  setCartItems: React.Dispatch<React.SetStateAction<Type.CartItemsProps>>,
) => {
  const url = `${process.env.REACT_APP_API_URL}/cart/${action}/${id}`;
  try {
    await axios.put(url, null, {
      headers: { Authorization: access_token },
    });

    setCartItems((prev) => ({
      ...prev,
      itemCarts: prev.itemCarts.map((item) =>
        item.itemId === id
          ? { ...item, quantity: action === QuantityActions.INCREASE ? item.quantity + 1 : item.quantity - 1 }
          : item,
      ),
    }));
  } catch (error) {
    console.log(error);
  }
};

export const handleDeleteSelectedItems = async (
  isCheckedItems: Record<number, boolean>,
  access_token: string,
  cartItems: Type.CartItemsProps,
  setCartItems: React.Dispatch<React.SetStateAction<Type.CartItemsProps>>,
  setIsCheckedItems: React.Dispatch<React.SetStateAction<Record<number, boolean>>>,
) => {
  const selectedItems = Object.keys(isCheckedItems)
    .filter((key) => isCheckedItems[Number(key)])
    .map(Number);

  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}/cart/delete`, {
      data: { ids: selectedItems },
      headers: { Authorization: access_token },
    });
    setCartItems((prev) => ({
      ...prev,
      itemCarts: prev.itemCarts.filter((item) => !selectedItems.includes(item.itemId)),
    }));
    setIsCheckedItems({});
  } catch (error) {
    console.log(error);
  }
};
