import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { ButtonDark, ButtonLight } from "@components/Common/Button";
import Alert from "@components/Common/AlertModal";
import * as styles from "@pages/Signup/styles";

const url = `${process.env.REACT_APP_API_URL}`;

const SignupInput = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");
  const [birth, setBirth] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [type, setType] = useState<string | null>(null);

  const onName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onNick = (e: ChangeEvent<HTMLInputElement>) => {
    setNick(e.target.value);
  };
  const onBirth = (e: ChangeEvent<HTMLInputElement>) => {
    const today = new Date();
    const birthDay = new Date(e.target.value);
    let age = today.getFullYear() - birthDay.getFullYear();
    if (
      birthDay.getMonth() > today.getMonth() ||
      (birthDay.getMonth() === today.getMonth() && birthDay.getDate() > today.getDate())
    ) {
      age = age - 1;
    }
    if (age <= 19) {
      setAlertMessage("성인이 아닙니다!");
      setShowAlert(true);
    } else {
      setBirth(e.target.value);
    }
  };

  const onNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^\d]/g, "").match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
    if (val) {
      setNumber(
        !val[2] ? val[1] : val[3] ? `${val[1]}-${val[2]}-${val[3]}` : val[2] ? `${val[1]}-${val[2]}` : `${val[1]}`,
      );
    }
  };
  const onEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onCode = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };
  const onPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const val = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(e.target.value);
    if (val) {
      setPassword(e.target.value);
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  const onPasswordCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  };

  const onClickSign = () => {
    const accessToken = location.state.access;
    const refreshToken = location.state.refresh;

    if (type === "oauth" && accessToken && refreshToken) {
      const body = {
        realName: name,
        displayName: nick,
        phone: number,
        birthDate: birth,
      };

      axios
        .post(`${url}/members/oauth2-signup`, body, {
          headers: {
            Authorization: accessToken,
            refresh: refreshToken,
          },
        })
        .then(() => {
          setAlertMessage("회원가입 성공!");
          setShowAlert(true);
          setIsOk(true);
        })
        .catch(() => {
          setAlertMessage("모든 정보를 제대로 기입하였는지 확인하세요!");
          setShowAlert(true);
        });
    } else {
      if (password !== passwordCheck) {
        setAlertMessage("비밀번호와 비밀번호 확인이 같지 않습니다!");
        setShowAlert(true);
      } else if (!(nick && code && name && birth && number)) {
        setAlertMessage("모든 정보가 입력되어야 합니다!");
        setShowAlert(true);
      } else {
        const body = {
          realName: name,
          displayName: nick,
          email: email,
          password: password,
          phone: number,
          birthDate: birth,
          mailKey: code,
        };

        axios
          .post(`${process.env.REACT_APP_API_URL}/members/signup`, body, {
            headers: {
              Authorization: accessToken,
              refresh: refreshToken,
            },
          })
          .then(() => {
            setAlertMessage("회원가입 성공!");
            setShowAlert(true);
            setIsOk(true);
          })
          .catch(() => {
            setAlertMessage("모든 정보를 기입하였는지와 이메일을 확인해주세요");
            setShowAlert(true);
          });
      }
    }
  };
  const getCode = () => {
    const body = {
      email,
    };

    axios
      .post(`${url}/members/email`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setAlertMessage("이메일 코드가 전송되었습니다!");
        setShowAlert(true);
      })
      .catch((err) => {
        if (err.response.status === 409) {
          setAlertMessage("이미 가입된 이메일 입니다!");
          setShowAlert(true);
        } else {
          setAlertMessage("없는 이메일 입니다!");
          setShowAlert(true);
        }
      });
  };
  const okGotoLogin = () => {
    setShowAlert(false);
    navigate("/login");
  };
  useEffect(() => {
    const style = localStorage.getItem("oauthSign");
    if (style === "true") {
      setType("oauth");
    } else if (style === "false") {
      setType("normal");
    } else {
      setType(null);
      setAlertMessage("잘못된 경로로 접근함!");
      setShowAlert(true);
    }
    localStorage.removeItem("oauthSign");
  }, []);
  return (
    <styles.Container>
      {showAlert ? (
        <Alert
          text={alertMessage}
          onClickOk={isOk ? okGotoLogin : type ? () => setShowAlert(false) : () => navigate("/login")}
        />
      ) : null}
      {type ? (
        <styles.InputContainer>
          <styles.TopContainer>
            <styles.Title fontSize="28px" fontWeight="500">
              회원가입
            </styles.Title>
            <styles.StepContainer>
              <styles.Step type="off">
                01<p className="text">약관동의</p>
              </styles.Step>
              <MdOutlineKeyboardArrowRight size="22px" color="#A84448" />
              <styles.Step type="on">
                02<p className="text">정보 입력</p>
              </styles.Step>
            </styles.StepContainer>
          </styles.TopContainer>
          <styles.MiddleContainer>
            <div className="title">
              <styles.Title fontSize="22px" fontWeight="400">
                기본정보
              </styles.Title>
            </div>
            <styles.InfoTable>
              {type === "oauth" ? null : (
                <>
                  <styles.SingleInfo>
                    <div className="name email">이메일</div>
                    <div className="code-pos">
                      <ButtonDark width="60px" height="30px" fontSize="12px" borderRadius="30px" onClick={getCode}>
                        인증요청
                      </ButtonDark>
                    </div>
                    <div className="input-container">
                      <input onChange={onEmail} />
                      <div className="code">
                        <p className="label">인증코드</p>
                        <input onChange={onCode} className="code-input" />
                      </div>
                    </div>
                  </styles.SingleInfo>
                  <styles.SingleInfo>
                    <div className="name password">비밀번호</div>
                    <form className="input-container">
                      <input autoComplete="off" type="password" onChange={onPassword} />
                      {isDisabled ? (
                        <styles.ValidPassword>문자, 숫자, 특수기호를 결합해 8자 이상</styles.ValidPassword>
                      ) : null}
                    </form>
                  </styles.SingleInfo>
                  <styles.SingleInfo>
                    <div className="name">비밀번호 확인</div>
                    <form className="input-container">
                      <input
                        autoComplete="off"
                        className={isDisabled ? "disable" : ""}
                        type="password"
                        disabled={isDisabled}
                        onChange={onPasswordCheck}
                      />
                      {isDisabled ? (
                        <styles.ValidPassword>먼저 비밀번호를 옳바르게 입력하세요</styles.ValidPassword>
                      ) : null}
                    </form>
                  </styles.SingleInfo>
                </>
              )}

              <styles.SingleInfo>
                <div className="name">이름</div>
                <div className="input-container">
                  <input onChange={onName} />
                </div>
              </styles.SingleInfo>
              <styles.SingleInfo>
                <div className="name">닉네임</div>
                <div className="input-container">
                  <input onChange={onNick} />
                </div>
              </styles.SingleInfo>
              <styles.SingleInfo>
                <div className="name">생년월일</div>
                <div className="input-container">
                  <input value={birth} type="date" onChange={onBirth} />
                </div>
              </styles.SingleInfo>
              <styles.SingleInfo>
                <div className="name">전화번호</div>
                <div className="input-container">
                  <input value={number} onChange={onNumber} />
                </div>
              </styles.SingleInfo>
            </styles.InfoTable>
          </styles.MiddleContainer>
          <styles.BottomContainer>
            <ButtonLight width="150px" height="45px" fontSize="18px" onClick={() => navigate("/signup")}>
              회원가입 선택
            </ButtonLight>
            <ButtonDark width="150px" height="45px" fontSize="18px" onClick={onClickSign}>
              회원가입
            </ButtonDark>
          </styles.BottomContainer>
        </styles.InputContainer>
      ) : null}
    </styles.Container>
  );
};

export default SignupInput;
