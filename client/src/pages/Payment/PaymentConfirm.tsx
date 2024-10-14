import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Progress from "./Progress";
import axios from "axios";
import { ButtonLight } from "@components/common/Button";
import { useSelector } from "react-redux";
import * as styled from "./style";
import * as Type from "@utils/types";
import { authTokenExpired } from "@utils/authExpired";

const PaymentConfirm = () => {
  const [searchParams] = useSearchParams();
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("orderId");
  const paymentKey = urlParams.get("paymentKey");
  const amount = Number(urlParams.get("amount"));
  const navigate = useNavigate();
  const [itemOrders, setItemOrders] = useState<{ itemId: number; quantity: number }[]>([]);
  const [itemCartdelete, setItemCartdelete] = useState<{ itemId: number }[]>([]);

  const pickupDate = useSelector((state: Type.DateProps) => {
    const date = state.dateState.Date;
    if (date) {
      const formattedDate = date.toISOString().substring(0, 10);
      return formattedDate;
    }
    return null;
  });

  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!authToken || authTokenExpired(authToken)) {
      navigate("/login");
      return;
    }
  }, [authToken, navigate]);

  const fetchData = async () => {
    const access_token = `Bearer ${localStorage.getItem("authToken")}`;
    await axios
      .get(`${process.env.REACT_APP_API_URL}/cart`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((response) => {
        const data: Type.Datatype = response.data.data;
        const itemOrders = data.itemCarts.map(({ itemId, quantity }) => ({ itemId, quantity }));
        setItemOrders(itemOrders);
        const itemCartdelete = data.itemCarts.map(({ itemId }) => ({ itemId }));
        setItemCartdelete(itemCartdelete);
      })
      .catch((err) => {
        console.log(err);
      });

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/payment`,
        { orderId, paymentKey, amount },
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        },
      );
    } catch (err) {
      console.log(err);
    }

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (itemOrders.length > 0) {
      const access_token = `Bearer ${localStorage.getItem("authToken")}`;
      try {
        const body = {
          itemOrders: itemOrders,
          pickupDate: pickupDate,
        };
        axios.post(`${process.env.REACT_APP_API_URL}/order`, body, {
          headers: {
            "Content-Type": "application/json",
            Authorization: access_token,
            "ngrok-skip-browser-warning": "69420",
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [itemOrders, pickupDate]);

  useEffect(() => {
    const itemIds = itemCartdelete.map((item) => item.itemId);
    const access_token = `Bearer ${localStorage.getItem("authToken")}`;
    try {
      axios.delete(`${process.env.REACT_APP_API_URL}/cart`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token,
          "ngrok-skip-browser-warning": "69420",
        },
        data: { itemIds },
      });
    } catch (err) {
      console.log(err);
    }
  }, [itemCartdelete]);

  return (
    <styled.PaymentConfirmContainer>
      <h2></h2>
      <div className="main">
        <Progress />
        <div className="reason">{`주문 아이디: ${orderId}`}</div>
        <div className="reason">{`결제 금액: ${amount.toLocaleString()}원`}</div>
        <div className="button">
          <ButtonLight width="160px" height="60px" fontSize="18px" onClick={() => navigate("/")}>
            홈으로
          </ButtonLight>
        </div>
      </div>
    </styled.PaymentConfirmContainer>
  );
};

export default PaymentConfirm;
