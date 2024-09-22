import styled from "styled-components";
import * as Common from "@styles/Common";

export const TotalStyled = styled(Common.FlexCenterCol)`
  background-color: #f7f7f7;
`;
export const PlaceContainer = styled(Common.FlexCol)`
  width: 100vw;
  height: 100vh;
  max-width: 1250px;
  margin-top: 150px;
`;

export const MapBodyStyled = styled(Common.FlexCenterCol)`
  flex-grow: 6.5;
`;

export const MapArticleStyled = styled(Common.FlexCenterCol)`
  border: 3px solid #dedede;
  margin-bottom: 80px;
  font-size: 18px;
  width: 300px;
  height: 50px;
  line-height: 25px;
  font-weight: 600;
`;

// 맵 하단
export const MapBottomStyled = styled(Common.FlexCenterCol)`
  flex-grow: 3.5;
  margin-bottom: 50px;
`;
