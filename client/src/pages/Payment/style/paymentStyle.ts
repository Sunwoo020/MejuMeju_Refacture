import styled from "styled-components";
import * as Common from "@styles/Common";

export const PaymentContainer = styled.section`
  ${Common.FlexCenterCol};
  margin-top: 150px;

  .button {
    ${Common.FlexRow};
    justify-content: space-between;
    align-items: center;
    margin-top: 150px;
    width: 25%;
    padding-bottom: 200px;

    @media screen and (max-width: 767px) {
      width: 100%;
      margin-top: 0px;
      padding-left: 25px;
      padding-right: 25px;
    }
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
