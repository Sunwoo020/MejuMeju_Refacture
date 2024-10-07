import { useState } from "react";
import * as styled from "./styles";
import iphone from "@assets/images/iphone.png";
import { useNavigate } from "react-router";

const getRandomItemId = () => Math.floor(Math.random() * 24) + 1;

const getRandomImageNumber = () => Math.floor(Math.random() * 10) + 1;

const Homefirst = () => {
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);
  const [currentImage, setCurrentImage] = useState(getRandomImageNumber());
  const navigate = useNavigate();

  const handlePrevImage = () => setCurrentImage((prevImage) => (prevImage === 1 ? 10 : prevImage - 1));

  const handleNextImage = () => setCurrentImage((prevImage) => (prevImage === 10 ? 1 : prevImage + 1));

  const handleRandomNavigate = () => {
    setIsTakingPhoto(true);
    setTimeout(() => {
      setIsTakingPhoto(false);
      navigate(`/alcohol/detail/${getRandomItemId()}`);
    }, 900);
  };

  return (
    <styled.HomefirstLayout>
      <styled.Imgtag>
        <styled.MainTop src={styled.getImageSource(currentImage)} alt="Main Top" />
        <styled.IphoneWrapper>
          <styled.Title>
            오늘의 한잔을 <br />
            오늘의 한장으로 <br />
            남겨보세요
          </styled.Title>
          <styled.Iphone src={iphone} alt="iphone" />
          <styled.MaintopSmall src={styled.getImageSource(currentImage)} alt="Maintopsmall" />
          {isTakingPhoto && <styled.CameraAnimation />}
          <styled.ClickHere>
            사진 촬영을 누르면
            <br />
            랜덤한 주류를
            <br />
            추천해드립니다!
          </styled.ClickHere>
          <styled.CameraButton onClick={handleRandomNavigate} />
        </styled.IphoneWrapper>
        <styled.PrevButton onClick={handlePrevImage}>&lt;</styled.PrevButton>
        <styled.NextButton onClick={handleNextImage}>&gt;</styled.NextButton>
      </styled.Imgtag>
    </styled.HomefirstLayout>
  );
};

export default Homefirst;
