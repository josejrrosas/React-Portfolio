import { createGlobalStyle } from "styled-components";
import bgImage from '../../images/cybersec.jpeg'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    *{
        box-sizing: border-box;
    }

    html,body{
        background-image: url(${bgImage});
        box-shadow:${({theme}) => theme.overlayColor};
        background-size: cover;
        color:  ${({theme}) => theme.wordColor};
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        min-height: 100%;
        margin: 0;
    }
`;

export default GlobalStyles

