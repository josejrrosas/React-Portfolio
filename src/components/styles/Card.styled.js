import styled from "styled-components";


export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction:column;
  background-color: ${({ theme }) => theme.baseColor}; ;
  color: ${({ theme }) => theme.wordColor};
  border: solid 1px ${({ theme }) => theme.wordColor};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  width:350px;
  padding: 2px 16px;
  margin:10px;

  p{
    border: 2px solid ${({ theme }) => theme.wordColor};
    padding:10px;
    width:100%;
  }
`