import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ButtonDark, ButtonLight } from "@components/common/commonButton";
import Pagination from "@pages/salesItems/alcoholPage/Pagination";
import * as Type from "./util";
import * as styled from "./style";
import { authTokenExpired } from "@utils/authExpired";

const OrderPage = () => {
  const [orderlist, setOrderlist] = useState<Type.Orderitem[]>([]);
  const [filterlist, setFilterlist] = useState<Type.Orderitem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [choiceFronDay, setChoiceFronDay] = useState<string>("");
  const [choiceBackDay, setChoiceBackDay] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const navigate = useNavigate();
  const paginationData = filterlist.slice(5 * (currentPage - 1), 5 * currentPage);

  const Search = () => {
    const newData = orderlist.slice();
    const first = new Date(choiceFronDay);
    const second = new Date(choiceBackDay);
    setFilterlist(newData.filter((el) => new Date(el.orderedAt) >= first && new Date(el.orderedAt) <= second));
    setCurrentPage(1);
  };

  const handleDetailBtn = (itemId: number) => {
    navigate(`/alcohol/detail/${itemId}`);
  };

  const ReviewWindow = (itemId: number) => {
    const reviewCreate: Type.ReveiwUpdateProps = {
      itemId,
    };
    navigate(`/review/edit/${itemId}`, {
      state: { reviewCreate },
    });
  };

  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!authToken || authTokenExpired(authToken)) {
      navigate("/login");
      return;
    }
  }, [authToken, navigate]);

  const OrderPatchHandle = (orderId: number) => {
    const access_token = `Bearer ${authToken}`;
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/order/${orderId}/cancel`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: access_token,
            "ngrok-skip-browser-warning": "69420",
          },
        },
      )
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const access_token = `Bearer ${authToken}`;
    axios
      .get(`${process.env.REACT_APP_API_URL}/members/orders`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        const data = res.data.data
          .slice()
          .sort((a: Type.Order, b: Type.Order) => +new Date(b.orderedAt) - +new Date(a.orderedAt));
        const newData = [];
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].itemOrders.length; j++) {
            const singleData = data[i].itemOrders[j];
            singleData["orderedAt"] = data[i].orderedAt;
            singleData["orderStatus"] = data[i].orderStatus;
            singleData["pickupDate"] = data[i].pickupDate;
            singleData["orderId"] = data[i].orderId;
            newData.push(singleData);
          }
        }
        setOrderlist(newData);
        setFilterlist(newData);
      })
      .catch((err) => console.error(err));

    axios
      .get(`${process.env.REACT_APP_API_URL}/members`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => setUserName(res.data.data.displayName))
      .catch((err) => console.error(err));
  }, [authToken]);

  return (
    <>
      <styled.TotalStyled>
        <styled.OrderpageContainer>
          <styled.PageTitleStyled>
            <div>My Page</div>
            <MdOutlineKeyboardArrowRight size="20px" />
            <div>주문내역</div>
          </styled.PageTitleStyled>
          <styled.InfoStyled>
            {userName}님의 주문내역
            <p>총 {filterlist.length}건</p>
          </styled.InfoStyled>
          <styled.PeriodStyled>
            <p>주문기간조회</p>
            <input type="date" className="FrontInput" onChange={(e) => setChoiceFronDay(e.target.value)}></input>
            <p>~</p>
            <input type="date" className="BackInput" onChange={(e) => setChoiceBackDay(e.target.value)}></input>
            <ButtonDark width="70px" height="30%" onClick={Search}>
              조회
            </ButtonDark>
          </styled.PeriodStyled>
          <styled.TableStyled>
            <styled.LeftStyled>
              {paginationData.map((el, idx) => {
                return (
                  <div key={idx}>
                    <styled.EachList>
                      <styled.OrderEachList>
                        <div className="startdate">{el.orderedAt} 주문</div>
                        <styled.EachTitle>
                          <div className="order-status">{el.orderStatus}</div>
                        </styled.EachTitle>
                        <styled.DatePart>
                          {el.pickupDate === null ? (
                            <div></div>
                          ) : (
                            <div className="enddate">{el.pickupDate} 픽업예정</div>
                          )}
                        </styled.DatePart>
                        <div className="productname" onClick={() => handleDetailBtn(el.itemId)}>
                          {el.titleKor}
                        </div>
                        <div className="amount">{el.quantity}개</div>
                      </styled.OrderEachList>
                      <styled.OrderEachBtn>
                        {el.orderStatus === "픽업 완료" || el.orderStatus === "주문 취소" ? null : (
                          <ButtonLight
                            width="100px"
                            height="40%"
                            onClick={() => {
                              OrderPatchHandle(el.orderId);
                            }}
                          >
                            주문취소
                          </ButtonLight>
                        )}
                        {el.orderStatus !== "픽업 완료" ? null : (
                          <ButtonDark width="100px" height="40%" onClick={() => ReviewWindow(el.itemId)}>
                            후기작성
                          </ButtonDark>
                        )}
                      </styled.OrderEachBtn>
                    </styled.EachList>
                  </div>
                );
              })}
            </styled.LeftStyled>
          </styled.TableStyled>
          <styled.PagenationStyled>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              itemsPerPage={5}
              totalData={filterlist.length}
            />
          </styled.PagenationStyled>
        </styled.OrderpageContainer>
      </styled.TotalStyled>
    </>
  );
};

export default OrderPage;
