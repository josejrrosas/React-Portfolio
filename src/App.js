import React from 'react';
import { ThemeProvider } from "styled-components";
import { useState } from "react"
import Toggle from "./Components/Toggle"
import GlobalStyles from "./Components/styles/Global"
import Nav from "./Components/Nav"
import Home from "./Pages/Home.js"
import About from "./Pages/About.js"
import Contact from "./Pages/Contact.js"
import Projects from "./Pages/Projects.js"
import ErrorPage from "./Pages/ErrorPage.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Router>
        <Toggle theme = {theme} setTheme = {setTheme} />
          <Nav />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/about" element={<About />} />
          <Route path = "/projects" element={<Projects />} />
          <Route path = "/contact" element={<Contact />} />
          <Route path = "*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;