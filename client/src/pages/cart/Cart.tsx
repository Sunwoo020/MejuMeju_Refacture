import { useNavigate } from "react-router-dom";
import * as styled from "./styles";
import * as Type from "@utils/types";
import { ButtonDark, ButtonLight } from "@components/common/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Progress from "../payment/Progress";

function authTokenExpired(authToken: string) {
  if (!authToken) {
    // authToken is missing
    return true; // treat as expired
  }

  // authToken is present
  const decodedToken = decodeAuthToken(authToken);
  const expSeconds = decodedToken.exp;
  const nowSeconds = Math.floor(Date.now() / 1000);

  return expSeconds < nowSeconds; // true if expired, false if valid
}

function decodeAuthToken(authToken: string) {
  // Implement the logic to decode the authToken
  // You can use a JWT decoding library or your own implementation
  const payload = authToken.split(".")[1];
  const decodedPayload = atob(payload);
  const { exp } = JSON.parse(decodedPayload);
  return { exp };
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<Type.CartItemsProps>({ itemCarts: [] });

  const authToken = localStorage.getItem("authToken");
  const access_token = `Bearer ${authToken}`;

  useEffect(() => {
    // Check if the authToken is missing or expired
    if (!authToken || authTokenExpired(authToken)) {
      navigate("/login");
      return;
    }
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cart`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        setCartItems(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [isCheckedAll, setIsCheckedAll] = useState(true);
  const [isCheckedItems, setIsCheckedItems] = useState<Record<number, boolean>>(
    cartItems.itemCarts.reduce<Record<number, boolean>>((acc, cur) => {
      acc[cur.itemId] = true;
      return acc;
    }, {}),
  );

  useEffect(() => {
    setIsCheckedAll(Object.values(isCheckedItems).every((value) => value));
  }, [isCheckedItems]);

  useEffect(() => {
    setIsCheckedItems(
      cartItems.itemCarts.reduce<{ [key: number]: boolean }>((acc, cur) => {
        acc[cur.itemId] = true;
        return acc;
      }, {}),
    );
  }, [cartItems]);

  const checkedItems = cartItems.itemCarts.filter((item) => isCheckedItems[item.itemId]);
  const totalQuantity = checkedItems.reduce((acc, cur) => acc + cur.quantity, 0);

  const cart = checkedItems.map((item) => {
    return {
      itemId: item.itemId,
      quantity: item.quantity,
    };
  });
  const payload = {
    cart: cart,
  };

  const totalPrice = checkedItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  const handleCheckout = () => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}/cart`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then(() => {
        navigate("/payment", { state: { items: checkedItems } });
      })
      .catch((err) => {
        console.log("Error during patch request:", err);
      });
  };

  const handleCancel = () => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}/cart`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        console.log("Patch request successful:", res.data);
        navigate(-1);
      })
      .catch((err) => {
        console.log("Error during patch request:", err);
      });
  };

  const handleCheckAll = () => {
    setIsCheckedAll(!isCheckedAll);
    setIsCheckedItems(
      cartItems.itemCarts.reduce<{ [key: number]: boolean }>((acc, cur) => {
        acc[cur.itemId] = !isCheckedAll;
        return acc;
      }, {}),
    );
  };
  const handleCheckItem = (id: number) => {
    setIsCheckedItems((prev) => {
      const newState = { ...prev };
      newState[id] = !newState[id];
      const isCheckedAll = Object.values(newState).every((value) => value);
      setIsCheckedAll(isCheckedAll);
      return newState;
    });
  };
  const handleDecreaseQuantity = (id: number) => {
    setCartItems((prevItems) => ({
      itemCarts: prevItems.itemCarts.map((cartItem) => {
        if (cartItem.itemId === id && cartItem.quantity > 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      }),
    }));

    setIsCheckedItems((prev) => ({
      ...prev,
      [id]: true,
    }));
  };
  const handleIncreaseQuantity = (id: number) => {
    setCartItems((prevItems) => ({
      itemCarts: prevItems.itemCarts.map((item) => {
        if (item.itemId === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    }));
    setIsCheckedItems((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleDeleteSelectedItems = async () => {
    const selectedIds = Object.keys(isCheckedItems).filter((id) => isCheckedItems[parseInt(id)]);
    const newCartItems = {
      itemCarts: cartItems.itemCarts.filter((item) => !selectedIds.includes(String(item.itemId))),
    };
    setCartItems(newCartItems);
    const newCheckedItems = { ...isCheckedItems };
    selectedIds.forEach((id: string) => delete newCheckedItems[parseInt(id)]);
    setIsCheckedItems(newCheckedItems);

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/cart`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token,
          "ngrok-skip-browser-warning": "69420",
        },
        data: { itemIds: selectedIds.map((id) => parseInt(id)) },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <styled.CartContainer isEmpty={cartItems.itemCarts.length === 0}>
      <styled.CartHeading>장바구니</styled.CartHeading>

      <styled.MainSection>
        <Progress />
        {cartItems.itemCarts.length > 0 ? (
          <styled.ListContainer>
            <styled.ListTitle>
              <styled.AllCheckboxContainer>
                <styled.CheckBox checked={isCheckedAll} onChange={handleCheckAll} />
                <styled.LabelAllSelect>전체 선택</styled.LabelAllSelect>
              </styled.AllCheckboxContainer>
              <div>제품 이미지</div>
              <div>제품명</div>
              <div>개수</div>
              <div>가격</div>
            </styled.ListTitle>
            {cartItems.itemCarts.map((item) => (
              <styled.CartItem key={item.itemId}>
                <styled.CheckboxContainer>
                  <styled.CheckBox
                    checked={isCheckedItems[item.itemId] || false}
                    onChange={() => handleCheckItem(item.itemId)}
                  />
                  <label>선택</label>
                </styled.CheckboxContainer>
                <styled.ImgList>
                  <img src={item.profile} alt={item.titleKor} />
                </styled.ImgList>
                <styled.InfoContainer>{item.titleKor}</styled.InfoContainer>
                <styled.EachTag>
                  <styled.DecreaseButton
                    disabled={item.quantity === 1}
                    onClick={() => handleDecreaseQuantity(item.itemId)}
                  >
                    -
                  </styled.DecreaseButton>
                  <div>{item.quantity}</div>
                  <styled.IncreaseButton onClick={() => handleIncreaseQuantity(item.itemId)}>+</styled.IncreaseButton>
                </styled.EachTag>
                <div>{item.price.toLocaleString()} 원</div>
              </styled.CartItem>
            ))}
          </styled.ListContainer>
        ) : (
          <styled.NoDataContainer>
            <div>장바구니에 담긴 상품이 없습니다.</div>
          </styled.NoDataContainer>
        )}
        {cartItems.itemCarts.length > 0 ? (
          <styled.DeleteLine>
            <ButtonLight width="120px" height="50px" fontSize="12px" onClick={handleDeleteSelectedItems}>
              선택한 제품 삭제
            </ButtonLight>
            <styled.TotalSummary>
              <b>
                <b className="b-title">총 개수</b>
                <b>{totalQuantity > 0 ? `${totalQuantity.toLocaleString()}개` : "0개"}</b>
              </b>
              <b>
                <b className="b-title">총 결제 금액</b>
                <b>{totalPrice > 0 ? `${totalPrice.toLocaleString()} 원` : "0원"}</b>
              </b>
            </styled.TotalSummary>
          </styled.DeleteLine>
        ) : (
          <styled.EmptyContainer></styled.EmptyContainer>
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
