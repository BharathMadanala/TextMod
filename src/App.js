
import './App.css';
import React,{useState} from 'react'


import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
 
  const toggleMode = ()=>{
    if(mode === 'dark')
    {
      setMode('light')
      document.body.style.backgroundcolor = '#042743';
    }
    else{
      setMode('dark')
      document.body.style.backgroundcolor = 'white';

    }

  }
  return (
    <>
    <Router>
        <Navbar title = "txtmod" mode = {mode} toggleMode={toggleMode}/>
        <div className="container my-3" >
          <Routes>
            <Route path="/" element={<TextForm title = "Enter text"/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
    </Router>
    </>
  )
}

export default App;

