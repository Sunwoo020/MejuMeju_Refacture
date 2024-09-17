import styled from "styled-components";
export const ButtonStyle = styled.div`
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 1rem;
`;

export const ScrollbarStyle = styled.div`
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbarThumb};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.scrollbarTrack};
  }
`;
