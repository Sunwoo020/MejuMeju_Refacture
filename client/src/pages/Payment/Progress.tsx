import * as styled from "./style";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Progress() {
  return (
    <styled.ProgressStyle>
      <div className="progress">
        <div className="subco">장바구니</div>
        <div className="subco1">결제 페이지</div>
        <div className="subco2">결제 완료</div>
        <ol>
          <li className="first">
            <span className="numbering">01</span>
            <span className="titlename1">장바구니</span>
            <span className="arrow">
              <MdOutlineKeyboardArrowRight />
            </span>
          </li>
          <li className="second">
            <span className="numbering">02</span>
            <span className="titlename2">주문작성 / 결제</span>
            <span className="arrow">
              <MdOutlineKeyboardArrowRight />
            </span>
          </li>
          <li className="third">
            <span className="numbering">03</span>
            <span className="titlename3">주문 완료</span>
          </li>
        </ol>
      </div>
    </styled.ProgressStyle>
  );
}
