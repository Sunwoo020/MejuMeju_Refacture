import styled from "styled-components";
export const PaymentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;

  .button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 150px;
    width: 25%;
    padding-bottom: 200px;

    @media screen and (max-width: 767px) {
      width: 100%;
      margin-top: 0px;
      padding-left: 25px;
      padding-right: 25px;
    }
  }

  .buttonDetail {
    width: 150px;
    padding-top: 50px;
    border: none;
  }

  & h2 {
    font-size: 48px;
    font-weight: bold;
  }

  & div.main {
    width: 100%;
    ${({ theme }) => theme.common.flexCenterCol};
  }
`;
