import styled from "styled-components";
import * as Common from "@styles/Common";

export const AlcoholContainer = styled.section`
  ${({ theme }) => theme.common.flexCenterCol}
  height: 100%;
  padding: 0 25px;

  color: ${({ theme }) => theme.colors.fontColor};
`;

export const AlcoholTabNavBox = styled.div`
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${Common.fontSize(15)};
  height: 60px;

  @media screen and (max-width: 600px) {
    ${Common.fontSize(13)};
  }
`;

export const TabNav = styled.ul`
  width: 55%;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start;
  flex-direction: row;
  cursor: pointer;

  .sub_tab {
    padding: 10px 0;
    color: darkgray;
  }
  .tab_selected {
    border-bottom: 2.5px solid ${({ theme }) => theme.colors.fontColor};
    font-weight: bold;
    ${Common.fontSize(16)};
    color: ${({ theme }) => theme.colors.fontColor};
    transition: 0.5s;
  }
  @media ${(props) => props.theme.breakpoints.mobileMax} {
    width: 100%;
    ${Common.fontSize(13)};
    gap: 0.5rem;

    .tab_selected {
      ${Common.fontSize(14)};
    }
  }
`;

export const SearchTextbox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  justify-content: flex-start;
  padding-top: 1rem;

  .string_text {
    ${Common.fontSize(23)};
    font-weight: 700;
  }
  .default_text {
    padding: 5px;
  }
`;
