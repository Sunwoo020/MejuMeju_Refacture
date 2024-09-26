import styled from "styled-components";
import { useLocation } from "react-router-dom";
export const ProgressStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;

  width: 100%;
  ${({ theme }) => theme.common.flexCenterCol};

  & div.progress {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 50px;
    padding-left: 100px;
    width: 100%;
    @media screen and (max-width: 767px) {
      padding-left: 15%;
    }
  }
  & div.subco {
    display: none;
    float: left;
    justify-content: flex-start;
    height: 30px;
    font-size: 40px;
    ${({}) =>
      useLocation().pathname === "/cart" &&
      `display:flex;
    `}
  }
  & div.subco1 {
    display: none;
    float: left;
    justify-content: flex-start;
    height: 30px;
    font-size: 40px;
    ${({}) =>
      useLocation().pathname === "/payment" &&
      `display:flex;
    `}
  }
  & div.subco2 {
    display: none;
    float: left;
    justify-content: flex-start;
    height: 30px;
    font-size: 40px;
    ${({}) =>
      useLocation().pathname === "/PaymentConfirm" &&
      `display:flex;
    `}
  }

  & ol {
    display: flex;
    ${({ theme }) => theme.common.flexCenterRow};
    height: 50px;
    width: 40%;
    @media screen and (max-width: 767px) {
      display: none;
    }
    & li {
      height: 30px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
    & li.first {
      width: 120px;
      ${({}) =>
        useLocation().pathname === "/cart" &&
        `
      color: #a84448;
    `}
      ${({ theme }) => theme.common.flexCenter};
    }

    & li.second {
      width: 160px;
      ${({}) =>
        useLocation().pathname === "/payment" &&
        `
      color: #a84448;
    `}
      ${({ theme }) => theme.common.flexCenter};
    }
    & li.third {
      ${({}) =>
        useLocation().pathname === "/PaymentConfirm" &&
        `
      color: #a84448;
    `}
      ${({ theme }) => theme.common.flexCenter};
    }
    & span {
      height: 30px;
      justify-content: flex-start;
      width: 150px;
    }

    & span.numbering {
      width: 30px;
      font-size: 22px;
      ${({ theme }) => theme.common.flexCenter};
    }

    & span.titlename1 {
      width: 60px;
      justify-content: center;
      ${({ theme }) => theme.common.flexCenter};
    }

    & span.titlename2 {
      width: 100px;
      justify-content: center;
      ${({ theme }) => theme.common.flexCenter};
    }

    & span.titlename3 {
      width: 60px;
      justify-content: center;
      ${({ theme }) => theme.common.flexCenter};
    }

    & span.arrow {
      width: 20px;
      ${({ theme }) => theme.common.flexCenter};
    }
  }

  /* 여기까지 */
  @media screen and (max-width: 767px) {
    padding-left: 10%;
  }
`;
