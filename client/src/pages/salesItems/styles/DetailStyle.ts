import styled from "styled-components";

export const AlcoholDetailContainer = styled.section`
  ${({ theme }) => theme.common.flexCenterCol}
  height: 100%;
  padding: 0 25px;
  color: ${({ theme }) => theme.colors.fontColor};
`;
