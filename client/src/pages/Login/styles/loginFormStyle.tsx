import styled from "styled-components";

export type TypeProps = {
  type: string;
};

export type TitleProps = {
  fontSize: string;
  fontWeight: string;
};

export const FormContainer = styled.div`
  height: 100vh;
  ${({ theme }) => theme.common.flexCenterCol};
`;
export const FormContentsContainer = styled.div`
  max-width: 600px;
  width: 100%;
  position: absolute;
  top: 15%;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
    padding: 0 25px;
    .top-title {
      display: none;
    }
  }
`;
export const Contour = styled.hr`
  width: 100%;
  border-color: #eee;
`;
export const FormTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  gap: 20px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
  }
`;
export const FormTitle = styled.div<TitleProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const FormMiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 50px 60px;
  @media screen and (max-width: 768px) {
    padding: 0px;
    gap: 10px;
  }
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: white;
  @media screen and (max-width: 768px) {
    background-color: inherit;
    border: none;
  }
`;
export const FormLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;
  margin-bottom: 30px;
  .flex-col {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    input {
      border: 1px solid #b2b2b2;
      padding: 10px 10px;
      font-size: 16px;
      width: 100%;
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
      width: 30%;
      @media screen and (max-width: 768px) {
        width: 20%;
      }
    }
  }
`;

export const FormOAuthSignUpBox = styled.div<TypeProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ type }) => (type === "google" ? "white" : type === "naver" ? "#3b5998" : "#ffeb00")};
  color: ${({ type }) => (type === "google" || type === "kakao" ? "black" : "white")};
  border: 1px solid ${({ theme }) => theme.colors.border};
  .desc {
    font-size: 18px;
    width: calc(100% - 65px);
    text-align: center;
    @media ${({ theme }) => theme.breakpoints.mobileMax} {
      font-size: 14px;
    }
  }
  border-radius: 2px;
  cursor: pointer;
`;
export const FormOAuthIconContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  height: 65px;
  width: 65px;
  padding: 5px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  .icon {
    width: 35px;
  }
  @media screen and (max-width: 768px) {
    height: 55px;
  }
`;

export const FormBottomContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterRow}
  width: 100%;
  gap: 15px;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;
