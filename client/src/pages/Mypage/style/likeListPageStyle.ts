import styled from "styled-components";

export const LikepageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1250px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
`;
export const PageTitleStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  padding-right: 20px;
  > div {
    font-weight: 600;
  }
`;
export const InfoStyled = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const TableStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 8;
`;
export const LeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
  box-shadow: 4px 4px 4px rgba(8, 8, 8, 0.4);
`;
export const EachList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const EachTitle = styled.div`
  flex-grow: 9;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-basis: 0;
  > img {
    width: 10%;
    height: 10rem;
    cursor: pointer;
  }
  .productname {
    font-size: 22px;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
  .productprice {
    font-size: 22px;
  }
`;
export const EachBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 10px;
  background-color: #f7f7f7;
  border: none;
`;
export const PagenationStyled = styled.div`
  flex-grow: 2;
`;
