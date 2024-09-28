import styled from "styled-components";
export const Container = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const AlertContainer = styled.div`
  z-index: 2;
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 30px;
  position: fixed;
  top: 30%;
  left: calc(50% - 250px);
  background-color: #f0f0f0;

  border-radius: 2px;
  width: 500px;
  padding: 70px 40px;
  .two-buttons {
    ${({ theme }) => theme.common.flexCenterRow};
    gap: 20px;
  }
  .title {
    font-size: 20px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 340px;
    padding: 30px 10px;
    font-size: 14px;
    left: calc(50% - 170px);
  }
`;
