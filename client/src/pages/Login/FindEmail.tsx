import { useState, ChangeEvent } from "react";
import FindForm from "./findForm";

const FindEmail = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isFind, setIsFind] = useState("");

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
    { placeholder: "전화번호", type: "text", value: phone, handler: phoneHandler },
  ];

  const successAction = () => {
    // 이메일 마스킹 처리 로직
    // ...
  };

  return (
    <FindForm
      title="이메일 찾기"
      subtitle="회원 이메일 찾기"
      buttonText="이메일 찾기"
      inputs={inputs}
      apiUrl="/members/find-id"
      alertMessages={{ success: "이메일을 찾았습니다!", error: "이름과 전화번호에 해당하는 이메일이 없습니다!" }}
      successAction={successAction}
    />
  );
};

export default FindEmail;
