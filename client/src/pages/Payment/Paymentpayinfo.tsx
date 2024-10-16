import { useLocation, useNavigate } from "react-router-dom";
import * as Type from "@utils/types";
import * as styled from "./style";
import DatePicker from "react-datepicker";
import { useState, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import Place from "@pages/map/place";
import { useDispatch } from "react-redux";
import { setDate } from "../../utils/redux/slice/store";
import Modal from "@layout/header/Logoutmodal";

function Paymentpayinfo({ onDateChange }: Type.PayinfoProps) {
  const location = useLocation();
  const items = location.state ? location.state.items : [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { totalquantity, totalPrice } = items.reduce(
    (acc: { totalquantity: number; totalPrice: number }, item: Type.ItemOrder) => {
      acc.totalquantity += item.quantity;
      acc.totalPrice += item.price * item.quantity;
      return acc;
    },
    { totalquantity: 0, totalPrice: 0 },
  );

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const selectdata = useSelector((state: Type.stateProps) => state.markerState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePickDateClick = useCallback(() => {
    setIsCalendarOpen(true);
  }, []);

  const handleDateChange = useCallback(
    (date: Date | null) => {
      const today = new Date();
      if (date && date < today) {
        setIsModalOpen(true);
      } else {
        setSelectedDate(date);
        setIsCalendarOpen(false);
        onDateChange(date);
        dispatch(setDate(date ? date.getTime() : null));
      }
    },
    [onDateChange, dispatch],
  );

  const handlemapClick = useCallback(() => {
    navigate("/place", { state: { items: items, selectedDate: selectedDate } });
  }, [items, selectedDate, navigate]);

  return (
    <styled.Payinfostyle>
      <div className="title3">
        <div>결제 정보</div>
      </div>
      <div className="mainpay">
        <div className="paylist">
          <div className="firstline">
            <div className="totalQ">
              <div className="tq">총 개수 </div>
              <div className="totalQuantity">{totalquantity.toLocaleString()} 개</div>
            </div>
            <div className="totalP">
              <div className="tp">총 결제 금액 </div>
              <div className="totalprice"> {totalPrice.toLocaleString()} 원</div>
            </div>
          </div>
        </div>
        <div>
          <div className="thirdline">
            <div className="place">
              <div className="pickupplace">픽업 정보</div>
              <div className="placeinfo">
                <div className="place1">
                  <div className="placename">가게 이름</div>
                  <div className="placename2">{selectdata?.name}</div>
                </div>
                <div className="place2">
                  <div className="placeadd">도로명 주소</div>
                  <div className="placeadd2">{selectdata?.address}</div>
                </div>
                <div className="place3">
                  <div className="placenumber">가게 번호</div>
                  <div className="placenumber2">{selectdata?.phone}</div>
                </div>
                <div className="place4">
                  <div className="placecomment">가게 정보</div>
                  <div className="placecomment2">
                    <div>{selectdata?.comment}</div>
                    <div>{selectdata?.workTime}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="map" onClick={handlemapClick}>
              <Place />
            </div>
          </div>
          <div className="secondline">
            <div className="pickupdate">픽업 예정 날짜</div>
            <div className="pickdate">{selectedDate ? selectedDate.toLocaleDateString() : "날짜를 선택해주세요."}</div>
            {isCalendarOpen ? (
              <div className="pickselect3">
                {isCalendarOpen && <DatePicker selected={selectedDate} onChange={handleDateChange} inline />}
              </div>
            ) : (
              <div className="pickselect">
                <div className="pickselect2" onClick={handlePickDateClick}>
                  픽업 예정 날짜 선택
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="modal">날짜를 오늘 이후로 해주세요</div>
        </Modal>
      )}
    </styled.Payinfostyle>
  );
}

export default memo(Paymentpayinfo);
