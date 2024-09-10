import styled from "styled-components";
import * as Type from "@utils/types/AuthType";

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.fontColor};
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 20px;
`;

export const Title = styled.div<Type.TitleProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const BottomContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterRow};
  gap: 15px;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const InputContainer = styled.div`
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
    gap: 30px;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 768px) {
      gap: 10px;
    }
  }

  .button {
    width: 30%;
  }
`;
export const Step = styled.div<Type.TypeProps>`
  ${({ theme }) => theme.common.flexCenterRow};
  color: ${({ type }) => (type === "on" ? "#A84448" : "#b2b2b2")};

  .text {
    margin-left: 5px;
    font-size: 14px;
  }
`;

export const StepContainer = styled.div`
  font-size: 18px;
  ${({ theme }) => theme.common.flexCenterRow};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
