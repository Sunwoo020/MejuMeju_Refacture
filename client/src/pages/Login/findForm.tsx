import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonDark, ButtonLight } from "@components/common/Button";
import Alert from "@components/common/AlertModal";
import * as Common from "@styles/CommonConainer";
import * as styled from "./styles";
import useAxiosAll from "@hooks/useAxiosAll";

interface FindFormProps {
  title: string;
  subtitle: string;
  buttonText: string;
  inputs: { placeholder: string; type: string; value: string; handler: (e: ChangeEvent<HTMLInputElement>) => void }[];
  apiUrl: string;
  alertMessages: { success: string; error: string };
  successAction?: () => void;
}

const FindForm = ({ title, subtitle, buttonText, inputs, apiUrl, alertMessages, successAction }: FindFormProps) => {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [doAxios, data, err, ok] = useAxiosAll();

  const handleFind = () => {
    const body = inputs.reduce((acc, { placeholder, value }) => {
      acc[placeholder.toLowerCase()] = value;
      return acc;
    }, {} as Record<string, string>);

    doAxios("post", apiUrl, body, false);
  };

  useEffect(() => {
    if (err) {
      setAlertMessage(alertMessages.error);
      setShowAlert(true);
    }
  }, [err, alertMessages]);

  useEffect(() => {
    if (ok) {
      setAlertMessage(alertMessages.success);
      setShowAlert(true);
      successAction && successAction();
    }
  }, [ok, alertMessages, successAction]);

  return (
    <Common.Container>
      {showAlert && <Alert text={alertMessage} onClickOk={() => setShowAlert(false)} />}
      <styled.ContentsContainer>
        <Common.TopContainer>
          <Common.Title className="label" fontSize="28px" fontWeight="500">
            {title}
          </Common.Title>
        </Common.TopContainer>
        <styled.MiddleContainer>
          <Common.InputContainer>
            <Common.Title fontSize="22px" fontWeight="400">
              {subtitle}
            </Common.Title>
            <div className="flex-row">
              <div className="flex-col">
                {inputs.map(({ placeholder, type, value, handler }) => (
                  <input key={placeholder} placeholder={placeholder} type={type} value={value} onChange={handler} />
                ))}
              </div>
              <div className="button">
                <ButtonDark width="100%" height="100%" fontSize="18px" fontWeight="500" onClick={handleFind}>
                  {buttonText}
                </ButtonDark>
              </div>
            </div>
          </Common.InputContainer>
          <styled.Contour />
          <Common.BottomContainer>
            <ButtonLight width="150px" height="45px" fontSize="18px" onClick={() => navigate("/findemail")}>
              이메일찾기
            </ButtonLight>
            <ButtonDark width="150px" height="45px" fontSize="18px" onClick={() => navigate("/login")}>
              로그인하기
            </ButtonDark>
          </Common.BottomContainer>
        </styled.MiddleContainer>
      </styled.ContentsContainer>
    </Common.Container>
  );
};

export default FindForm;
