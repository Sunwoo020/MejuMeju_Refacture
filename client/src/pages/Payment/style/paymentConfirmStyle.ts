import styled from "styled-components";
import * as Common from "@styles/Common";

export const PaymentConfirmContainer = styled.section`
  ${Common.FlexCenterCol};
  margin-top: 150px;

  & h2 {
    ${Common.fontSize(24)};
    font-weight: bold;
  }

  & div.main {
    width: 100%;
    ${Common.FlexCenterCol};
  }

  & div.reason {
    margin-top: 100px;
    height: 100px;
    ${Common.fontSize(32)};
    ${Common.FlexCenter};
  }

  & div.button {
    margin-top: 100px;
  }
`;
