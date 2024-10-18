import { useNavigate } from "react-router-dom";
import { ButtonDark, ButtonLight } from "@components/common/commonButton";
import { useState, useEffect, useCallback, useMemo } from "react";
import instance from "@utils/api/axiosInstance";
import Progress from "../payment/progress";
import CartItemList from "./cartItemList";
import CartSummary from "./cartSummary";
import * as Handler from "./handler";
import * as styled from "./styles";
import * as Type from "@utils/types";
import { authTokenExpired } from "@utils/authExpired";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<Type.CartItemsProps>({ itemCarts: [] });
  const [isCheckedAll, setIsCheckedAll] = useState(true);
  const [isCheckedItems, setIsCheckedItems] = useState<Record<number, boolean>>({});
  const authToken = localStorage.getItem("authToken") ?? "";

  const handlers = {
    handleCheckItem: (id: number) => Handler.handleCheckItem(id, isCheckedItems, setIsCheckedItems),
    handleIncreaseQuantity: (id: number) => handleQuantityChange(id, "increase"),
    handleDecreaseQuantity: (id: number) => handleQuantityChange(id, "decrease"),
    handleCheckAll: () => Handler.handleCheckAll(cartItems, isCheckedAll, setIsCheckedAll, setIsCheckedItems),
  };

  const fetchCartItems = useCallback(async () => {
    if (!authToken || authTokenExpired(authToken)) {
      navigate("/login");
      return;
    }

    try {
      const response = await instance.get(`/cart`);
      setCartItems(response.data.data);
    } catch (error) {
      console.error("Failed to fetch cart items", error);
    }
  }, [authToken, navigate]);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const handleQuantityChange = async (id: number, action: "increase" | "decrease") => {
    await Handler.handleQuantityChange(id, action, authToken, cartItems, setCartItems);
  };

  const handleDelete = async () =>
    await Handler.handleDeleteSelectedItems(isCheckedItems, authToken, cartItems, setCartItems, setIsCheckedItems);

  const handleCheckout = () => {
    cartItems.itemCarts.length === 0 ? alert("장바구니가 비어 있습니다.") : navigate("/checkout");
  };

  const handleCancel = () => navigate(-1);

  const checkedItems = useMemo(() => {
    return cartItems.itemCarts.filter((item) => isCheckedItems[item.itemId]);
  }, [cartItems, isCheckedItems]);

  const totalQuantity = useMemo(() => {
    return checkedItems.reduce((acc, cur) => acc + cur.quantity, 0);
  }, [checkedItems]);

  const totalPrice = useMemo(() => {
    return checkedItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  }, [checkedItems]);

  return (
    <styled.CartContainer isEmpty={cartItems.itemCarts.length === 0}>
      <styled.CartHeading>장바구니</styled.CartHeading>
      <styled.MainSection>
        <Progress />
        {cartItems.itemCarts.length > 0 ? (
          <>
            <CartItemList
              cartItems={cartItems}
              isCheckedItems={isCheckedItems}
              isCheckedAll={isCheckedAll}
              handlers={handlers}
            />
            <CartSummary
              totalQuantity={totalQuantity}
              totalPrice={totalPrice}
              handleDeleteSelectedItems={handleDelete}
            />
          </>
        ) : (
          <styled.NoDataContainer>
            <div>장바구니에 담긴 상품이 없습니다.</div>
          </styled.NoDataContainer>
        )}
        <styled.ButtonWrapper>
          <styled.ButtonDetail>
            <ButtonLight width="160px" height="60px" fontSize="18px" onClick={handleCancel}>
              뒤로가기
            </ButtonLight>
          </styled.ButtonDetail>
          <styled.ButtonDetail>
            <ButtonDark
              width="160px"
              height="60px"
              fontSize="18px"
              onClick={handleCheckout}
              disabled={cartItems.itemCarts.length === 0}
            >
              결제하기
            </ButtonDark>
          </styled.ButtonDetail>
        </styled.ButtonWrapper>
      </styled.MainSection>
    </styled.CartContainer>
  );
};

export default Cart;
