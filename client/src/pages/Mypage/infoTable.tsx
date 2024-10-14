import React, { useState, useEffect, ChangeEvent } from "react";
import * as styled from "./style";
import * as Type from "./util";

const InfoTable = ({ setBody, userInfo, isOauth }: Type.TableProsp) => {
  const subTitle = ["이름", "닉네임", "생년월일", "전화번호", "이메일"];
  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (userInfo) {
      setPhone(userInfo.phone);
      setDisplayName(userInfo.displayName);
    }
  }, [userInfo]);

  useEffect(() => {
    if (setBody) {
      setBody({ phone, displayName, password, passwordCheck });
    }
  }, [phone, displayName, password, passwordCheck]);

  const handleDisplay = (e: ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value);

  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^\d]/g, "").match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
    if (val) {
      setPhone(
        !val[2] ? val[1] : val[3] ? `${val[1]}-${val[2]}-${val[3]}` : val[2] ? `${val[1]}-${val[2]}` : `${val[1]}`,
      );
    }
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const val = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(e.target.value);
    setPassword(e.target.value);
    setIsDisabled(!val);
  };

  const handlePasswordCheck = (e: ChangeEvent<HTMLInputElement>) => setPasswordCheck(e.target.value);

  return (
    <styled.StyledTable>
      <tbody>
        {userInfo === null
          ? null
          : Object.keys(userInfo).map((key, idx) => {
              if (idx > 5) return null;
              return (
                <tr key={idx}>
                  <styled.StyledTh>{subTitle[idx]}</styled.StyledTh>
                  {key === "displayName" || key === "phone" ? (
                    <styled.StyledTd>
                      <input
                        value={key === "phone" ? phone : displayName}
                        onChange={key === "phone" ? handlePhone : handleDisplay}
                      />
                    </styled.StyledTd>
                  ) : (
                    <styled.StyledTd>{userInfo[key as keyof Type.Datatype]}</styled.StyledTd>
                  )}
                </tr>
              );
            })}
        {!isOauth && (
          <>
            <tr>
              <styled.StyledTh>비밀번호 변경</styled.StyledTh>
              <styled.StyledTd>
                <input type="password" onChange={handlePassword} autoComplete="off" />
                {isDisabled && (
                  <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                    변경할 비밀번호를 문자, 숫자, 특수기호를 결합해 8자 이상 작성하세요
                  </p>
                )}
              </styled.StyledTd>
            </tr>
            <tr>
              <styled.StyledTh>비밀번호 변경 확인</styled.StyledTh>
              <styled.StyledTd>
                <input
                  disabled={isDisabled}
                  type="password"
                  onChange={handlePasswordCheck}
                  placeholder="비밀번호를 먼저 올바르게 입력하세요"
                  autoComplete="off"
                />
              </styled.StyledTd>
            </tr>
          </>
        )}
      </tbody>
    </styled.StyledTable>
  );
};

export default InfoTable;
