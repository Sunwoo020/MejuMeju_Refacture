import styled from "styled-components";
import { MiddleContainer } from "./";

export const PasswordContentsContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 50px;
  max-width: 600px;
  width: 100%;
  padding: 0 25px;
  padding-bottom: 60px;
  position: absolute;
  top: 25%;
  @media screen and (max-width: 768px) {
    top: 15%;
  }
`;
export const PasswordMiddleContainer = styled(MiddleContainer)`
  .title {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #434242;
  }
  .check-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .found {
    margin-top: 15px;
  }
`;
