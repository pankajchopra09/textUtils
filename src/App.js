import { useState } from 'react';
import './App.css';
import { About } from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
{ /*import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
*/}
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#252f42';
      document.body.style.color = 'white';
      document.title = "Text Utility -  Dark Mode";
      showAlert("Dark mode has been enabled", "success");
      /* 
      setInterval(() => {
        document.title = "Text Utility is Amazing";
       }, 2000);
       setInterval(() => {
        document.title = "Are you enjoying";
       }, 3000);
       */
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
        document.title = "Text Utility - Light Mode";
        showAlert("Dark mode has been disabled", "success")
    }
  }
  return (
    <>
      {/*<Navbar title="ReactApp" aboutText="About Us" />*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}  />
      {
        /*
      <Router>
      <div className="container my-5">
        <Alert alert={alert}/>
      <Routes>
        <Route exact path="/About" element={<About />} />
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}  />} />
      </Routes>
      </div>
      </Router>
        */
      }


    </>
  );
}

export default App;
