import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Front from "./components/Front";
import AboutChurch from "./components/AboutChurch";
import Pastor from "./components/Pastor";
import Altar from "./components/Altar";
import Servicios from "./components/Servicios";
import Pastorado from "./components/Pastorado";
import Grabaciones from "./components/Grabaciones";
import Footer from "./components/Footer";

function App() {
  const[sessionToken, setSessionToken] = useState("")

  useEffect(() => {
    if(localStorage.getItem("token")){
      setSessionToken(localStorage.getItem("token"))
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div>
      <NavBar />
      <Front />
      <AboutChurch />
      <Altar />
      <Servicios />
      <Pastor />
      <Pastorado />
      <Grabaciones updateToken={updateToken}/>
      <Footer updateToken={updateToken}/>
    </div>
  );
}

export default App;
// 2fd84cfe7
