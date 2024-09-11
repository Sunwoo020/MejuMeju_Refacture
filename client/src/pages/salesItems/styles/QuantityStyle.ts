import styled from "styled-components";
import * as Common from "@styles/Common";

export const QuantityControlBox = styled(Common.FlexRow)`
  width: 110px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background: #fff;
  ${Common.fontSize(13)};

  .quantity_btn {
    ${Common.fontSize(16)};
    padding-bottom: 3px;
    flex: none;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    background: #fff;
  }

  .decrement {
    cursor: not-allowed;
    opacity: 0.25;
  }

  .input_box {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    flex: 1;
    line-height: 30px;
    text-align: center;
    width: 42px;
    ${Common.fontSize(13)};

    > .quantity_input {
      padding: 0;
      line-height: 30px;
      height: 30px;
      width: 100%;
      border: 0;
      text-align: center;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`;
