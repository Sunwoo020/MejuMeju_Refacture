import * as styled from "./style";
import Answer from "@components/helpCenter/answerContainer";
import { useState } from "react";
import { ButtonDark } from "@components/common/commonButton";

const HelpCenter = () => {
  const answerData = [
    "상단 마이페이지 메뉴의 mypage로 이동하시면 회원 정보 수정 페이지로 이동하실 수 있습니다!\n\n Oauth 로그인 사용자의 경우 비밀번호 수정은 제한 됩니다!",
    "결제 페이지로 이동하신 후 픽업 날짜 및 장소를 지정하실 수 있습니다! 픽업에 대한 자세한 문의는 결제 페이지의 픽업 매장 전화번호를 통해 문의 바랍니다!",
    "픽업 장소 변경을 원하시면 결제 페이지로 이동하신 후 하단에 픽업 장소를 선택하기 버튼을 클릭해 변경이 가능합니다.",
    "비밀번호의 경우 개인정보 수정 페이지에서 수정이 가능하며, Oauth 사용자의 경우 비밀번호 수정 기능은 제공 되지 않습니다.",
    "회원 탈퇴의 경우 개인정보 수정 페이지 오른쪽 하단의 버튼을 통해 회원 탈퇴가 가능하십니다.",
  ];
  const TitleData = [
    "회원정보를 수정하고 싶어요.",
    "픽업 날짜를 변경하고 싶어요.",
    "픽업 장소를 변경하고 싶어요.",
    "비밀번호를 변경하고 싶어요.",
    "회원을 탈퇴하고 싶어요.",
  ];
  const [isClick, setIsClick] = useState([false, false, false, false, false]);
  const detailControl = (idx: number) => {
    const newState = [...isClick];
    newState[idx] = !newState[idx];
    setIsClick(newState);
  };
  return (
    <styled.Container>
      <styled.ContentsContainer>
        <styled.TopContainer>
          <styled.PageName>자주 묻는 질문</styled.PageName>
        </styled.TopContainer>
        <styled.MiddleContainer>
          {answerData.map((el, idx) => {
            return (
              <>
                <styled.Title>
                  {TitleData[idx]}
                  <styled.BtnContainer>
                    <ButtonDark
                      height="50px"
                      width="80px"
                      onClick={() => {
                        detailControl(idx);
                      }}
                    >
                      {isClick[idx] ? "닫기" : "자세히"}
                    </ButtonDark>
                  </styled.BtnContainer>
                </styled.Title>
                {isClick[idx] ? <Answer text={el}></Answer> : null}
              </>
            );
          })}
        </styled.MiddleContainer>
      </styled.ContentsContainer>
    </styled.Container>
  );
};

export default HelpCenter;
