import "./App.css";
import React, { useState } from "react";
import AboutUs from './Components/AboutUs';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  // usestate varible for dark mode
  const [mode, setMode] = useState("light");
  // usestate varible for Alert
  const [alert,setAlert] = useState(null);
  // Alert onclick function
  const showAlert = (type,message)=>{
    setAlert({
      type:type,
      msg:message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert('success',"Dark mode is enable");
      document.body.style.backgroundColor = "#2d2f45"
      document.title='TextUtils-Enable Dark Mode '
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.title='TextUtils-Enable Light Mode '

      showAlert('success',"light mode is enable")

    }
  };
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
      <Route exact path="/" element={<TextForm heading="Enter text to analyse below" mode={mode}/>}/>
      <Route exact path="/about" element={<AboutUs/>}/>

        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
