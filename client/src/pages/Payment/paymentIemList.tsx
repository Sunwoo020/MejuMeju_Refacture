import * as styled from "./style";
import { useLocation } from "react-router-dom";
import * as Type from "@utils/types";
import { memo } from "react";

function Itemlist() {
  const location = useLocation();
  const items = location.state ? location.state.items : [];
  return (
    <styled.Itemlist>
      <div className="list">
        <div className="title2">
          <div>구매 정보</div>
        </div>
        <div className="listtitle">
          <div className="imglisttitle">제품 이미지</div>
          <div className="infotitle">제품명</div>
          <div className="eachtitle">개수</div>
          <div className="pricetitle">가격</div>
        </div>
        {items.map((item: Type.ItemOrder) => (
          <div key={item.itemId} className="cartitem">
            <div className="imglist">
              <img src={item.profile} alt={item.titleKor} />
            </div>
            <div className="info">{item.titleKor}</div>
            <div className="eachtag"> </div>
            <div className="each">{item.quantity}</div>
            <div className="price">{item.price.toLocaleString()} 원</div>
          </div>
        ))}
      </div>
    </styled.Itemlist>
  );
}
export default memo(Itemlist);
