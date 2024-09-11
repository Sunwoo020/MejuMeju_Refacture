import styled from "styled-components";
import * as Type from "@utils/types";
import * as Common from "@styles/Common";

export const MainContainer = styled.div`
  height: 100vh;
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 20px;
  .go-login {
    ${({ theme }) => theme.common.flexCenterRow};
    gap: 10px;
    ${Common.fontSize(14)};
    color: #b2b2b2;
  }
  .click-to-login {
    color: ${({ theme }) => theme.colors.themeColor};
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
export const SelectionContainer = styled.div`
  color: white;
  padding: 60px 70px;
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
  max-width: 600px;
  width: 100%;
  ${({ theme }) => theme.common.flexCenterCol};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  gap: 20px;
  background-color: white;
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    background-color: inherit;
    border: none;
    gap: 10px;
  }
`;
export const BasicSignupBox = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  width: 100%;
  padding: 25px 0px;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.themeColor};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  cursor: pointer;
`;
export const Contour = styled.hr`
  width: 100%;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const OAuthSignUpBox = styled.div<Type.TypeProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ type }) => (type === "google" ? "white" : type === "facebook" ? "#3b5998" : "#ffeb00")};
  color: ${({ type }) => (type === "google" || type === "kakao" ? "black" : "white")};
  border: 1px solid ${({ theme }) => theme.colors.border};
  .desc {
    ${Common.fontSize(18)};
    width: calc(100% - 65px);
    text-align: center;
    @media ${({ theme }) => theme.breakpoints.mobileMax} {
      ${Common.fontSize(14)};
    }
  }
  border-radius: 2px;
  cursor: pointer;
`;
export const OAuthIconContainer = styled.div`
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
