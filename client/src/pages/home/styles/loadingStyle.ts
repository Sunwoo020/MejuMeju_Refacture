import styled from "styled-components";
import wave from "../assets/images/wave.png";
import * as Common from "@styles/Common";

export const LoadingContainer = styled(Common.FlexCenterRow)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.h1`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #aff6ff;
  color: transparent;
`;

export const WaveInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${wave});
  background-size: 101% 100%;
  background-position: left 0px bottom -150px;
  background-repeat: repeat-x;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  animation: wave 5s infinite;
  padding-right: 25px;

  @keyframes wave {
    0% {
      background-position: left 0px bottom -170px;
    }
    100% {
      background-position: left 1500px bottom 15px;
    }
  }
`;

export const Cup = styled.div`
  display: block;
  position: relative;
  width: 100px;
  height: 120px;
  border: 1px solid #aff6ff;
  border-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0 0 0 5px #aff6ff, 0 5px 10px #aff6ff;
  background: url(${wave});
  background-position: left 0px bottom -300px;
  background-repeat: repeat-x;
  background-clip: text;
  animation: filling 5s infinite;

  &::before {
    content: "";
    position: absolute;
    top: 30px;
    right: -55px;
    width: 40px;
    height: 40px;
    border: 7px solid #aff6ff;
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
  }

  @keyframes filling {
    0% {
      background-position: 0px 150px;
    }
    100% {
      background-position: 3000px -120px;
    }
  }
`;
