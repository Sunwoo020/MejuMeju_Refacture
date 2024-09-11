import styled from "styled-components";
import * as Common from "@styles/Common";

export const ReviewListContainer = styled(Common.FlexCol)`
  margin: 2rem 0 5rem 0;
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  width: 100%;
  height: 100%;

  .detail_box {
    margin-top: 1rem;
    width: 100%;
  }

  > ul {
    ${Common.ScrollbarStyle};
    margin: auto 0;
    height: 210px;
    display: flex;
    gap: 0.5rem;

    .item_review_box {
      flex: 0 0 420px;
      background: #fff;
      height: 160px;
      ${Common.FlexCenterCol};
      box-shadow: 5px 5px 10px rgba(4, 4, 4, 0.433);
      border-radius: 7px;
      margin-right: 1rem;
      padding: 1rem;
    }
  }

  .review_no {
    ${Common.FlexCenterRow};
    height: 100px;
    margin-bottom: 30px;
  }
`;
