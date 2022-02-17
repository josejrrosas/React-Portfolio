import React from 'react'
import styled from 'styled-components'

function Header(props) {
    function changeTheme(){
        if(props.theme === "light"){
            props.theme("dark");
        }
        else{
            props.theme("light")
        }
    }

  return (
    <div>Header</div>
  )
}

export default Header