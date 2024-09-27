import styled from "styled-components";
import * as PaymentCommon from "./paymentCommon";
import * as Common from "@styles/Common";

export const PaymentContainer = styled(PaymentCommon.PaymentSection)`
  .button {
    ${PaymentCommon.ButtonStyle};
    margin-top: 150px;
  }

  .buttonDetail {
    width: 150px;
    padding-top: 50px;
    border: none;
  }

  & h2 {
    ${Common.fontSize(48)};
    font-weight: bold;
  }

  & div.main {
    width: 100%;
    ${Common.FlexCenterCol};
  }
`;
