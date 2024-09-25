import styled from "styled-components";
import * as Common from "@styles/Common";

export const ReviewEditContainer = styled.section`
  ${Common.FlexCenterCol};
  height: 100%;
  padding: 0 25px;
  color: ${({ theme }) => theme.colors.fontColor};
  margin-bottom: 30px;
`;

export const ReviewFormBox = styled.div`
  margin-top: 50px;
  ${Common.FlexCenterCol};
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  width: 100%;
  font-size: 15px;

  form {
    width: 100%;
  }

  .review_intake_box {
    ${Common.FlexRow};
    width: 100%;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid lightgray;
    text-align: left;

    h3 {
      padding-left: 10px;
      ${({ theme }) => Common.fontSize(28)};
      font-weight: 700;
    }

    .review_cell {
      ${Common.FlexCenterRow};
    }
  }

  .item_info_box {
    ${Common.FlexCenterRow};
    padding: 0.5rem 0;
    border-bottom: 1px solid lightgray;

    img {
      margin: 1rem 2rem;
      max-height: 200px;
      width: auto;
    }

    .review_cell {
      ${Common.FlexCol};
      justify-content: center;
      gap: 0.5rem;

      .item_name {
        ${({ theme }) => Common.fontSize(16)};
        font-weight: 600;
      }

      .review_rating {
        ${Common.FlexRow};
        gap: 3px;

        > button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
      }
    }
  }

  @media screen and (max-width: 490px) {
    margin-top: 10px;

    form > .review_intake_box > h3 {
      ${({ theme }) => Common.fontSize(20)};
    }

    .item_info_box {
      justify-content: space-between;
      padding: 0 1rem;
    }

    .item_info_box > img {
      margin: 1rem 0.3rem;
      max-width: 100px;
      width: auto;
    }
  }
`;

export const ReviewContentBox = styled.div`
  padding: 2rem 0;
  ${Common.FlexCenterRow};
  border-bottom: 1px solid lightgray;

  .content_title {
    flex: 0 0 25%;
    display: flex;
    justify-content: center;
    ${({ theme }) => Common.fontSize(16)};
    font-weight: 700;
  }

  .content_input {
    flex: 0 1 75%;

    .photo_info {
      margin: 1rem 0;
      ${({ theme }) => Common.fontSize(14)};
      font-weight: 600;
    }

    .photo_edit {
      margin-bottom: 2rem;
      ${({ theme }) => Common.fontSize(13)};
      font-weight: 500;
      color: #a84448;
    }

    input,
    textarea {
      width: 85%;
      padding: 0.5rem;
      border: 1px solid lightgray;
      border-radius: 3px;
      outline: none;
    }

    textarea {
      height: 160px;
      margin-bottom: 10px;
      resize: none;
    }

    p {
      ${({ theme }) => Common.fontSize(13)};
    }
  }

  .img_upload_btn {
    display: inline-block;
    padding: 12px 30px;
    letter-spacing: 1px;
    cursor: pointer;
    background: #fff;
    color: #a84448;
    border: 1px solid #a84448;
    border-radius: 2px;
    margin-bottom: 1rem;
  }

  .file_box {
    width: 100%;
    margin-top: 10px;
    ${Common.FlexRow};
    gap: 1rem;

    .fade-enter {
      opacity: 0;
    }

    .fade-enter-active {
      opacity: 1;
      transition: opacity 500ms;
    }

    .fade-exit {
      opacity: 1;
    }

    .fade-exit-active {
      opacity: 0;
      transition: opacity 500ms;
    }

    .img_box {
      ${Common.FlexCenterCol};
    }

    img {
      width: 200px;
      height: auto;
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 490px) {
    .content_title {
      ${({ theme }) => Common.fontSize(15)};
    }

    .content_input .photo_info {
      ${({ theme }) => Common.fontSize(13)};
    }

    .content_input p {
      ${({ theme }) => Common.fontSize(12)};
    }
  }
`;

export const ConfirmBtnBox = styled.div`
  margin: 20px 0;
  width: 100%;
  ${Common.FlexCenterRow};
  gap: 10px;

  .cancel_btn,
  .confirm_btn {
    flex: 0 1 20%;
  }

  .confirm_btn button {
    padding: 14px 0;
    letter-spacing: 1px;
    width: 100%;
    ${({ theme }) => Common.fontSize(14)};
    font-weight: 500;
    background: ${({ theme }) => theme.colors.themeColor};
    color: white;
    border: none;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    }
  }

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    .cancel_btn,
    .confirm_btn {
      flex: 0 0 40%;
    }
  }
`;
