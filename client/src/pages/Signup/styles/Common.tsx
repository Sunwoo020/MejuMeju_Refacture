import styled from "styled-components";

export type TitleProps = {
  fontSize: string;
  fontWeight: string;
};
export type StepProps = {
  type: string;
};

export type TypeProps = {
  type: string;
};

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.fontColor};
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 20px;
`;
export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    margin-bottom: 0px;
  }
`;

export const BottomContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterRow};
  gap: 15px;
`;

export const StepContainer = styled.div`
  font-size: 18px;
  ${({ theme }) => theme.common.flexCenterRow};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Title = styled.div<{ fontSize: string; fontWeight: string }>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
export const InputContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  max-width: 700px;
  width: 100%;
  padding: 0 25px;
  gap: 40px;
  position: absolute;
  top: 15%;
  padding-bottom: 100px;
`;

export const Step = styled.div<{ type: string }>`
  ${({ theme }) => theme.common.flexCenterRow};
  color: ${({ type }) => (type === "on" ? "#A84448" : "#b2b2b2")};
  .text {
    margin-left: 5px;
    font-size: 14px;
  }
`;

export const SingleInfo = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  border-bottom: 1px solid #b2b2b2;
  background-color: #ededed;

  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    width: calc(100% - 190px);
    padding: 10px;
    background-color: white;
    input {
      border: 1px solid #b2b2b2;
      padding: 5px 10px;
      font-size: 16px;
      width: 80%;
      @media screen and (max-width: 768px) {
        width: 75%;
        font-size: 12px;
      }
    }
  }
`;
