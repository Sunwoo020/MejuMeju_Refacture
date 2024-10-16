import styled from "styled-components";
import * as Common from "@styles/Common";

export const ItemContentContainer = styled(Common.FlexCol)`
  margin: 2rem 0 5rem 0;
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  width: 100%;

  .detail_box {
    margin-top: 1rem;
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.mobileMax} {
    margin: 0.5rem 0 3rem 0;
  }
`;

export const ContentTitleBox = styled(Common.BorderBottomTitle)`
  display: flex;
  width: 100%;
  font-weight: 600;
  margin: 0.5rem 0;

  .content_titletext {
    font-size: 1.5rem;
    padding-bottom: 0.3rem;
  }

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    .content_titletext {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

export const ContentBox = styled(Common.FlexCol)`
  justify-content: center;
  gap: 7rem;

  .content_datail_title {
    ${Common.fontSize(20)};
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 1px;
    margin-bottom: 3px;
  }
  .content_note_bold {
    width: 70px;
    ${Common.fontSize(15)};
    font-weight: 600;
  }
  .content_info_bold {
    width: 100px;
    ${Common.fontSize(15)};
    font-weight: 600;
  }
  .content_detail_text {
    ${Common.fontSize(14)};
  }
  .content_text_box {
    ${Common.FlexCol};

    li {
      ${Common.FlexRow};
      line-height: 30px;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    gap: 2rem;
    padding-left: 2rem;
    flex-direction: column;

    .content_datail_title {
      ${Common.fontSize(18)};
    }
    .content_note_bold,
    .content_info_bold {
      ${Common.fontSize(14)};
    }
  }
`;

export const DetailInfoBox = styled(Common.FlexCenterCol)`
  margin-top: 60px;

  .info_img_box {
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      width: 80%;
      max-width: 1000px;
      height: auto;
    }

    @media screen and (max-width: 480px) {
      img {
        width: 100vw;
      }
    }
  }
`;

export const SuggestionTitle = styled(Common.BorderBottomTitle)`
  display: flex;
  width: 100%;
  font-weight: 400;
  margin: 8rem 0 1rem 0;

  .content_titletext {
    ${Common.fontSize(24)};
  }
  @media ${(props) => props.theme.breakpoints.mobileMax} {
    margin-top: 4rem;
    .content_titletext {
      ${Common.fontSize(20)};
    }
  }
`;

export const ScrollContainer = styled(Common.FlexRow)`
  align-items: center;
`;

export const ScrollBtn = styled(Common.ButtonStyle)`
  background: transparent;
  font-size: 2rem;
  @media ${(props) => props.theme.breakpoints.mobileMax} {
    display: none;
  }
`;

export const SuggestionBox = styled(Common.ScrollbarStyle)`
  width: 100%;
  display: flex;
  overflow: auto;
  white-space: nowrap;
  padding: 20px 0;

  li {
    flex: none;
    margin-right: 10px;
    width: 230px;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    li {
      width: 190px;
    }
  }
`;

export const AlcoholItemBuyContainer = styled(Common.FlexRow)`
  margin-top: 30px;
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  width: 100%;

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    display: block;
  }
`;

export const StyledItemImgBox = styled(Common.FlexCenter)`
  flex: 0 1 50%;
  padding: 0 20px;

  img {
    height: 510px;
    object-fit: scale-down;
    min-width: 380px;
    width: 80%;
  }

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    margin-bottom: 3rem;

    img {
      min-width: 0;
      height: 250px;
      width: 80%;
    }
  }
`;

export const StyledItemBuyBox = styled(Common.FlexCol)`
  flex: 0 1 50%;
  padding: 0 50px;
  justify-content: center;

  > .buy_titlebox {
    border-bottom: 3.5px solid ${({ theme }) => theme.colors.themeColor};
    padding-bottom: 10px;
    width: 100%;
    ${Common.FlexRow};
    justify-content: space-between;
    align-items: center;
  }
  > .buy_titlebox > .buy_title {
    ${Common.fontSize(28)};
    font-weight: 600;
  }
  > .item_review_rating {
    ${Common.FlexRow};
    align-items: center;
    p {
      margin-top: 5px;
      ${Common.fontSize(14)};
      font-weight: 600;
    }
  }
  .buy_price {
    padding: 30px 0;
    ${Common.fontSize(16)};

    > .buy_item_content {
      ${Common.FlexRow};
      line-height: 30px;
      > .buy_item_content_title {
        flex: 0 0 30%;
      }
    }
    .buy_price_text {
      ${Common.fontSize(18)};
      font-weight: 600;
    }
  }
  .buy_count {
    width: 100%;
    padding: 20px;
    border-radius: 6px;
    border: 1px solid lightgray;
    margin-bottom: 20px;

    p {
      ${Common.fontSize(13)};
      margin-bottom: 12px;
    }
    .quantity_box {
      ${Common.FlexRow};
      align-items: center;
      justify-content: space-between;

      .item_price {
        ${Common.fontSize(24)};
        font-weight: 700;
      }
    }
  }

  .buy_cart {
    width: 100%;
    ${Common.FlexRow};
    gap: 10px;
  }
  @media screen and (max-width: 900px) {
    padding: 0 30px 0 0;
  }

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    padding: 0;
    .buy_titlebox > .buy_title {
      ${Common.fontSize(20)};
      font-weight: 600;
    }
    .buy_count > .quantity_box > .item_price {
      ${Common.fontSize(20)};
      font-weight: 700;
    }
    .buy_price {
      > .buy_item_content {
        ${Common.fontSize(14)};
      }
      .buy_price_text {
        ${Common.fontSize(16)};
      }
    }
  }
`;
