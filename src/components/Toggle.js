import React from 'react'
import { ToggleStyle } from "./styles/Toggle.styled";

function Toggle(props) {
    function changeTheme(){
        if(props.theme === "light"){
            props.setTheme("dark");
            document.getElementById("toggle" ).innerHTML = "dark"
        }
        else{
            props.setTheme("light")
            document.getElementById("toggle" ).innerHTML = "light"

        }
    };

  return (
    <ToggleStyle id="toggle" onClick={changeTheme}>
      dark
    </ToggleStyle>
  )
}

export default Toggle