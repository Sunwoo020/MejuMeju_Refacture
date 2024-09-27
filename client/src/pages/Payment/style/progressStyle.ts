import styled from "styled-components";
import { useLocation } from "react-router-dom";
import * as Common from "@styles/Common";

export const ProgressStyle = styled.div`
  ${Common.FlexCenterCol};
  margin-top: 150px;
  width: 100%;

  & div.progress {
    ${Common.FlexRow};
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;
    padding-left: 100px;
    width: 100%;

    @media screen and (max-width: 767px) {
      padding-left: 15%;
    }
  }

  & div.subco,
  & div.subco1,
  & div.subco2 {
    display: none;
    float: left;
    justify-content: flex-start;
    height: 30px;
    ${Common.fontSize(40)};
  }

  & div.subco {
    ${({}) => useLocation().pathname === "/cart" && `display: flex;`}
  }

  & div.subco1 {
    ${({}) => useLocation().pathname === "/payment" && `display: flex;`}
  }

  & div.subco2 {
    ${({}) => useLocation().pathname === "/PaymentConfirm" && `display: flex;`}
  }

  & ol {
    ${Common.FlexCenterRow};
    height: 50px;
    width: 40%;

    @media screen and (max-width: 767px) {
      display: none;
    }

    & li {
      ${Common.FlexCenter};
      flex-direction: row;
      justify-content: flex-start;
      height: 30px;
    }

    & li.first {
      width: 120px;
      ${({}) => useLocation().pathname === "/cart" && `color: #a84448;`}
    }

    & li.second {
      width: 160px;
      ${({}) => useLocation().pathname === "/payment" && `color: #a84448;`}
    }

    & li.third {
      ${({}) => useLocation().pathname === "/PaymentConfirm" && `color: #a84448;`}
    }

    & span {
      justify-content: flex-start;
      height: 30px;
      width: 150px;
    }

    & span.numbering {
      ${Common.FlexCenter};
      width: 30px;
      ${Common.fontSize(22)};
    }

    & span.titlename1,
    & span.titlename2,
    & span.titlename3 {
      ${Common.FlexCenter};
      justify-content: center;
    }

    & span.titlename1 {
      width: 60px;
    }

    & span.titlename2 {
      width: 100px;
    }

    & span.titlename3 {
      width: 60px;
    }

    & span.arrow {
      ${Common.FlexCenter};
      width: 20px;
    }
  }

  @media screen and (max-width: 767px) {
    padding-left: 10%;
  }
`;
