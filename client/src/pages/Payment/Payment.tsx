import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as styled from "./style";
import { ButtonDark, ButtonLight } from "@components/common/commonButton";
import "react-datepicker/dist/react-datepicker.css";
import Progress from "./Progress";
import PaymnetUserInfo from "./PaymentUserinfo";
import Itemlist from "./Paymentitemlist";
import Payinfo from "./Paymentpayinfo";
import { UserProps } from "@utils/types";
import { useSelector } from "react-redux";
import axiosInstance from "@utils/api/axiosInstance";
import Modal from "@layout/header/Logoutmodal";
import * as Type from "@utils/types";

const Payment = () => {
  const location = useLocation();
  const items = location.state ? location.state.items : [];
  const navigate = useNavigate();
  const selectdata = useSelector((state: Type.stateProps) => state.markerState);
  const [userInfo, setUserInfo] = useState<UserProps>({} as UserProps);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateUserInfo = (data: UserProps) => {
    setUserInfo(data);
  };

  const authToken = localStorage.getItem("authToken");

  const fetchUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/members");
      updateUserInfo(response.data);
    } catch (error) {
      console.error("Error fetching user info:", error);
      navigate("/login");
    }
  };

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
      return;
    }
  }, [authToken, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchUserInfo();
  }, []);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handlePayment = async () => {
    if (!selectedDate || !selectdata || !items.length) {
      return setIsModalOpen(true);
    }

    try {
      const cartResponse = await axiosInstance.get("/cart");
      const { itemCarts } = cartResponse.data.data;
      const isDuplicate = itemCarts.some((item: Type.ItemOrder) => item.itemId === items[0].itemId);

      if (isDuplicate) {
        navigate("/CheckoutChang", { state: { items, userInfo } });
      } else {
        const itemOrder = { itemId: items[0].itemId, quantity: items[0].quantity };
        await axiosInstance.post("/cart", itemOrder);
        navigate("/CheckoutChang", { state: { items, userInfo } });
      }
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  const handleDateChange = (date: Date | null) => {
    const today = new Date();
    if (date && date < today) {
      setIsModalOpen(true);
    } else {
      setSelectedDate(date);
    }
  };

  return (
    <styled.PaymentContainer>
      <h2 className="payment"></h2>
      <div className="main">
        <Progress />
        <PaymnetUserInfo userInfo={userInfo} updateUserInfo={updateUserInfo} />
        <Itemlist />
        <Payinfo onDateChange={handleDateChange} />
        <div className="button">
          <div className="buttonDetail">
            <ButtonLight width="160px" height="60px" fontSize="18px" onClick={() => navigate(-1)}>
              뒤로가기
            </ButtonLight>
          </div>
          <div className="buttonDetail">
            <ButtonDark width="160px" height="60px" fontSize="18px" onClick={handlePayment}>
              결제하기
            </ButtonDark>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="modal">날짜 및 픽업 장소를 입력해 주세요</div>
        </Modal>
      )}
    </styled.PaymentContainer>
  );
};

export default Payment;
