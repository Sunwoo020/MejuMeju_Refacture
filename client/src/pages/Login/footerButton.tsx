import { ButtonDark, ButtonLight } from "@components/common/commonButton";
import { useNavigate } from "react-router-dom";
import * as Common from "@styles/CommonConainer";

const FooterButton = () => {
  const navigate = useNavigate();

  return (
    <Common.BottomContainer>
      <ButtonDark width="150px" height="100%" fontSize="18px" fontWeight="500" onClick={() => navigate("/signup")}>
        회원가입
      </ButtonDark>
      <ButtonLight width="150px" height="100%" fontSize="16px" fontWeight="500" onClick={() => navigate("/findemail")}>
        이메일 찾기
      </ButtonLight>
      <ButtonLight
        width="150px"
        height="100%"
        fontSize="16px"
        fontWeight="500"
        onClick={() => navigate("/findpassword")}
      >
        비밀번호 찾기
      </ButtonLight>
    </Common.BottomContainer>
  );
};

export default FooterButton;
