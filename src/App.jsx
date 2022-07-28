import React from 'react'
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from './context';
import { useContext } from 'react/cjs/react.development';

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
  <div style={{backgroundColor:darkMode ? "#222" : "#D4F1F4", 
        color:darkMode && "white"}}>
  
    <Toggle />
    <Intro />
    <About />
    <Contact />
    
  </div>
  );
};

export default App;