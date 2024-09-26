import styled from "styled-components";
import * as Common from "@styles/Common";

export const Payinfostyle = styled.div`
  ${Common.FlexCenterCol};
  width: 100%;

  & div.title3 {
    ${Common.fontSize(30)};
    display: flex;
    justify-content: flex-start;
    padding: 5% 0 3% 11%;
    width: 100%;
  }

  & div.mainpay {
    ${Common.FlexCol};
    justify-content: flex-start;
    width: 70%;
    height: 100%;
    font-size: 16px;
  }

  & div.paylist {
    ${Common.FlexCol};
    justify-content: center;
    border: 1px solid rgba(60, 60, 60, 0.1);
  }

  & div.firstline {
    ${Common.FlexCenterRow};
    justify-content: space-around;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  & div.totalQ,
  & div.totalP {
    ${Common.FlexCenter};
    height: 50px;
  }

  & div.totalQ {
    width: 40%;
  }

  & div.totalP {
    width: 60%;
  }

  & div.tq,
  & div.tp {
    ${Common.FlexCenter};
    height: 100%;
    background-color: rgba(217, 217, 217, 0.5);
    border: 1px solid rgba(60, 60, 60, 0.1);
    font-weight: bold;
  }

  & div.tq {
    width: 180px;
    max-width: 180px;
    min-width: 161px;
  }

  & div.tp {
    width: 322px;
  }

  & div.totalQuantity,
  & div.totalprice {
    ${Common.FlexCenter};
    width: 100%;
    height: 100%;
    border: 1px solid rgba(60, 60, 60, 0.1);
  }

  & div.totalQuantity {
    width: 441px;
  }

  & div.totalprice {
    width: 483px;
  }

  & div.secondline {
    ${Common.FlexCenterRow};
    justify-content: space-between;
    height: 50px;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }

  & div.pickupdate {
    ${Common.FlexCenter};
    width: 180px;
    height: 100%;
    background-color: rgba(217, 217, 217, 0.5);
    border: 1px solid rgba(60, 60, 60, 0.1);
    font-weight: bold;
    min-width: 162px;
  }

  & div.pickdate {
    ${Common.FlexCenter};
    width: 100%;
    height: 100%;
    border: 1px solid rgba(60, 60, 60, 0.1);
    font-size: 16px;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    &::placeholder {
      color: #c3c3c3;
    }
    &:focus {
      outline: none;
    }
  }

  & div.pickselect,
  & div.pickselect2,
  & div.pickselect3 {
    ${Common.FlexCenter};
    height: 100%;
    border: 1px solid rgba(60, 60, 60, 0.5);
    font-size: 14px;
    &:hover {
      cursor: pointer;
    }
  }

  & div.thirdline {
    ${Common.FlexCenterRow};
    justify-content: space-between;
    height: 700px;
    width: 100%;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }

  & div.place,
  & div.placeinfo {
    ${Common.FlexCenter};
    height: 100%;
    @media screen and (max-width: 767px) {
      flex-direction: column;
      width: 100%;
    }
  }

  & div.place {
    width: 40%;
  }

  & div.pickupplace,
  & div.placename,
  & div.placeadd,
  & div.placenumber,
  & div.placecomment {
    ${Common.FlexCenter};
    background-color: rgba(217, 217, 217, 0.5);
    border: 1px solid rgba(60, 60, 60, 0.1);
    font-weight: bold;
  }

  & div.pickupplace,
  & div.placename,
  & div.placeadd,
  & div.placenumber,
  & div.placecomment2 {
    width: 100%;
  }

  & div.placename2,
  & div.placeadd2,
  & div.placenumber2 {
    ${Common.FlexCenter};
    height: 70%;
    border: 1px solid rgba(60, 60, 60, 0.1);
  }

  & div.map {
    ${Common.FlexCenter};
    width: 60%;
    border: 1px solid rgba(60, 60, 60, 0.1);
    @media screen and (max-width: 767px) {
      height: 400px;
      width: 100%;
    }
    & section {
      width: 100%;
      max-height: 690px;
      margin-top: 10px;
      overflow: hidden;
      @media screen and (max-width: 767px) {
        margin-top: 0;
        max-height: 400px;
      }
    }
  }

  & div.calender {
    ${Common.FlexCenter};
  }
`;
