import styled from "styled-components";
import * as Common from "@styles/Common";

export const AlcoholListContainer = styled.div`
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  height: 100%;
  width: 100%;
  margin-bottom: 3rem;
`;

export const AlcoholListBox = styled(Common.FlexRow)`
  margin-top: 30px;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  li {
    width: 25%;
    margin-bottom: 20px;
    @media screen and (max-width: 1297px) {
      width: 33%;
    }
    @media screen and (max-width: 860px) {
      width: 50%;
    }
  }
`;

export const AlcoholItemContainer = styled(Common.FlexCol)`
  color: ${({ theme }) => theme.colors.fontColor};
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 15px;
  .item_img {
    width: 100%;
    height: 300px;
    ${Common.FlexCenterCol};
    border-bottom: 3.5px solid ${({ theme }) => theme.colors.bg};
    margin-bottom: 6px;
    position: relative;
    img {
      height: 90%;
      max-width: 100%;
    }
    &:hover {
      border: none;
      border-bottom: 3.5px solid ${({ theme }) => theme.colors.themeColor};
    }
  }
  .item_content {
    padding: 3px 0 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .item_title {
      ${Common.fontSize(18)};
      font-weight: 500;
    }
    .item_discount_rate {
      font-weight: 700;
      color: #a84448;
      margin-right: 10px;
    }
    .item_price {
      font-weight: 700;
      line-height: 18px;
    }
    .item_review_rating {
      display: flex;
      align-items: center;

      p {
        margin-top: 5px;
        ${Common.fontSize(14)};
        font-weight: 600;
      }
    }
  }

  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    .item_img {
      height: 190px;
    }
    .item_content > .item_title {
      ${Common.fontSize(15)};
    }
    .item_content > .item_price {
      ${Common.fontSize(15)};
    }
  }
`;
