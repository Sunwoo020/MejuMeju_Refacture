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

export const ItemSearchContainer = styled(Common.FlexRow)`
  position: relative;
  width: 45%;
  height: 100%;

  > form {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  }

  > form > input {
    padding: 0.4rem;
    height: 60%;
    max-width: 300px;
    border: 1px solid gray;
    border-radius: 3px;
    width: 100%;
    outline: none;
  }

  > form > button {
    margin: 0.3rem;
    border: none;
    cursor: pointer;
    background: none;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 535px) {
    display: none;
  }
`;

export const SearchResultList = styled(Common.ScrollbarStyle)`
  position: absolute;
  top: 90%;
  max-width: 300px;
  width: 100%;
  right: 43px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

export const SearchResultItem = styled.li`
  color: black;
  padding: 12px 16px;
  display: block;
  cursor: pointer;

  &:hover {
    background: gray;
    color: #fff;
  }

  &:focus {
    outline: none;
    background: gray;
    color: #fff;
  }
`;

export const AlcoholContainer = styled.section`
  ${Common.FlexCenterCol};
  height: 100%;
  padding: 0 25px;
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const AlcoholTabNavBox = styled.div`
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${Common.fontSize(15)};
  height: 60px;

  @media screen and (max-width: 600px) {
    ${Common.fontSize(13)};
  }
`;

export const TabNav = styled.ul`
  width: 55%;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start;
  flex-direction: row;
  cursor: pointer;

  .sub_tab {
    padding: 10px 0;
    color: darkgray;
  }

  .tab_selected {
    border-bottom: 2.5px solid ${({ theme }) => theme.colors.fontColor};
    font-weight: bold;
    ${Common.fontSize(16)};
    color: ${({ theme }) => theme.colors.fontColor};
    transition: 0.5s;
  }

  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 100%;
    ${Common.fontSize(13)};
    gap: 0.5rem;

    .tab_selected {
      ${Common.fontSize(14)};
    }
  }
`;

export const SearchTextbox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  justify-content: flex-start;
  padding-top: 1rem;

  .string_text {
    ${Common.fontSize(23)};
    font-weight: 700;
  }

  .default_text {
    padding: 5px;
  }
`;
