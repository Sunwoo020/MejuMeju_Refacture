import styled, { css, keyframes } from "styled-components";
import * as Type from "../util";
import Headerback from "@assets/images/Headerback.png";
import { ReactComponent as Mainlogo } from "@assets/images/Logo.svg";

export const LogoContainer = styled.header<Type.IHeaderContainerProps>`
  display: flex;
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

  @media screen and (max-width: 1297px) {
  }
  @media screen and (max-width: 860px) {
    left: 3%;
  }
  @media screen and (max-width: 767px) {
    & div.tag {
      width: 75%;
      padding-top: 0px;
    }
  }
  @media screen and (max-width: 767px) {
    height: 50px;
  }
`;

export const HeaderContainer = styled.div<Type.IHeaderContainerProps>`
  width: 100%;
  position: fixed;
  transition: all 0.3s ease-out;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  & div.modal {
    color: #222222;
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
          height: 0px;
          color: rgba(245, 245, 245, 1);
          background-image: none;
          color: ${pathname === "/" ? "rgba(245, 245, 245, 1)" : "#222222"};
        `}

  @media (max-width:767px) {
    background-image: none;
    height: 0;

    .mainlogo {
      width: 100px;
    }
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
            fill: ${pathname === "/" ? "rgba(245, 245, 245, 1)" : "#a84448"}; rgba(245, 245, 245, 1)" : "color: #222222"
          `}
    transition: all 0.5s ease-out;

    &:hover {
      fill: black;
      cursor: pointer;
      transition: all 0.3 ease;
    }
  }
  @media (max-width: 767px) {
    width: 70%;
  }
`;
export const Ulist = styled.div<Type.IHeaderContainerProps>`
  display: flex;
  position: relative;
  padding-left: 10%;
  padding-right: 5%;
  width: 110%;
  transition: all 0.3s ease-out;
  font-weight: bold;

  filter: drop-shadow(2px 2px 1px #ccc);

  padding-top: ${({ hovering }) => (hovering === "true" ? "20px" : "30px")};
  & ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: ${({ hovering }) => (hovering === "true" ? "18px" : "21px")};
    transition: all 0.5s ease-out;
  }

  & ul {
    & li {
      height: 20px;
      padding-top: 4%;
      font-size: 14px;
      font-weight: 400;
      flex-direction: row;
    }
  }

  .banner1 {
    width: 20%;
  }
  .banner2 {
    width: 20%;
  }

  .banner3 {
    width: 20%;
  }
  .banner4 {
    width: 20%;
  }
  .banner6 {
    width: 20%;
    &:hover {
      color: #a84448;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    & ul {
      font-size: 15px;
      & li {
        font-size: 13px;
      }
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
export const AccordionMenu = styled.div<Type.IHeaderContainerProps>`
  display: none;

  .li_padding {
    padding: 0.8rem 1rem;
  }
  @media screen and (max-width: 767px) {
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    font-family: WanjuRegular, sans-serif, Arial;
    padding: 13px 0;
    text-align: right;
    border-radius: 5px;
    font-size: 16px;
    color: #a84448;
    background-color: none;
  }
  & div.onclick {
    text-align: right;
    padding: 0;
    padding-right: 12px;
    padding-bottom: 0.5rem;
    filter: drop-shadow(2px 2px 1px rgba(8, 8, 8, 0.5));
  }
`;
export const AccordionMenuItem = styled.div<Type.IHeaderContainerProps>`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: #a84448;
  cursor: pointer;
  background-color: ${(props) => (props.isOpen ? "none" : "rgba(247,247,247,0.7)")};
  animation: ${(isOpen) => (isOpen ? slideIn : slideOut)} 0.3s ease;
  transition: background-color 0.3s ease-out;
  width: ${(props) => (props.isOpen ? "0px" : "150px")};
  height: ${(props) => (props.isOpen ? "0px" : "100px")};
  border: ${(props) => (props.isOpen ? "none" : "1px solid rgba(8,8,8,0.1)")};
`;
