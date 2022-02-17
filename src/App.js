import React from 'react';
import { ThemeProvider } from "styled-components";
import { useState } from "react"

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
}
const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavendar"
}

const themes = {
  light:LightTheme,
  dark:DarkTheme,
}

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeProvider theme = {themes[theme]}>
      <h1>Theme Builder</h1>
    </ThemeProvider>
  );
}

export default App;