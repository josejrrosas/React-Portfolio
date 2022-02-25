import styled from "styled-components";

export const StyledAbout = styled.div`
  @keyframes borderRainbow {
    0% {
      border-color: red;
    }
    25% {
      border-color: yellow;
    }
    50% {
      border-color: blue;
    }
    75% {
      border-color: green;
    }
    100% {
      border-color: red;
    }
  }

  margin: 5%;
  padding:5%;
  border: 9px double orange;
  border-radius:10%;
  animation: borderRainbow 5s infinite;

  h1{
    font-size: 3rem;
    margin:0px;
  }

  h2{
    font-size: 2rem;
    margin:7% auto 0% auto;
    margin-bottom: 0px;
  }

  h3{
    font-size: 1rem;
    margin-bottom: 0px;
  }

  ul {
    list-style: none;
    display: flex;
  }

  p {
    margin: 0px;
    padding:0px;
    font-size: .75rem;
  }

  #skills {
    margin-bottom: 10%;
  }
`;

export const Logos = styled.div`
  @keyframes rainbow-color {
    0% {
      color: red;
      left: 0px;
      top: 0px;
    }
    25% {
      color: yellow;
      left: 200px;
      top: 0px;
    }
    50% {
      color: blue;
      left: 200px;
      top: 200px;
    }
    75% {
      color: green;
      left: 0px;
      top: 200px;
    }
    100% {
      color: red;
      left: 0px;
      top: 0px;
    }
  }

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
    animation: rainbow-color 5s infinite;
  }

`;
