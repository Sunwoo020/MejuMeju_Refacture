import styled from "styled-components";
import * as Common from "@styles/Common";

export const ValidPassword = styled.p`
  color: red;
  margin-top: 5px;
  ${Common.fontSize(12)};
  padding: 5px 10px;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 3px;
    margin: 0px;

    ${Common.fontSize(10)};
  }
`;

export const MiddleContainer = styled.div`
  width: 100%;
`;
export const InfoTable = styled.div`
  padding-top: 20px;
  ${({ theme }) => theme.common.flexCenterCol};
  width: 100%;
`;
