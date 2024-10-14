import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import * as styled from "./style";
import InfoTable from "./infoTable";
import Modal from "./modal";
import Alert from "@components/common/AlertModal";
import { ButtonDark } from "@components/common/Button";
import * as Type from "./util";
import axiosInstance from "@utils/api/axiosInstance";

export interface Datatype {
  realName: string;
  displayName: string;
  birthDate: string;
  phone: string;
  email: string;
  oauth2Registered?: boolean;
}

const ChangeInfoPage = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState<Type.Bodytype>({ displayName: "", phone: "", password: "", passwordCheck: "" });
  const [userInfo, setUserInfo] = useState<Type.Datatype | null>(null);
  const [isOauth, setIsOauth] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isPass, setIsPass] = useState(false);
  const [checkPassword, setCheckPassword] = useState("");

  // 회원 정보 가져오기
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get("/members");
        const data: Datatype = response.data;

        setUserInfo({
          realName: data.realName,
          displayName: data.displayName,
          birth: data.birthDate,
          phone: data.phone,
          email: data.email,
        });
      } catch (error) {
        localStorage.setItem("needLogin", "needLogin");
        navigate("/login");
      }
    };

    fetchUserInfo();
  }, [navigate]);

  // 회원 정보 변경
  const patchUserInfo = async () => {
    if (body.password === body.passwordCheck) {
      try {
        await axiosInstance.patch("/members", {
          displayName: body.displayName,
          phone: body.phone,
          password: body.password,
        });
        setAlertMessage("정보 변경이 완료되었습니다!");
        setShowAlert(true);
        setIsPass(true);
      } catch (error) {
        setAlertMessage("정보 변경에 실패했습니다.");
        setShowAlert(true);
      }
    } else {
      setAlertMessage("비밀번호 확인이 일치하지 않습니다.");
      setShowAlert(true);
    }
  };

  // 비밀번호 확인
  const handleCheckPassword = (e: ChangeEvent<HTMLInputElement>) => setCheckPassword(e.target.value);

  // 회원 탈퇴 시 비밀번호 확인
  const deleteCheck = async () => {
    if (checkPassword === "") {
      setAlertMessage("비밀번호를 입력해주세요");
      setShowAlert(true);
    } else {
      try {
        await axiosInstance.post("/members/password", { password: checkPassword });
      } catch (error) {
        setAlertMessage("비밀번호가 올바르지 않습니다.");
        setShowAlert(true);
      }
    }
  };

  return (
    <styled.Container>
      {showAlert && <Alert text={alertMessage} onClickOk={() => setShowAlert(false)} />}
      <InfoTable setBody={setBody} userInfo={userInfo} isOauth={isOauth} />
      <styled.InfoContainer>
        <Modal email={userInfo ? userInfo.email : ""} />
        <ButtonDark width="200px" height="40px" onClick={patchUserInfo}>
          정보변경
        </ButtonDark>
      </styled.InfoContainer>
    </styled.Container>
  );
};

export default ChangeInfoPage;
