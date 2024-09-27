import styled from "styled-components";
import * as Common from "@styles/Common";

export const BuyerInfo = styled.div`
  ${Common.FlexCenterCol};
  width: 100%;

  @media screen and (max-width: 767px) {
    ${Common.fontSize(14)};
  }

  & div.userinfo {
    width: 80%;
  }

  & div.title {
    ${Common.fontSize(30)};
    padding-bottom: 2%;
    padding-top: 5%;
  }

  & div.buyinfo {
    ${Common.FlexCenterCol};
    width: 100%;
    height: 500px;
  }

  & div.buyername,
  & div.buyeremail,
  & div.buyerphoneNumber {
    ${Common.FlexCenter};
    justify-content: flex-start;
    width: 100%;
    padding-top: 1.25%;
    padding-bottom: 1.25%;
    border-bottom: 1px solid rgba(60, 60, 60, 0.05);
  }

  & div.buyer,
  & div.email,
  & div.phone {
    ${Common.FlexCenter};
    justify-content: flex-start;
    font-size: 18px;
    width: 13%;
    padding-right: 2%;
    border-right: 1px solid rgba(60, 60, 60, 0.5);

    @media screen and (max-width: 767px) {
      ${Common.fontSize(12)};
      width: 13.3%;
      padding-right: 0%;
    }
  }

  & div.username,
  & div.useremail,
  & div.userphone {
    ${Common.FlexCenter};
    justify-content: flex-start;
    padding-left: 2%;
  }

  & input.putnumber,
  & input.putname,
  & input.putemail {
    border-radius: 4%;
    ${Common.fontSize(16)};
    border: 1px solid rgba(60, 60, 60, 0.1);
  }

  & div.errmsg {
    color: red;
    ${Common.fontSize(14)};
  }

  & div.editopen {
    width: 100%;
    height: 100%;
  }

  & div.editPhone,
  & div.editName,
  & div.editEmail {
    height: 16px;
    ${Common.FlexRow};
    align-items: center;
    padding-left: 15px;
    ${Common.fontSize(16)};
  }

  & button.putbutton {
    border-radius: 4%;
    border: 1px solid rgba(60, 60, 60, 0.1);
  }
`;
