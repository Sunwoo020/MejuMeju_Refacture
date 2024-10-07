import * as styled from "./styles";
import { AlertProps } from "@utils/types/Interfaces";
import { ButtonLight, ButtonDark } from "./Button";

const Alert = ({ title = "", text, onClickOk, onClickCancel }: AlertProps) => {
  const splittedText = text.split("\\");

  return (
    <styled.Container>
      <styled.AlertContainer>
        {title !== "" ? <div className="title">{title}</div> : null}
        {splittedText.map((el, idx) => (
          <p key={idx}>{el}</p>
        ))}

        {onClickCancel ? (
          <div className="two-buttons">
            <ButtonLight
              width="150px"
              height="45px"
              fontSize="18px"
              borderRadius="2px"
              border="solid 1px lightgray"
              onClick={onClickCancel}
            >
              취소
            </ButtonLight>
            <ButtonDark width="150px" height="45px" fontSize="18px" borderRadius="2px" onClick={onClickOk}>
              확인
            </ButtonDark>
          </div>
        ) : (
          <ButtonDark width="150px" height="45px" fontSize="18px" borderRadius="2px" onClick={onClickOk}>
            확인
          </ButtonDark>
        )}
      </styled.AlertContainer>
    </styled.Container>
  );
};
export default Alert;
