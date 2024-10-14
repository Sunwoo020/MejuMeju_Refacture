import { useNavigate } from "react-router-dom";
import { ButtonDark, ButtonLight } from "@components/common/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Progress from "../payment/Progress";
import CartItemList from "./cartItemList";
import CartSummary from "./cartSummary";
import * as Handler from "./cartUtil";
import * as styled from "./styles";
import * as Type from "@utils/types";
import { authTokenExpired } from "@utils/authExpired";

export const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<Type.CartItemsProps>({ itemCarts: [] });
  const authToken = localStorage.getItem("authToken");
  const access_token = `Bearer ${authToken}`;
  const [isCheckedAll, setIsCheckedAll] = useState(true);
  const [isCheckedItems, setIsCheckedItems] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!authToken || authTokenExpired(authToken)) {
      navigate("/login");
      return;
    }
  }, [authToken, navigate]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cart`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token,
        },
      })
      .then((res) => {
        setCartItems(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [access_token]);

  const handleToggleCheckAll = () => {
    Handler.handleCheckAll(cartItems, isCheckedAll, setIsCheckedAll, setIsCheckedItems);
  };

  const handleToggleCheckItem = (id: number) => {
    Handler.handleCheckItem(id, isCheckedItems, setIsCheckedItems);
  };

  const handleDecrease = async (id: number) => {
    await Handler.handleDecreaseQuantity(id, access_token, cartItems, setCartItems);
  };

  const handleIncrease = async (id: number) => {
    await Handler.handleIncreaseQuantity(id, access_token, cartItems, setCartItems);
  };

  const handleDelete = async () => {
    await Handler.handleDeleteSelectedItems(isCheckedItems, access_token, cartItems, setCartItems, setIsCheckedItems);
  };

  const handleCheckout = () => {
    if (cartItems.itemCarts.length === 0) {
      alert("장바구니가 비어 있습니다.");
      return;
    }
    navigate("/checkout");
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const checkedItems = cartItems.itemCarts.filter((item) => isCheckedItems[item.itemId]);
  const totalQuantity = checkedItems.reduce((acc, cur) => acc + cur.quantity, 0);
  const totalPrice = checkedItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

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
              handleCheckItem={handleToggleCheckItem}
              handleIncreaseQuantity={handleIncrease}
              handleDecreaseQuantity={handleDecrease}
              isCheckedAll={isCheckedAll}
              handleCheckAll={handleToggleCheckAll}
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
