import styled from "styled-components";
import * as Common from "@styles/Common";

export const AlcoholDetailContainer = styled(Common.FlexCenterCol)`
  height: 100%;
  padding: 0 25px;
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const ReviewTitleBox = styled(Common.BorderBottomTitle)`
  ${Common.FlexRow};
  justify-content: space-between;
  align-items: center;

  .review_titletext {
    ${Common.fontSize(16)};
  }

  > button {
    ${Common.ButtonStyle};
    span {
      margin-right: 10px;
    }
  }
`;

export const ContentTitleBox = styled(Common.BorderBottomTitle)``;

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

  .content_note_bold,
  .content_info_bold {
    ${Common.fontSize(15)};
    font-weight: 600;
  }

  .content_note_bold {
    width: 70px;
  }

  .content_info_bold {
    width: 100px;
  }

  .content_detail_text {
    ${Common.fontSize(15)};
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
    ${Common.FlexCenterCol};
    width: 100%;

    img {
      width: 80%;
      max-width: 1000px;
      height: auto;
    }

    @media ${(props) => props.theme.breakpoints.mobileMax} {
      img {
        width: 100vw;
      }
    }
  }
`;

export const SuggestionTitle = styled(Common.FlexRow)`
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

export const ScrollContainer = styled(Common.FlexCenterRow)``;

export const ScrollBtn = styled(Common.ButtonStyle)``;

export const SuggestionBox = styled(Common.ScrollbarStyle)`
  width: 100%;
  ${Common.FlexRow};

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
    ${Common.FlexCol};
  }
`;

export const ItemImgBox = styled(Common.FlexCenterRow)`
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

  > .buy_titlebox {
    border-bottom: 3.5px solid ${({ theme }) => theme.colors.themeColor};
    padding-bottom: 10px;
    width: 100%;
    ${Common.FlexRow};
    justify-content: space-between;
  }

  > .buy_titlebox > .buy_title {
    ${Common.fontSize(28)};
    font-weight: 600;
  }

  .item_review_rating {
    ${Common.FlexCenterRow};

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
      ${Common.FlexCenterRow};
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
`;

export const ItemContentContainer = styled(Common.FlexCol)`
  margin: 2rem 0 5rem 0;
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  width: 100%;
  height: 100%;

  .detail_box {
    margin-top: 1rem;
    width: 100%;
  }

  > ul {
    ${Common.ScrollbarStyle};
    margin: auto 0;
    height: 210px;
    display: flex;
    gap: 0.5rem;

    .item_review_box {
      flex: 0 0 420px;
      background: #fff;
      height: 160px;
      ${Common.FlexCenterCol};
      box-shadow: 5px 5px 10px rgba(4, 4, 4, 0.433);
      border-radius: 7px;
      margin-right: 1rem;
      padding: 1rem;
    }
  }

  .review_no {
    ${Common.FlexCenterRow};
    height: 100px;
    margin-bottom: 30px;
  }
`;
