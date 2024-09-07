import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ButtonDark, ButtonLight } from "@components/Common/Button";
import Alert from "@components/Common/AlertModal";
import * as styles from "@pages/Signup/styles";

const url = `${process.env.REACT_APP_API_URL}`;

interface FormData {
  name: string;
  nick: string;
  birth: string;
  number: string;
  email: string;
  code: string;
  password: string;
  passwordCheck: string;
}

const SignupInput = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [type, setType] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    const accessToken = location.state.access;
    const refreshToken = location.state.refresh;

    if (type === "oauth" && accessToken && refreshToken) {
      const body = {
        realName: data.name,
        displayName: data.nick,
        phone: data.number,
        birthDate: data.birth,
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
      if (data.password !== data.passwordCheck) {
        setAlertMessage("비밀번호와 비밀번호 확인이 같지 않습니다!");
        setShowAlert(true);
      } else if (!(data.nick && data.code && data.name && data.birth && data.number)) {
        setAlertMessage("모든 정보가 입력되어야 합니다!");
        setShowAlert(true);
      } else {
        const body = {
          realName: data.name,
          displayName: data.nick,
          email: data.email,
          password: data.password,
          phone: data.number,
          birthDate: data.birth,
          mailKey: data.code,
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
    const email = watch("email");

    axios
      .post(
        `${url}/members/email`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
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
                      <input {...register("email")} />
                      <div className="code">
                        <p className="label">인증코드</p>
                        <input {...register("code")} className="code-input" />
                      </div>
                    </div>
                  </styles.SingleInfo>
                  <styles.SingleInfo>
                    <div className="name password">비밀번호</div>
                    <form className="input-container">
                      <input autoComplete="off" type="password" {...register("password")} />
                      {errors.password ? (
                        <styles.ValidPassword>문자, 숫자, 특수기호를 결합해 8자 이상</styles.ValidPassword>
                      ) : null}
                    </form>
                  </styles.SingleInfo>
                  <styles.SingleInfo>
                    <div className="name">비밀번호 확인</div>
                    <form className="input-container">
                      <input
                        autoComplete="off"
                        type="password"
                        {...register("passwordCheck")}
                        className={errors.password ? "disable" : ""}
                      />
                      {errors.passwordCheck ? (
                        <styles.ValidPassword>먼저 비밀번호를 올바르게 입력하세요</styles.ValidPassword>
                      ) : null}
                    </form>
                  </styles.SingleInfo>
                </>
              )}

              <styles.SingleInfo>
                <div className="name">이름</div>
                <div className="input-container">
                  <input {...register("name")} />
                </div>
              </styles.SingleInfo>
              <styles.SingleInfo>
                <div className="name">닉네임</div>
                <div className="input-container">
                  <input {...register("nick")} />
                </div>
              </styles.SingleInfo>
              <styles.SingleInfo>
                <div className="name">생년월일</div>
                <div className="input-container">
                  <input
                    {...register("birth")}
                    type="date"
                    onChange={(e) => {
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
                        setValue("birth", e.target.value);
                      }
                    }}
                  />
                </div>
              </styles.SingleInfo>
              <styles.SingleInfo>
                <div className="name">전화번호</div>
                <div className="input-container">
                  <input
                    {...register("number")}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^\d]/g, "").match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
                      if (val) {
                        setValue(
                          "number",
                          !val[2]
                            ? val[1]
                            : val[3]
                            ? `${val[1]}-${val[2]}-${val[3]}`
                            : val[2]
                            ? `${val[1]}-${val[2]}`
                            : `${val[1]}`,
                        );
                      }
                    }}
                  />
                </div>
              </styles.SingleInfo>
            </styles.InfoTable>
          </styles.MiddleContainer>
          <styles.BottomContainer>
            <ButtonLight width="150px" height="45px" fontSize="18px" onClick={() => navigate("/signup")}>
              회원가입 선택
            </ButtonLight>
            <ButtonDark width="150px" height="45px" fontSize="18px" onClick={handleSubmit(onSubmit)}>
              회원가입
            </ButtonDark>
          </styles.BottomContainer>
        </styles.InputContainer>
      ) : null}
    </styles.Container>
  );
};

export default SignupInput;
