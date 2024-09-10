import styled from "styled-components";

export type TypeProps = {
  type: string;
};

export type TitleProps = {
  fontSize: string;
  fontWeight: string;
};

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.fontColor};
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 20px;
  @media screen and (max-width: 768px) {
    .label {
      display: none;
    }
  }
`;

export const Title = styled.div<TitleProps>`
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

export const MiddleContainer = styled.div`
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
`;

export const BottomContainer = styled.div`
  width: 100%;
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
