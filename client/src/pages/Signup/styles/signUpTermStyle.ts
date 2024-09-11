import styled from "styled-components";

export const TermContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 50px;
  max-width: 700px;
  width: 80%;
  padding-bottom: 60px;
  position: absolute;
  top: 15%;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 25px;
  }
`;
