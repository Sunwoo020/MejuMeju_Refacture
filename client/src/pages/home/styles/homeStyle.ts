import styled from "styled-components";
import * as Common from "@styles/Common";

export const HomeContainer = styled(Common.FlexCenterCol)`
  color: ${({ theme }) => theme.colors.fontColor};
  width: 100%;
  ${Common.fontSize(96)};
  overflow: hidden;
`;
