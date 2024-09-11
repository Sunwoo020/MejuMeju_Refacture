import styled from "styled-components";
import * as Common from "@styles/index";

export const SingleInfo = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${Common.fontSize(16)};
  border-bottom: 1px solid #b2b2b2;
  background-color: #ededed;

  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    width: calc(100% - 190px);
    padding: 10px;
    background-color: white;

    input {
      border: 1px solid #b2b2b2;
      padding: 5px 10px;
      ${Common.fontSize(16)};
      width: 80%;

      @media screen and (max-width: 768px) {
        width: 75%;
        ${Common.fontSize(12)};
      }
    }
  }
`;

export const ContentsContainer = styled(Common.FlexCenterCol)`
  max-width: 700px;
  width: 100%;
  padding: 0 25px;
  gap: 40px;
  position: absolute;
  top: 15%;
  padding-bottom: 100px;
`;
