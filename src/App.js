import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Card from './Components/card';
import Textform from './Components/Textform';
import About from './Components/About';
import './App.css';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type
      }
    )
  }
  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showalert("Dark mode is enabled", "success");
      document.title = 'Myapp -Dark Mode';
      setInterval(() => {
        document.title = 'your pc is restricted';
      }, 1000);
      setInterval(() => {
        document.title = 'Uninstall it now';
      }, 1500);
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      showalert("Light mode is enabled", "success");
      document.title = 'Myapp -Light Mode';
      setInterval(() => {
        document.title = 'Uninstall it now';
      }, 1500);
    }
  }
  return (
    <>

      <Router>
        <Navbar title="Twitter" mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/' element={<Textform showalert={showalert} heading="Write your Comment here." mode={mode} />}/>
        </Routes>
      </Router>

        {/* <div className="container">
           <Textform showalert={showalert} heading="Write your Comment here." mode={mode} />
        </div> */}

        {/* <div className="instant">
        <About />
      </div> */}
      
    </>
  );
}
export default App;
