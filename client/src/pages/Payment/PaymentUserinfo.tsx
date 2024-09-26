import * as styled from "./style";
import { UserProps } from "@utils/types";
import { memo } from "react";
import * as Type from "@utils/types";

function PaymnetUserInfo({ userInfo }: Type.ChildComponentProps) {
  return (
    <styled.BuyerInfo>
      <div className="userinfo">
        <div className="buyerinfo">
          <div className="title">구매자 정보</div>
          <div className="buyername">
            <div className="buyer">이름 </div>
            <div className="username">{userInfo.realName}</div>
          </div>
          <div className="buyeremail">
            <div className="email">이메일 </div>
            <div className="useremail">{userInfo.email}</div>
          </div>
          <div className="buyerphoneNumber">
            <div className="phone">전화번호 </div>
            <div className="userphone">{userInfo.phone}</div>
          </div>
        </div>
      </div>
    </styled.BuyerInfo>
  );
}

export default memo(PaymnetUserInfo);
