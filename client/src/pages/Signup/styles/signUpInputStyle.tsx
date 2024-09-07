import styled from "styled-components";

export type TitleProps = {
  fontSize: string;
  fontWeight: string;
};
export type StepProps = {
  type: string;
};

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.fontColor};
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 20px;
`;

export const InputContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  max-width: 700px;
  width: 100%;
  padding: 0 25px;
  gap: 40px;
  position: absolute;
  top: 15%;
  .title {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #434242;
  }
  .code {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 200px;
    @media screen and (max-width: 768px) {
      width: 60%;
    }
    p {
      width: 50%;
    }
  }
  padding-bottom: 100px;
`;
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

export const Title = styled.div<TitleProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;
export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  gap: 20px;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
  }
`;
export const StepContainer = styled.div`
  font-size: 18px;
  ${({ theme }) => theme.common.flexCenterRow};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const Step = styled.div<StepProps>`
  ${({ theme }) => theme.common.flexCenterRow};
  color: ${({ type }) => (type === "on" ? "#A84448" : "#b2b2b2")};
  .text {
    margin-left: 5px;
    font-size: 14px;
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
export const SingleInfo = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  border-bottom: 1px solid #b2b2b2;
  background-color: #ededed;

  .name {
    display: flex;
    align-items: center;
    width: 190px;
    height: 100%;
    @media screen and (max-width: 768px) {
      width: 65px;
      padding: 5px 0 5px 10px;
      font-size: 14px;
    }
  }
  .code-pos {
    position: absolute;
    right: 30px;
    top: 10%;
    @media ${({ theme }) => theme.breakpoints.mobileMax} {
      right: 5px;
    }
    @media ${({ theme }) => theme.breakpoints.mobileMax} {
      button {
        font-size: 10px;
      }
    }
  }
  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    width: calc(100% - 190px);
    @media screen and (max-width: 768px) {
      width: calc(100% - 75px);
    }
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
export const BottomContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterRow}
  gap: 15px;
`;

export default {};
