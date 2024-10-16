import styled from "styled-components";
import * as Common from "@styles/Common";

export const CartContainer = styled.section<{ isEmpty: boolean }>`
  ${Common.FlexCenterCol};
  margin-top: 150px;
`;
export const MainSection = styled.div`
  ${Common.FlexCenterCol};
  width: 100%;
`;
export const CartHeading = styled.h2`
  ${Common.fontSize(48)};
  font-weight: bold;
`;
export const ListContainer = styled.div`
  ${Common.FlexCenterCol};
  justify-content: space-between;
  padding: 0 3vw;
  width: 100%;
  margin-top: 50px;
`;
export const AllCheckboxContainer = styled.div`
  width: 5.4%;
  ${Common.FlexCenterRow};
  justify-content: flex-end;
  overflow: auto;
`;

export const CheckboxContainer = styled.div`
  width: 5%;
  ${Common.FlexCenterRow};
  justify-content: flex-start;
`;

export const ListTitle = styled.div`
  ${Common.FlexCenterRow};
  width: 85%;
  height: 30px;
  border-bottom: 1px solid rgba(60, 60, 60, 0.1);

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const CartItem = styled.div`
  ${Common.FlexCenterRow};
  width: 85%;
  font-size: 15px;
  border-bottom: 1px solid rgba(60, 60, 60, 0.1);

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const ImgList = styled.div`
  ${Common.FlexCenterRow};
  width: 20%;
  height: 250px;

  & img {
    width: 250px;
    height: 200px;
    object-fit: contain;
  }
`;

export const InfoContainer = styled.div`
  ${Common.FlexCenterRow};
  width: 70%;
  height: 250px;
  ${Common.fontSize(16)};

  @media screen and (max-width: 767px) {
    width: 30%;
  }
`;

export const EachTag = styled.div`
  ${Common.FlexCenterRow};
  width: 10%;
  height: 250px;
  justify-content: space-around;

  @media screen and (max-width: 767px) {
    width: 25%;
  }
`;

export const NoDataContainer = styled.div`
  height: 500px;
  padding: 150px 0;
  ${Common.FlexCenterRow};
`;

export const DeleteLine = styled.div`
  ${Common.FlexCenterRow};
  width: 83%;
  height: 80px;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const TotalSummary = styled.div`
  ${Common.FlexCenterRow};
  width: 18%;
  height: 100px;
  justify-content: space-around;
  align-items: flex-start;
  ${Common.fontSize(16)};

  @media screen and (max-width: 767px) {
    ${Common.fontSize(12)};
    width: 50%;
  }

  & b {
    display: flex;
    margin-top: 20px;
    flex-direction: column;

    .b-title {
      border-bottom: 1px solid #222222;
    }
  }
`;

export const ButtonWrapper = styled.div`
  ${Common.FlexCenterRow};
  justify-content: space-between;
  width: 30vw;
  height: 200px;
  margin-bottom: 200px;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 0;
    padding: 0 25px;
  }
`;

export const ButtonDetail = styled.div`
  ${Common.ButtonStyle};
  width: 150px;
  height: 100px;
  padding-top: 50px;
`;

export const IncreaseButton = styled.button`
  ${Common.ButtonStyle};
  width: 24px;
  height: 24px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #333333;

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const DecreaseButton = styled.button`
  ${Common.ButtonStyle};
  width: 24px;
  height: 24px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: #cccccc;

  &:hover {
    background-color: #ffffff;
  }

  &:active {
    transform: none;
  }
`;
export const CheckBox = styled.input.attrs((props) => ({
  type: "checkbox",
  checked: props.checked,
  onChange: props.onChange,
}))`
  width: 18px;
  height: 18px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  appearance: none;
  outline: none;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  position: relative;

  &:checked {
    background-color: #1976d2;
    border-color: #1976d2;
  }

  &:checked::before {
    content: "\\2713";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 16px;
    line-height: 1;
    text-align: center;
  }
`;

export const LabelAllSelect = styled.label`
  padding-left: 8px;
  ${Common.fontSize(12)};
`;

export const EmptyContainer = styled.div`
  margin-top: 200px;
`;
