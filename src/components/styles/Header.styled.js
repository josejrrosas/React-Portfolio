import styled from "styled-components";

export const StyledHeader = styled.header`
  color: ${({ theme }) => theme.tagLineColor};
  margin: auto 5%;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 90vh;

  #headerInfo {
    margin: auto;
  }

  #self-image{
      margin:auto;
  }

  h1 {
    margin: 0px;
    margin-bottom: 50px;
    font-size: 80px;
    background: linear-gradient(
      to right,
      #fdeff9 20%,
      #ec38bc 40%,
      #7303c0 60%,
      #03001e 80%
    );
    background-size: 200% auto;
    color: #000;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 2.5s linear infinite;
    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }
  }

  h2 {
    margin: 0px;
    font-size: 40px;
    background: linear-gradient(
      to right,
      #fdeff9 20%,
      #ec38bc 40%,
      #7303c0 60%,
      #03001e 80%
    );
    background-size: 200% auto;
    color: #000;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 1.5s linear infinite;
    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }
  }

  p {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 50px;
  }
`;

export const Image = styled.img`
  height: 300px;
  border-radius: 50%;
  transition: all 400ms ease-out;
  box-shadow: 0 0 8px 3px grey;
  border: 2px solid grey;
`;
