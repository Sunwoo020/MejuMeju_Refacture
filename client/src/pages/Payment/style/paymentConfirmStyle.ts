import styled from "styled-components";

export const PaymentConfirmContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  & h2 {
    font-size: 24px;
    font-weight: bold;
  }

  & div.main {
    width: 100%;
    ${({ theme }) => theme.common.flexCenterCol};
  }

  & div.reason {
    margin-top: 100px;
    height: 100px;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & div.button {
    margin-top: 100px;
  }
`;
