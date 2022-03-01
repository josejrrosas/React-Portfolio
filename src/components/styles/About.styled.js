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
  padding: 5%;
  border: 9px double orange;
  border-radius: 10%;
  animation: borderRainbow 5s infinite;

  div{
      margin-bottom:7%;
  }

  h1 {
    font-size: 3rem;
    margin: 0px;
  }

  h2 {
    font-size: 2rem;
    margin-top:0px;
    margin-bottom: 0px;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0px;
  }

  p {
    margin: 0px;
    padding: 0px;
    font-size: 0.75rem;
  }

  #skills {
    margin-bottom: 10%;
    h3 {
      text-align: center;
    }
  }

  #education{
    display:flex;
    flex-direction:row;
    justify-content: space-between;

  }
`;

export const Logos = styled.div`
  overflow: hidden;

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

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 40px 10px;
    padding: 0px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
    width: auto;
  }

  svg {
    height: 40px;
    width: 40px;
    animation: rainbow-color 5s infinite;
  }
`;



export const Image = styled.img`
  height:150px;
`;