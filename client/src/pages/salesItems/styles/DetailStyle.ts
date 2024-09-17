import styled from "styled-components";
import * as Common from "@styles/Common";

export const AlcoholDetailContainer = styled(Common.FlexCenterCol)`
  height: 100%;
  padding: 0 25px;
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const ReviewTitleBox = styled(Common.BorderBottomTitle)`
  ${Common.FlexRow};
  justify-content: space-between;
  align-items: center;

  .review_titletext {
    ${Common.fontSize(16)};
  }

  > button {
    ${Common.ButtonStyle};
    span {
      margin-right: 10px;
    }
  }
`;
