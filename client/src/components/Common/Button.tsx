import styled, { css } from "styled-components";
import { BtnProps } from "@utils/types/Interfaces";

const sharedButtonStyles = css<BtnProps>`
  ${({ theme }) => theme.common.flexCenter};
  padding: 14px 0;
  letter-spacing: 1px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: pointer;
  border: ${({ border }) => border || "none"};
  &:hover {
    filter: brightness(80%);
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const BtnDark = styled.button<BtnProps>`
  ${sharedButtonStyles}
  background-color: ${({ theme }) => theme.colors.themeColor};
  color: white;
`;

const BtnLight = styled(BtnDark)`
  background-color: white;
  color: ${({ theme }) => theme.colors.themeColor};
  border: 1px solid lightgray;
`;

export { BtnLight as ButtonLight, BtnDark as ButtonDark };
