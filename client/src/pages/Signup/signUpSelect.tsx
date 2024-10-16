import { useNavigate } from "react-router-dom";
import { TfiFacebook } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import * as styled from "./styles";
const url = `${process.env.REACT_APP_API_URL}`;

const SignupSelection = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/login");
  };
  const toSignTerm = () => {
    navigate("/signup/term");
  };
  const googleOAuthHandler = () => {
    //오어스 구글 인증링크 이동
    window.location.assign(`${url}/oauth2/authorization/google`);
  };
  const facebookOAuthHandler = () => {
    //오어스 페이스북 인증링크로 이동
    window.location.assign(`${url}/oauth2/authorization/facebook`);
  };
  const kakaoOAuthHandler = () => {
    window.location.assign(`${url}/oauth2/authorization/kakao`);
  };
  return (
    <styled.MainContainer>
      <styled.SelectionContainer>
        <styled.BasicSignupBox onClick={toSignTerm}>쇼핑몰 회원가입</styled.BasicSignupBox>
        <styled.Contour />
        <styled.OAuthSignUpBox onClick={googleOAuthHandler} type="google">
          <styled.OAuthIconContainer>
            <FcGoogle size="35" color="black" />
          </styled.OAuthIconContainer>
          <div className="desc">구글로 회원가입</div>
        </styled.OAuthSignUpBox>
        <styled.OAuthSignUpBox onClick={facebookOAuthHandler} type="facebook">
          <styled.OAuthIconContainer>
            <TfiFacebook size="30" color="white" />
          </styled.OAuthIconContainer>
          <div className="desc">페이스북으로 회원가입</div>
        </styled.OAuthSignUpBox>
        <styled.OAuthSignUpBox onClick={kakaoOAuthHandler} type="kakao">
          <styled.OAuthIconContainer>
            <RiKakaoTalkFill size="35" color="black" />
          </styled.OAuthIconContainer>
          <div className="desc">카카오톡으로 시작하기</div>
        </styled.OAuthSignUpBox>
      </styled.SelectionContainer>
      <div className="go-login">
        이미 회원이신가요?
        <div onClick={toLogin} className="click-to-login">
          로그인
        </div>
      </div>
    </styled.MainContainer>
  );
};
export default SignupSelection;
