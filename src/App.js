import React from 'react';
import { ThemeProvider } from "styled-components";
import { useState } from "react"
import Toggle from "./Components/Toggle"
import GlobalStyles from "./Components/styles/Global"
import Header from "./Components/Header.js";

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
      <GlobalStyles/>
      <Toggle theme = {theme} setTheme = {setTheme} />
      <Header />
    </ThemeProvider>
  );
}

export default App;