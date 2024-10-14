import { useNavigate } from "react-router-dom";
import * as styled from "./styles";
import handleLogout from "./authMenu";
import { authTokenExpired } from "@utils/authExpired";
interface NavigationMenuProps {
  y: number;
  isHover: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ y, isHover }) => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");

  return (
    <styled.Ulist hovering={isHover.toString()} y={y}>
      <ul className="banner1">
        Product
        <styled.StyledList className="li1" hovering={isHover.toString()} y={y} onClick={() => navigate("/alcohol")}>
          주류 리스트
        </styled.StyledList>
      </ul>

      <ul className="banner2">
        Order
        <styled.StyledList className="li4" hovering={isHover.toString()} y={y} onClick={() => navigate("/cart")}>
          장바구니
        </styled.StyledList>
      </ul>

      <ul className="banner3">
        My Page
        <styled.StyledList
          className="li3"
          hovering={isHover.toString()}
          y={y}
          onClick={() => navigate("/mypage/likepage")}
        >
          찜
        </styled.StyledList>
        <styled.StyledList
          className="li5"
          hovering={isHover.toString()}
          y={y}
          onClick={() => navigate("/mypage/orderpage")}
        >
          주문 내역
        </styled.StyledList>
        <styled.StyledList
          className="li6"
          hovering={isHover.toString()}
          y={y}
          onClick={() => navigate("/mypage/changeinfo")}
        >
          개인 정보 수정
        </styled.StyledList>
      </ul>

      <ul className="banner4">
        Help
        <styled.StyledList className="li7" hovering={isHover.toString()} y={y} onClick={() => navigate("/helpcenter")}>
          자주 묻는 질문
        </styled.StyledList>
      </ul>

      <ul className="banner6">
        {authToken ? (
          authTokenExpired(authToken) ? (
            <div onClick={() => navigate("/login")}>로그인</div>
          ) : (
            <div onClick={handleLogout}>로그아웃</div>
          )
        ) : (
          <div onClick={() => navigate("/login")}>로그인</div>
        )}
      </ul>
    </styled.Ulist>
  );
};

export default NavigationMenu;
