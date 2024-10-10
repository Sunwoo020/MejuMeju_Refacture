import { useState, ChangeEvent } from "react";
import FindForm from "./findForm";

const FindPassword = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const phoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^\d]/g, "").match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
    if (val) {
      setPhone(
        !val[2] ? val[1] : val[3] ? `${val[1]}-${val[2]}-${val[3]}` : val[2] ? `${val[1]}-${val[2]}` : `${val[1]}`,
      );
    }
  };

  const inputs = [
    {
      placeholder: "이름",
      type: "text",
      value: name,
      handler: (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    },
    {
      placeholder: "이메일",
      type: "email",
      value: email,
      handler: (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    },
    { placeholder: "전화번호", type: "text", value: phone, handler: phoneHandler },
  ];

  return (
    <FindForm
      title="비밀번호 찾기"
      subtitle="회원 비밀번호 찾기"
      buttonText="비밀번호 찾기"
      inputs={inputs}
      apiUrl="/members/find-password"
      alertMessages={{
        success: "해당 이메일로 임시 비밀번호를 발급했습니다!",
        error: "해당 정보로 가입된 회원정보가 없습니다!",
      }}
    />
  );
};

export default FindPassword;
