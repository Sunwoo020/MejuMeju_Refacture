import styled from "styled-components";

export const SortingUtilsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.widthSize.contentMax};
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgray;
  font-size: 15px;
  font-weight: 700;
  margin-top: 1.2rem;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }

  .sort_item_box {
    position: relative;
    display: inline-block;
    font-size: 15px;

    button {
      display: flex;
      ${({ theme }) => theme.common.flexCenter};
      border: none;
      padding: 8px;
      width: 130px;
      background-color: ${({ theme }) => theme.colors.bg};
      font-weight: 700;
      cursor: pointer;
      font-size: 15px;

      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
      @media ${(props) => props.theme.breakpoints.mobileMax} {
        width: 100px;
      }
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      background-color: ${({ theme }) => theme.colors.bg};
      position: absolute;
      width: 100%;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;

      li {
        text-align: center;
        font-weight: normal;
        color: black;
        padding: 12px;
        text-decoration: none;
        font-size: 14px;
        display: block;
        cursor: pointer;

        &:hover {
          background-color: #ddd;
        }

        @media ${(props) => props.theme.breakpoints.mobileMax} {
          font-size: 12px;
        }
      }
    }
  }
`;
