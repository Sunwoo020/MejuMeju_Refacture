import styled, { css, keyframes } from "styled-components";
import * as Common from "@styles/Common";

export interface H2props {
  primary?: boolean;
}

export const Homelayoutstyled1 = styled(Common.FlexCenterRow)`
  width: 100%;
  color: ${({ theme }) => theme.colors.fontColor};
  height: 100vh;

  .glad {
    width: 70%;
    ${Common.FontSizeStyle}
    justify-content: space-around;
  }

  .glad-line {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  @media (max-width: 1516px) {
    .glad-line {
      flex-direction: column;
    }
  }

  @media (max-width: 909px) {
    .glad {
      ${Common.fontSize(32)};
    }
  }
`;

export const Homelayoutstyled2 = styled(Common.FlexCenterRow)`
  height: 100vh;
  width: 100%;
`;

export const Content = styled(Common.FlexCenterRow)`
  position: relative;
  width: 100%;
`;

export const animate = keyframes`
  0%, 100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
`;

export const H2 = styled.h2<H2props>`
  color: ${(props) => (props.primary ? "transparent" : "#cd853f")};
  ${Common.FontSizeStyle};
  position: absolute;
  -webkit-text-stroke: 2px #cd853f;
  ${(props) =>
    !props.primary &&
    css`
      animation: ${animate} 3s ease-in-out infinite;
    `}
`;

export const Homelayoutstyled3 = styled(Common.FlexCenterCol)`
  width: 100%;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 30px;
  height: 100vh;

  .maju_list {
    padding-left: 40px;
    padding-bottom: 10%;
    flex-direction: column;
    height: 200px;
    overflow: visible;
  }

  .maju {
    padding-top: 30px;
    font-size: 50px;
    height: 200px;
    display: flex;
    justify-content: flex-end;
  }

  .list_maju {
    padding-top: 30px;
    ${Common.FlexCenterRow};
    width: 100%;
  }
`;

export const textAnimation = keyframes`
  0% { margin-top: 0; }
  10% { margin-top: 0; }
  20% { margin-top: -5.62rem; }
  30% { margin-top: -5.62rem; }
  40% { margin-top: -11.24rem; }
  60% { margin-top: -11.24rem; }
  70% { margin-top: -5.62rem; }
  80% { margin-top: -5.62rem; }
  90% { margin-top: 0; }
  100% { margin-top: 0; }
`;

export const Container = styled(Common.FlexCenterRow)`
  color: #e5e5e5;
  ${Common.FontSizeStyle};
  text-transform: uppercase;

  p {
    margin-left: 30px;
    text-shadow: 0 0 7px rgba(22, 22, 22, 0.9), 0 0 3px rgba(22, 22, 22, 0.5);
  }
`;

export const Animation = styled.div`
  height: 50px;
  overflow: hidden;
  margin-left: 1rem;
`;

export const AnimatedText = styled.div`
  padding: 0.25rem 0.75rem;
  height: 2.81rem;
  margin-bottom: 2.81rem;
  display: inline-block;
`;

export const FirstAnimation = styled(Common.FlexCenterRow)`
  background-color: #20a7d8;
  animation: ${textAnimation} 8s infinite;
`;

export const SecondAnimation = styled(Common.FlexCenterRow)`
  background-color: #cd921e;
`;

export const ThirdAnimation = styled(Common.FlexCenterRow)`
  background-color: #c10528;
`;

export const Homelayoutstyled4 = styled(Common.FlexCenterRow)`
  width: 100%;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
`;

export const bounceAnimation = keyframes`
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #CCC,
                 0 2px 0 #CCC,
                 0 3px 0 #CCC,
                 0 4px 0 #CCC,
                 0 5px 0 #CCC,
                 0 6px 0 #CCC,
                 0 7px 0 #CCC,
                 0 8px 0 #CCC,
                 0 9px 0 #CCC,
                 0 50px 25px rgba(0, 0, 0, .2);
  }
`;

export const Heading = styled.h1`
  height: 100px;
`;

export const BouncingText = styled.span`
  position: relative;
  top: 20px;
  display: inline-block;
  animation: ${bounceAnimation} 0.3s ease infinite alternate;
  font-family: "Titan One", cursive;
  ${Common.fontSize(80)};
  color: #222222;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc, 0 6px 0 transparent,
    0 7px 0 transparent, 0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
`;

export const slide = keyframes`
  0% {
    top: 0;
    color : #cd853f;
  }
  12.5% {
    top : -6rem;
    color : #4b0082;
  }
  25% {
    top: -12rem;
    color : #1e90ff;
  }
  37.5% {
    top: -18rem;
    color : #ff6347;
  }
  50% {
    top: -24rem;
    color : #222222;
  }
  62.5% {
    top: -30rem;
    color : #00fa9a;
  }
  75% {
    top: -36rem;
    color : #daa520;
  }
  100% {
    color : #ff7f50;
  }
`;

export const MainContainer = styled(Common.FlexCenterCol)`
  height: 100vh;
  width: 100%;
  text-align: center;
`;

export const Heading1 = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: #222222;
  ${Common.fontSize(64)};
`;

export const Roller = styled(Common.FlexCenterRow)`
  height: 6rem;
  line-height: 6rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  color: #1d3557;
`;

export const RollText = styled.span`
  position: absolute;
  top: 0;
  animation: ${slide} 8s infinite;
`;

export const SpareTime = styled.span`
  ${Common.fontSize(16)};
  font-style: italic;
  letter-spacing: 1rem;
  margin-top: 0;
  color: #a8dadc;
`;
