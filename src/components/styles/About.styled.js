import styled from "styled-components";

export const StyledAbout = styled.div`
  margin: 5%;

  ul {
    list-style: none;
    display:flex;
  }

  #skills {
    margin-bottom: 10%;
  }
`;

export const Logos = styled.div`
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: min-content;
  }

  svg {
    height: 40px;
    width: 40px;
  }

  p {
    margin: auto;
  }
`;
