import styled from "styled-components";

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    margin-top: 1rem;
  }
`;

export const StyledPaginationBtn = styled.button`
  width: 30px;
  height: 40px;
  margin: 0 4px;
  padding: 7px 10px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f8f9fa;
  color: #495057;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e9ecef;
  }
  &:disabled {
    cursor: not-allowed;
    color: #fff;
    background: #a84448;
  }
`;
