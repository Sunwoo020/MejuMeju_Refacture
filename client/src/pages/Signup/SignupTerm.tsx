import axios from "axios";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonDark, ButtonLight } from "@components/common/commonButton";
import Alert from "@components/common/commonAlert";
import Term from "@components/signUpTerm/termComponent";
import * as styled from "./styles";
import * as Common from "@styles/commonContainer";

const SignupTerm = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState([false, false, false]);
  const [isNext, setIsNext] = useState(false);
  const [isAgreed, setIsAgreed] = useState([false, false, false, false]);
  const [alertMessage, setAlertMessage] = useState("");
  const [isRead, setIsRead] = useState([true, true, true]);

  const urlParams = new URLSearchParams(window.location.search);
  const accessToken = urlParams.get("access_token");
  const refreshToken = urlParams.get("refresh_token");
  useEffect(() => {
    if (accessToken && refreshToken) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/members`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
          },
        })
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          localStorage.setItem("oauthSign", "true");
          setAlertMessage("회원가입을 진행해 주세요!");
          setIsNext(true);
        });
    } else {
      localStorage.setItem("oauthSign", "false");
    }
  }, []);
  const clickDetail = (pos: number) => {
    const newDetail = detail.slice();
    newDetail[pos] = !detail[pos];
    setDetail(newDetail);
  };
  const clickCheck = (pos: number) => {
    const newCheck = isAgreed.slice();
    newCheck[pos] = !isAgreed[pos];
    setIsAgreed(newCheck);
  };
  const onClickNext = () => {
    if (isAgreed[0] && isAgreed[1] && isAgreed[2] && isAgreed[3]) {
      navigate("/signup/input", { state: { access: accessToken, refresh: refreshToken } });
    } else {
      setAlertMessage("모든 약관을 동의해 주세요!");
      setIsNext(true);
    }
  };
  const onClickToSelection = () => {
    navigate("/signup");
  };

  return (
    <Common.Container>
      {isNext ? <Alert text={alertMessage} onClickOk={() => setIsNext(false)} /> : null}
      <styled.TermContainer>
        <Common.TopContainer>
          <Common.Title fontSize="28px" fontWeight="500">
            회원가입
          </Common.Title>
          <Common.StepContainer>
            <Common.Step type="on">
              01<p className="text">약관동의</p>
            </Common.Step>
            <MdOutlineKeyboardArrowRight size="22px" color="#A84448" />
            <Common.Step type="off">
              02<p className="text">정보 입력</p>
            </Common.Step>
          </Common.StepContainer>
        </Common.TopContainer>
        <styled.MiddleContainer>
          <div className="title">
            <Common.Title fontSize="22px" fontWeight="400">
              약관동의
            </Common.Title>
          </div>
          <p style={{ color: "gray" }}>모든 약관을 읽어야 합니다</p>
          <div className="check-container">
            <div className="front">
              <input onChange={() => clickCheck(0)} type="checkbox" />
              <p className="red">(필수) </p>만 19세 이상입니다.
            </div>
          </div>
          <div className="check-container">
            <div className="front">
              <input disabled={isRead[0]} onChange={() => clickCheck(1)} type="checkbox" />
              <p className="red">(필수) </p>
              서비스 이용약관 동의
            </div>
            <div onClick={() => clickDetail(0)} className="detail red">
              {detail[0] ? "닫기" : "자세히"}
            </div>
          </div>
          {detail[0] ? <Term pos={0} setIsRead={setIsRead} /> : null}
          <div className="check-container">
            <div className="front">
              <input disabled={isRead[1]} onChange={() => clickCheck(2)} type="checkbox" />
              <p className="red">(필수) </p>
              개인정보 수집 동의
            </div>
            <div onClick={() => clickDetail(1)} className="detail red">
              {detail[1] ? "닫기" : "자세히"}
            </div>
          </div>
          {detail[1] ? <Term pos={1} setIsRead={setIsRead} /> : null}
          <div className="check-container">
            <div className="front">
              <input disabled={isRead[2]} onChange={() => clickCheck(3)} type="checkbox" />
              <p className="red">(필수) </p>
              전자금융거래 이용약관 동의
            </div>
            <div onClick={() => clickDetail(2)} className="detail red">
              {detail[2] ? "닫기" : "자세히"}
            </div>
          </div>
          {detail[2] ? <Term pos={2} setIsRead={setIsRead} /> : null}
        </styled.MiddleContainer>
        <Common.BottomContainer>
          <ButtonLight width="150px" height="45px" fontSize="18px" onClick={onClickToSelection}>
            이전
          </ButtonLight>
          <ButtonDark width="150px" height="45px" fontSize="18px" onClick={onClickNext}>
            다음
          </ButtonDark>
        </Common.BottomContainer>
      </styled.TermContainer>
    </Common.Container>
  );
};

export default SignupTerm;
