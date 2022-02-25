import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const StyledSocialIcons = styled.div`
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  li {
    list-style: none;
    margin:5px;
  }

  a {
    border: 1px solid ${(props) => props.theme.wordColor};
    border-radius: 50%;
    color: ${(props) => props.theme.wordColor};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }
`;
