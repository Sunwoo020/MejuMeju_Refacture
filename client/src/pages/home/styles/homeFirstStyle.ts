import styled from "styled-components";
import * as Common from "@styles/Common";
import maintop1 from "@assets/images/maintop3.png";
import maintop2 from "@assets/images/maintop2.png";
import maintop3 from "@assets/images/mainbottom.jpg";
import maintop4 from "@assets/images/wines.jpg";
import maintop5 from "@assets/images/cocktail.jpg";
import maintop6 from "@assets/images/cocktail2.jpg";
import maintop7 from "@assets/images/happyday.jpg";
import maintop8 from "@assets/images/cocktail3.jpg";
import maintop9 from "@assets/images/cocktail4.jpg";
import maintop10 from "@assets/images/cocktail5.jpg";

export const HomefirstLayout = styled(Common.FlexCenterCol)`
  color: ${({ theme }) => theme.colors.fontColor};
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Imgtag = styled.div`
  width: 100%;
  position: relative;
`;

export const IphoneWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 25%;
`;

export const Iphone = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  transform: translate(-50%, -50%) rotate(270deg);
`;

export const MainTop = styled.img`
  width: 100%;
  filter: blur(10px);
`;

export const Title = styled.div`
  position: absolute;
  top: -35%;
  left: -101%;
  color: #f7f7f7;
  font-family: Cafe24Surroundair;
  font-size: 32px;
  z-index: 5;

  @media (max-width: 1023px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    top: -37%;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const ClickHere = styled.div`
  position: absolute;
  top: 12%;
  font-size: 16px;
  color: white;
  left: 60%;
  background-color: black;
  z-index: 3;
  width: 36%;
  height: 10%;
  font-family: Cafe24Surroundair;
  display: flex;
  align-items: center;
  border-radius: 50%;

  @media (max-width: 1023px) {
    font-size: 10px;
  }

  @media (max-width: 767px) {
    font-size: 8px;
    width: 40%;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const CameraButton = styled.button`
  position: absolute;
  left: 63.7%;
  top: -3.69%;
  width: 14.6%;
  height: 7.2%;
  z-index: 4;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const MaintopSmall = styled.img`
  position: absolute;
  width: 120%;
  height: 43.5%;
  bottom: 78%;
  right: 48%;
  z-index: 2;
  transition: all 1s ease;
`;

export const PrevNextButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease, transform 0.3s ease;
  filter: drop-shadow(2px 4px 1px black);

  &:hover {
    color: #a84448;
  }
`;

export const PrevButton = styled(PrevNextButton)`
  left: 10px;
  font-weight: 200;
`;

export const NextButton = styled(PrevNextButton)`
  right: 20px;
  font-weight: 200;
`;

export const CameraAnimation = styled.div`
  position: absolute;
  top: 0%;
  left: -9%;
  transform: translate(-50%, -50%);
  width: 125%;
  height: 45%;
  background-color: black;
  opacity: 0;
  animation: blinkAnimation 0.1s ease;
  z-index: 999;

  @keyframes blinkAnimation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const getImageSource = (imageNumber: number) => {
  switch (imageNumber) {
    case 1:
      return maintop1;
    case 2:
      return maintop2;
    case 3:
      return maintop3;
    case 4:
      return maintop4;
    case 5:
      return maintop5;
    case 6:
      return maintop6;
    case 7:
      return maintop7;
    case 8:
      return maintop8;
    case 9:
      return maintop9;
    case 10:
      return maintop10;
    default:
      return maintop1;
  }
};
