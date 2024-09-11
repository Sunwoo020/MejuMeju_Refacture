import styled from "styled-components";

export const MiddleContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;

  @media screen and (max-width: 768px) {
    background-color: inherit;
    border: none;
    padding: 0;
  }

  gap: 30px;
  width: 100%;
`;

export const ContentsContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 50px;
  max-width: 600px;
  width: 100%;
  padding: 0 25px;
  position: absolute;
  top: 25%;

  @media screen and (max-width: 768px) {
    top: 15%;
  }
`;
