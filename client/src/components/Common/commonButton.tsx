import styled from "styled-components";
import { BtnProps } from "@utils/types/Interfaces";
import { sharedButtonStyles } from "./styles";

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
