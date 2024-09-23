import styled from "styled-components";
import * as Common from "@styles/Common";

export const TotalStyled = styled(Common.FlexCenterCol)`
  background-color: #f7f7f7;

  form {
    width: 100%;
  }
`;

export const InfoContainer = styled(Common.FlexCol)`
  width: 100vw;
  height: 100vh;
  max-width: 1250px;
  margin-top: 150px;

  > p {
    padding-top: 10px;
    padding-left: 30px;
    font-size: 22px;
    font-weight: 600;
  }
`;

export const InfoBodyupStyled = styled(Common.FlexCenterCol)`
  margin-top: 20px;

  input {
    font-size: 16px;
    padding: 10px;
    width: 80%;
  }
`;

export const InfoBodydownStyled = styled(Common.FlexCenterRow)`
  gap: 250px;
  margin-top: 20px;
  padding-bottom: 10px;
`;

export const StyledTable = styled.table`
  border: 2px solid #dedede;
  max-width: 700px;
  width: 70%;
  height: 750px;
  font-size: 16px;
`;

export const StyledTd = styled.td`
  vertical-align: middle;
  padding-left: 20px;
`;

export const StyledTh = styled.th`
  vertical-align: middle;
  text-align: left;
  padding-left: 20px;
  font-weight: 600;
`;

export const ModalContainer = styled(Common.FlexCenterCol)`
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  form {
    width: 100%;
  }
`;

export const ModalBackdrop = styled.div`
  background-color: whitesmoke;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const ModalView = styled(Common.FlexCenterCol)`
  background-color: #dedede;
  border-radius: 7px;
  width: 600px;
  height: 300px;
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 35%;
  text-align: center;
  padding-top: 50px;

  > p {
    font-size: 20px;
    font-weight: 500;
  }

  .password-container {
    ${({ theme }) => theme.common.flexCenterRow};
  }

  input {
    margin: 30px;
    border: 1px solid #b2b2b2;
    padding: 5px 10px;
    font-size: 16px;
    width: 50%;
  }
`;

export const CloseBtn = styled(Common.FlexCenterRow)`
  margin-top: 20px;
  gap: 70px;
  cursor: pointer;
`;

export const WindowCloseBtn = styled.div`
  float: right;
  margin-right: 10px;
  cursor: pointer;
`;

export const ModalCloseBtn = styled(Common.FlexCenterRow)`
  border: 2px solid #181818;
  height: 52px;
  width: 80px;
  border-radius: 7px;
  line-height: 100%;
  font-size: 20px;
  padding-top: 10px;
  color: #181818;
  font-weight: 700;
  cursor: pointer;
`;

export const CheckContainer = styled(Common.FlexCenterCol)`
  position: fixed;
  top: 20%;
  left: calc(50% - 250px);
  width: 500px;
  padding: 50px;
  gap: 40px;

  .title {
    font-size: 20px;
    font-weight: 500;
  }

  input {
    width: 70%;
    padding: 10px;
    font-size: 18px;
  }

  form {
    width: 100%;
    ${({ theme }) => theme.common.flexCenterCol};
  }
`;
