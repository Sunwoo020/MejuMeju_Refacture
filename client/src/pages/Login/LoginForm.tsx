import { ChangeEvent } from "react";
import { ButtonDark } from "@components/common/commonButton";

interface LoginFormProps {
  username: string;
  password: string;
  onUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onLogin: () => void;
}

const LoginForm = ({ username, password, onUsernameChange, onPasswordChange, onKeyDown, onLogin }: LoginFormProps) => {
  return (
    <div className="flex-row">
      <form className="flex-col">
        <input placeholder="이메일" type="email" value={username} onChange={onUsernameChange} onKeyDown={onKeyDown} />
        <input
          placeholder="비밀번호"
          type="password"
          autoComplete="off"
          value={password}
          onChange={onPasswordChange}
          onKeyDown={onKeyDown}
        />
      </form>
      <div className="button">
        <ButtonDark width="100%" height="100%" fontSize="18px" fontWeight="500" onClick={onLogin}>
          로그인
        </ButtonDark>
      </div>
    </div>
  );
};

export default LoginForm;
