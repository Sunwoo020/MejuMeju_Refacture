import styled from "styled-components";
import * as PaymentCommon from "./paymentCommon";
import * as Common from "@styles/Common";

export const PaymentConfirmContainer = styled(PaymentCommon.PaymentSection)`
  & h2 {
    ${PaymentCommon.PaymentTitle};
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
