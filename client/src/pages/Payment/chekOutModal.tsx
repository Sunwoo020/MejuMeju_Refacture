import { loadTossPayments } from "@tosspayments/payment-sdk";
import { nanoid } from "nanoid";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ItemOrder } from "@utils/types";
import { useNavigate } from "react-router-dom";
import { authTokenExpired } from "@utils/authExpired";

const clientKey = "test_ck_4vZnjEJeQVxQPQONwmMrPmOoBN0k";

const CheckOutModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = location.state ? location.state.userInfo : [];
  const items: ItemOrder[] = location.state ? location.state.items : [];
  const selectedDate = location.state ? location.state.selectedDate : null;
  const orderNames = items.map((item) => item.titleKor);
  const orderName = orderNames.join(", ");
  const { totalPrice } = items.reduce(
    (acc: { totalquantity: number; totalPrice: number }, item: ItemOrder) => {
      acc.totalquantity += item.quantity;
      acc.totalPrice += item.price * item.quantity;
      return acc;
    },
    { totalquantity: 0, totalPrice: 0 },
  );
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    // Check if the authToken is missing or expired
    if (!authToken || authTokenExpired(authToken)) {
      navigate("/login");
      return;
    }
  }, [authToken, navigate]);

  useEffect(() => {
    loadTossPayments(clientKey).then((tossPayments) => {
      tossPayments
        .requestPayment("카드", {
          amount: totalPrice,
          orderId: nanoid(),
          orderName: orderName,
          customerName: userInfo.realName,
          customerEmail: userInfo.email,
          successUrl: `${window.location.origin}/PaymentConfirm`,
          failUrl: `${window.location.origin}/fail`,
        })
        .catch(function (error) {
          if (error.code === "USER_CANCEL") {
            // Handle user cancel
          } else if (error.code === "INVALID_CARD_COMPANY") {
            // Handle invalid card company
          }
        });
    });
  }, [totalPrice, items, userInfo, selectedDate]);

  return <script src="https://js.tosspayments.com/v1/payment"></script>;
};

export default CheckOutModal;
