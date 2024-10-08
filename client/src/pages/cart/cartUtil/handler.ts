import axios from "axios";
import * as Type from "@utils/types";

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

export const handleDecreaseQuantity = async (
  id: number,
  access_token: string,
  cartItems: Type.CartItemsProps,
  setCartItems: React.Dispatch<React.SetStateAction<Type.CartItemsProps>>,
) => {
  try {
    await axios.put(`${process.env.REACT_APP_API_URL}/cart/decrease/${id}`, null, {
      headers: { Authorization: access_token },
    });

    setCartItems((prev) => ({
      ...prev,
      itemCarts: prev.itemCarts.map((item) => (item.itemId === id ? { ...item, quantity: item.quantity - 1 } : item)),
    }));
  } catch (error) {
    console.log(error);
  }
};

export const handleIncreaseQuantity = async (
  id: number,
  access_token: string,
  cartItems: Type.CartItemsProps,
  setCartItems: React.Dispatch<React.SetStateAction<Type.CartItemsProps>>,
) => {
  try {
    await axios.put(`${process.env.REACT_APP_API_URL}/cart/increase/${id}`, null, {
      headers: { Authorization: access_token },
    });

    setCartItems((prev) => ({
      ...prev,
      itemCarts: prev.itemCarts.map((item) => (item.itemId === id ? { ...item, quantity: item.quantity + 1 } : item)),
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
