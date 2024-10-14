import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ButtonDark, ButtonLight } from "@components/common/Button";
import Pagination from "@pages/salesItems/alcoholPage/Pagination";
import PriceDisplay from "@components/common/PriceDisplay";
import * as styled from "./style";
import * as Type from "./util";

function authTokenExpired(authToken: string) {
  if (!authToken) {
    return true;
  }
  const decodedToken = decodeAuthToken(authToken);
  const expSeconds = decodedToken.exp;
  const nowSeconds = Math.floor(Date.now() / 1000);
  return expSeconds < nowSeconds;
}
function decodeAuthToken(authToken: string) {
  const payload = authToken.split(".")[1];
  const decodedPayload = atob(payload);
  const { exp } = JSON.parse(decodedPayload);
  return { exp };
}

const LikePage = () => {
  const [likelist, setLikelist] = useState<Type.Likeitem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigate();
  const paginationData = likelist.slice(5 * (currentPage - 1), 5 * currentPage);
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!authToken || authTokenExpired(authToken)) {
      navigate("/login");
      return;
    }
  });
  const LikeGetHandle = () => {
    const access_token = `Bearer ${authToken}`;
    axios
      .get(`${process.env.REACT_APP_API_URL}/members/favorite`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        setLikelist(res.data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    LikeGetHandle();
  }, []);

  const handleDeleteBtn = (itemId: number) => {
    const access_token = `Bearer ${authToken}`;
    axios
      .delete(`${process.env.REACT_APP_API_URL}/items/${itemId}/favorite`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: access_token,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then(() => {
        LikeGetHandle();
      })
      .catch((err) => console.error(err));
  };

  const handleDetailBtn = (itemId: number) => {
    navigate(`/alcohol/detail/${itemId}`);
  };

  const handleCartBtn = (itemId: number) => {
    const access_token = `Bearer ${authToken}`;
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/cart`,
        {
          itemId: itemId,
          quantity: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: access_token,
            "ngrok-skip-browser-warning": "69420",
          },
        },
      )
      .then(() => navigate("/cart"))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const access_token = `Bearer ${authToken}`;
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
  }, []);

  return (
    <>
      <styled.TotalStyled>
        <styled.PageContainer>
          <styled.PageTitleStyled>
            <div>My Page</div>
            <MdOutlineKeyboardArrowRight size="20px" />
            <div>찜리스트</div>
          </styled.PageTitleStyled>
          <styled.InfoStyled>
            {userName}님의 찜리스트
            <p>총 {likelist.length}건</p>
          </styled.InfoStyled>
          <styled.TableStyled>
            <styled.LeftStyled>
              {paginationData.map((el, idx) => {
                return (
                  <div key={idx}>
                    <styled.EachList>
                      <styled.EachTitle>
                        <img src={el.profile} onClick={() => handleDetailBtn(el.itemId)} />
                        <div className="productname" onClick={() => handleDetailBtn(el.itemId)}>
                          {el.titleKor}
                        </div>
                        <div className="productprice">
                          <PriceDisplay price={el.price} />원
                        </div>
                      </styled.EachTitle>
                      <styled.EachBtn>
                        <ButtonDark width="100px" height="30%" onClick={() => handleCartBtn(el.itemId)}>
                          장바구니
                        </ButtonDark>
                        <ButtonLight width="100px" height="30%" onClick={() => handleDeleteBtn(el.itemId)}>
                          삭제
                        </ButtonLight>
                      </styled.EachBtn>
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
              totalData={likelist.length}
            />
          </styled.PagenationStyled>
        </styled.PageContainer>
      </styled.TotalStyled>
    </>
  );
};

export default LikePage;
