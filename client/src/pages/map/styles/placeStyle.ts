import styled from "styled-components";

export const TotalStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;
export const PlaceContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1250px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
`;

//지도부분
export const MapBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 6.5;
  justify-content: center;
  align-items: center;
`;

//지도제목
export const MapArticleStyled = styled.div`
  border: 3px solid #dedede;
  margin-bottom: 80px;
  font-size: 18px;
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  font-weight: 600;
`;

export const MapBottomStyled = styled.div`
  flex-grow: 1;
  display: flex;
  flex-grow: 3.5;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
