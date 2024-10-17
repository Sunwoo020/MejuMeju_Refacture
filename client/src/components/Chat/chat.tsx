import { useReducer, ChangeEvent } from "react";
import * as styled from "./style";
import instance from "@utils/api/axiosInstance";
import spinner from "@assets/gif/spinner.gif";
import { IoMdSend } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { ButtonDark } from "@components/common/commonButton";
import { Action, State } from "./interface";

const initialState: State = {
  input: "null",
  answer: null,
  isLoading: null,
  isOpen: false,
  question: "",
};

function chatReducer(state: State, action: Action): State {
  return {
    ...state,
    [action.type]: action.payload,
  };
}

const ChatComponent = () => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "input", payload: e.target.value });
  };

  const handleSubmit = async () => {
    await getAnswer();
  };

  const sendAxios = async () => {
    const body = {
      question: state.input,
    };
    try {
      dispatch({ type: "isLoading", payload: true });
      const res = await instance.post("/chat-gpt/question", body);
      dispatch({ type: "question", payload: state.input });
      const splittedText = res.data.choices[0].text.split("\n");
      dispatch({ type: "answer", payload: splittedText });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch({ type: "isLoading", payload: false });
    }
  };

  const getAnswer = async () => {
    await sendAxios();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      {state.isOpen ? (
        <styled.GptContainer>
          <styled.TopContainer>
            <button
              onClick={() => {
                dispatch({ type: "isOpen", payload: false });
              }}
              className="cancel"
            >
              <MdOutlineCancel color="white" size={20} />
            </button>
            <div className="title">무엇이든 물어보세요!</div>
          </styled.TopContainer>
          <styled.MiddleContainer>
            {state.isLoading ? (
              <div className="col">
                <div className="q-container">
                  <div className="question">{state.question}</div>
                </div>
                <div className="answer">
                  {state.answer?.map((el, idx) => (
                    <p key={idx}>{el}</p>
                  ))}
                </div>
              </div>
            ) : state.isLoading === null ? (
              <div>편하게 질문하세요!</div>
            ) : (
              <img className="loading" src={spinner} alt="로딩중" />
            )}
          </styled.MiddleContainer>
          <styled.BottonContainer>
            <input onKeyDown={handleKeyDown} onChange={handleInput} className="input" />
            <IoMdSend className="sendBtn" size="25" color="gray" onClick={handleSubmit}>
              전송
            </IoMdSend>
          </styled.BottonContainer>
        </styled.GptContainer>
      ) : (
        <styled.BtnContainer>
          <ButtonDark
            width="60px"
            height="60px"
            fontSize="18px"
            borderRadius="50%"
            onClick={() => dispatch({ type: "isOpen", payload: true })}
          >
            Chat
          </ButtonDark>
        </styled.BtnContainer>
      )}
    </>
  );
};

export default ChatComponent;
