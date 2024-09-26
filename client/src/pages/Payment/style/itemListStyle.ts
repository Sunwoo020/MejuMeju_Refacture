import styled from "styled-components";
import * as Common from "@styles/Common";

export const Itemlist = styled.div`
  ${Common.FlexCenterCol};
  width: 100%;

  & div.list {
    ${Common.FlexCol};
    justify-content: space-between;
    align-items: center;
    padding: 0 3%;
    width: 90%;
    margin-top: 50px;
  }

  & div.title2 {
    ${Common.fontSize(30)};
    display: flex;
    justify-content: flex-start;
    padding: 5% 0 3% 3.7%;
    width: 100%;
  }

  & div.listtitle {
    display: flex;
    align-items: center;
    width: 85%;
    height: 30px;
    border-bottom: 1px solid rgba(60, 60, 60, 0.1);
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  & div.imglisttitle {
    width: 20%;
    padding-left: 4%;
    ${Common.FlexCenter};
  }

  & div.infotitle,
  & div.eachtitle,
  & div.pricetitle {
    ${Common.FlexCenter};
    padding-left: 3%;
  }

  & div.cartitem {
    ${Common.FlexCenterRow};
    width: 85%;
    font-size: 15px;
    border-bottom: 1px solid rgba(60, 60, 60, 0.1);

    & div.imglist {
      ${Common.FlexCenter};
      width: 20%;
      height: 150px;

      & img {
        width: 250px;
        height: 90%;
        object-fit: contain;
      }
    }

    & div.info {
      ${Common.FlexCenter};
      width: 100%;
      font-size: 16px;
    }

    & div.each {
      ${Common.FlexCenter};
      width: 22%;
    }

    & div.price {
      ${Common.FlexCenter};
      width: 12%;
      @media screen and (max-width: 767px) {
        width: 50%;
      }
    }
  }
`;
