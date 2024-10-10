import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { TfiFacebook } from "react-icons/tfi";
import * as styled from "./styles";

interface OAuthButtonsProps {
  onGoogleClick: () => void;
  onFacebookClick: () => void;
  onKakaoClick: () => void;
}

const OAuthButton = ({ onGoogleClick, onFacebookClick, onKakaoClick }: OAuthButtonsProps) => {
  return (
    <>
      <styled.OAuthSignUpBox onClick={onGoogleClick} type="google">
        <styled.OAuthIconContainer>
          <FcGoogle size="35" color="black" />
        </styled.OAuthIconContainer>
        <div className="desc">구글로 시작하기</div>
      </styled.OAuthSignUpBox>
      <styled.OAuthSignUpBox onClick={onFacebookClick} type="naver">
        <styled.OAuthIconContainer>
          <TfiFacebook size="30" color="white" />
        </styled.OAuthIconContainer>
        <div className="desc">페이스북으로 시작하기</div>
      </styled.OAuthSignUpBox>
      <styled.OAuthSignUpBox onClick={onKakaoClick} type="kakao">
        <styled.OAuthIconContainer>
          <RiKakaoTalkFill size="35" color="black" />
        </styled.OAuthIconContainer>
        <div className="desc">카카오톡으로 시작하기</div>
      </styled.OAuthSignUpBox>
    </>
  );
};

export default OAuthButton;
