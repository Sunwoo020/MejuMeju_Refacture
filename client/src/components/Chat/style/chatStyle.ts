import styled from "styled-components";
import * as Common from "@styles/Common";

export const BtnContainer = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;

  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    button {
      width: 50px;
      height: 50px;
      ${Common.fontSize(12)};
    }
  }
`;

export const GptContainer = styled.div`
  position: fixed;
  right: 10px;
  top: 30vh;
  ${Common.FlexCol};
  width: 400px;
  height: 600px;
  color: white;
  background-color: gray;
  border: 1px solid lightgray;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    right: 5vw;
    width: 90vw;
    height: 60vh;
  }
`;

export const TopContainer = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
  height: 15%;
  ${Common.FlexRow};
  justify-content: flex-start;
  align-items: center;

  .title {
    ${Common.fontSize(22)};
    font-weight: 500;
  }

  .cancel {
    position: absolute;
    right: 0;
    top: 10px;
    border: none;
    cursor: pointer;
    background-color: inherit;
  }
`;

export const MiddleContainer = styled.div`
  position: relative;
  padding: 20px;
  height: 70%;
  color: ${({ theme }) => theme.colors.themeColor};
  ${Common.fontSize(18)};
  background-color: #f0f0f0;
  ${Common.ScrollbarStyle};

  .col {
    ${Common.FlexCol};
    gap: 20px;
  }

  .q-container {
    width: 100%;
    ${Common.FlexRow};
    justify-content: flex-end;
  }

  .question {
    position: relative;
    background: gray;
    border-radius: 0.4em;
    padding: 5px 10px;
    color: white;
  }

  .question:after {
    content: "";
    position: absolute;
    right: 5px;
    top: 50%;
    border: 20px solid transparent;
    border-left-color: gray;
    border-right: 0;
    border-bottom: 0;
    margin-top: -10px;
    margin-right: -20px;
  }

  .answer {
    ${Common.FlexCol};
    align-items: flex-start;
    justify-content: center;
    padding: 5px 15px;
    gap: 10px;
    margin: 5px;
    position: relative;
    background: white;
    border-radius: 0.4em;
  }

  .answer:after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    border: 20px solid transparent;
    border-right-color: white;
    border-left: 0;
    border-bottom: 0;
    margin-top: -10px;
    margin-left: -20px;
  }

  .loading {
    position: absolute;
    top: 30%;
    right: 36%;
    width: 100px;
  }
`;

export const BottonContainer = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
  height: 15%;
  ${Common.FlexRow};
  gap: 8%;
  align-items: center;

  .input {
    padding: 15px;
    padding-right: 50px;
    ${Common.fontSize(16)};
    width: 100%;
    height: 90%;
    border-radius: 2px;
  }

  .sendBtn {
    position: absolute;
    right: 8%;
    cursor: pointer;
  }
`;
