import { useState, ChangeEvent } from "react";
import * as styled from "./style";
import axios from "axios";
import spinner from "@assets/gif/spinner.gif";
import { IoMdSend } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { ButtonDark } from "@components/common/Button";

const ChatComponent = () => {
  const [input, setInput] = useState("null");
  const [answer, setAnswer] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  async function handleSubmit() {
    await getAnswer();
  }
  const sendAxios = async () => {
    const body = {
      question: input,
    };
    await axios
      .post(`${process.env.REACT_APP_API_URL}/chat-gpt/question`, body, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        setIsLoading(true);
        setQuestion(input);
        const splittedText = res.data.choices[0].text.split("\n");
        setAnswer(splittedText);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };
  async function getAnswer() {
    sendAxios();
    setIsLoading(false);
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <>
      {isOpen ? (
        <styled.GptContainer>
          <styled.TopContainer>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="cancel"
            >
              <MdOutlineCancel color="white" size={20} />
            </button>
            <div className="title">무엇이든 물어보세요!</div>
          </styled.TopContainer>
          <styled.MiddleContainer>
            {isLoading ? (
              <div className="col">
                <div className="q-container">
                  <div className="question">{question}</div>
                </div>
                <div className="answer">
                  {answer?.map((el, idx) => (
                    <p key={idx}>{el}</p>
                  ))}
                </div>
              </div>
            ) : isLoading === null ? (
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
          <ButtonDark width="60px" height="60px" fontSize="18px" borderRadius="50%" onClick={() => setIsOpen(true)}>
            Chat
          </ButtonDark>
        </styled.BtnContainer>
      )}
    </>
  );
};

export default ChatComponent;
