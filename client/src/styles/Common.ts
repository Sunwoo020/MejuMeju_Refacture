import styled, { css } from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexCenterRow = styled(FlexRow)`
  ${FlexRow};
  justify-content: center;
  align-items: center;
`;

export const FlexCenterCol = styled(FlexCol)`
  justify-content: center;
  align-items: center;
`;
export const fontSize = (size: number) => css`
  font-size: ${size}px;
`;
export const FontSizeStyle = styled.div<{ size: number }>`
  ${({ size }) => fontSize(size)}
`;

export const ScrollbarStyle = styled.ul`
  overflow-y: auto;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: none;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: lightgray;
  }
`;

export const BorderBottomTitle = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

export const ButtonStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.buttonColor};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHoverColor};
  }
`;
