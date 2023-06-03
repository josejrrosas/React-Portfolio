import React from 'react'
import { ToggleStyle } from "./styles/Toggle.styled";

function Toggle(props) {
    function changeTheme(){
        if(props.theme === "light"){
            props.setTheme("dark");
            document.getElementById("toggle" ).innerHTML = '🌚'
            document.getElementById("toggle" ).backgroundColor = 'black'
        }
        else{
            props.setTheme("light")
            document.getElementById("toggle" ).innerHTML = "🌞"
            document.getElementById("toggle" ).backgroundColor = 'white'

        }
    };

  return (
    <ToggleStyle id="toggle" onClick={changeTheme}>
      🌚
    </ToggleStyle>
  )
}

export default Toggle