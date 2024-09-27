import styled from "styled-components";
import * as Common from "@styles/Common";

export const Failstyle = styled.div`
  padding-top: 250px;
  width: 100%;
  ${Common.FlexCenterCol};
  & h1 {
    height: 200px;
    ${Common.fontSize(48)}
    ${Common.FlexCenterRow};
  }
  & div.reason {
    height: 200px;
    ${Common.fontSize(60)};
    ${Common.FlexCenterRow};
  }
`;
