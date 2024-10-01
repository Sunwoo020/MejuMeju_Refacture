import styled, { css, keyframes } from "styled-components";
import * as Type from "../util";
import Headerback from "@assets/images/Headerback.png";
import { ReactComponent as Mainlogo } from "@assets/images/Logo.svg";
import * as Common from "@styles/Common";

export const LogoContainer = styled(Common.FlexRow)<Type.IHeaderContainerProps>`
  position: absolute;
  left: 10%;
  width: 100%;
  height: 120px;
  color: ${({ theme }) => theme.colors.fontColor};

  & div.tag {
    padding-top: ${({ hovering }) => (hovering === "true" ? "30px" : "22px")};
    transition: all 0.3s ease-out;
    filter: drop-shadow(2px 4px 2px rgba(8, 8, 8, 0.5));

    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 860px) {
    left: 3%;
  }
  @media screen and (max-width: 767px) {
    height: 50px;

    & div.tag {
      width: 75%;
      padding-top: 0px;
    }
  }
`;

export const HeaderContainer = styled(Common.FlexRow)<Type.IHeaderContainerProps>`
  width: 100%;
  position: fixed;
  transition: all 0.3s ease-out;
  z-index: 999;
  justify-content: space-between;

  & div.modal {
    color: #222;
    border: 5px solid white;
    border-radius: 3px;
  }

  ${({ hovering, y, pathname }) =>
    y > 0 || hovering === "true"
      ? css`
          height: 120px;
          background-image: url(${Headerback});
        `
      : css`
          height: 0;
          color: ${pathname === "/" ? "rgba(245, 245, 245, 1)" : "#222"};
          background-image: none;
        `}

  @media (max-width: 767px) {
    background-image: none;
    height: 0;
  }
`;

export const WhiteMainlogo = styled(Mainlogo)<Type.IHeaderContainerProps>`
  path {
    ${({ hovering, y, pathname }) =>
      y > 0 || hovering === "true"
        ? css`
            fill: #a84448;
          `
        : css`
            fill: ${pathname === "/" ? "rgba(245, 245, 245, 1)" : "#a84448"};
          `}
    transition: all 0.5s ease-out;

    &:hover {
      fill: black;
      cursor: pointer;
      transition: all 0.3s ease;
    }
  }

  @media (max-width: 767px) {
    width: 70%;
  }
`;

export const Ulist = styled(Common.FlexCol)<Type.IHeaderContainerProps>`
  position: relative;
  padding: 0 5% 0 10%;
  width: 110%;
  transition: all 0.3s ease-out;
  font-weight: bold;
  filter: drop-shadow(2px 2px 1px #ccc);

  padding-top: ${({ hovering }) => (hovering === "true" ? "20px" : "30px")};

  & ul {
    ${Common.FlexCol};
    font-size: ${({ hovering }) => (hovering === "true" ? "18px" : "21px")};
    transition: all 0.5s ease-out;

    & li {
      height: 20px;
      padding-top: 4%;
      ${Common.fontSize(14)};
      font-weight: 400;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    & ul li {
      ${Common.fontSize(13)};
    }
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const StyledList = styled.li<Type.IHeaderContainerProps>`
  transition: all 0.3s ease-out;
  display: ${({ hovering }) => (hovering === "true" ? "flex" : "none")};

  &:hover {
    color: #a84448;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const AccordionMenu = styled(Common.FlexCol)<Type.IHeaderContainerProps>`
  display: none;

  .li_padding {
    padding: 0.8rem 1rem;
  }

  @media screen and (max-width: 767px) {
    margin-right: 2rem;
    display: flex;
    cursor: pointer;
    padding: 13px 0;
    text-align: right;
    border-radius: 5px;
    ${Common.fontSize(16)};
    color: #a84448;
    background-color: none;
  }

  & div.onclick {
    text-align: right;
    padding: 0 12px 0.5rem 0;
    filter: drop-shadow(2px 2px 1px rgba(8, 8, 8, 0.5));
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const AccordionMenuItem = styled(Common.FlexRow)<Type.IHeaderContainerProps>`
  align-items: center;
  font-weight: 500;
  ${Common.fontSize(14)};
  color: #a84448;
  cursor: pointer;
  background-color: ${({ isOpen }) => (isOpen ? "none" : "rgba(247, 247, 247, 0.7)")};
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease;
  transition: background-color 0.3s ease-out;
  width: ${({ isOpen }) => (isOpen ? "0" : "150px")};
  height: ${({ isOpen }) => (isOpen ? "0" : "100px")};
  border: ${({ isOpen }) => (isOpen ? "none" : "1px solid rgba(8, 8, 8, 0.1)")};
`;
