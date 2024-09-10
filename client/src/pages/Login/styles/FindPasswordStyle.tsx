import styled from "styled-components";
import { TitleProps } from "@pages/signUp/styles";

export const PasswordContainer = styled.div`
  color: ${({ theme }) => theme.colors.fontColor};
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 20px;
  @media screen and (max-width: 768px) {
    .label {
      display: none;
    }
  }
`;
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
export const PasswordTitle = styled.div<TitleProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const PasswordTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
export const PasswordMiddleContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 50px 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  @media screen and (max-width: 768px) {
    background-color: inherit;
    border: none;
    padding: 0;
  }
  gap: 30px;
  width: 100%;
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
export const PasswordInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  width: 100%;
  margin-bottom: 10px;
  .flex-col {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    input {
      border: 1px solid #b2b2b2;
      padding: 10px 10px;
      font-size: 16px;
      width: 100%;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    gap: 30px;
    @media screen and (max-width: 768px) {
      gap: 10px;
    }
    .button {
      width: 35%;
    }
  }
`;
export const PasswordBottomContainer = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.flexCenterRow}
  gap: 15px;
`;
