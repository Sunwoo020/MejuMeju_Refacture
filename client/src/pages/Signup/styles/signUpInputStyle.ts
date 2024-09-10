import styled from "styled-components";

export const ValidPassword = styled.p`
  color: red;
  margin-top: 5px;
  font-size: 12px;
  padding: 5px 10px;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 3px;
    margin: 0px;
    font-size: 10px;
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
export default {};
