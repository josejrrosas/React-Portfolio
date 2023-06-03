import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0px;
  width: 100%;
`;

export const StyledSocialIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


  li {
    list-style: none;
    padding:0px;
  }

  a {
    border: 1px solid ${(props) => props.theme.wordColor};
    border-radius: 50%;
    color: ${(props) => props.theme.wordColor};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    margin-bottom:10px;
    height: 40px;
    width: 40px;
    text-decoration: none;

    &:hover{
      opacity: .7;
  }
  }
`;
