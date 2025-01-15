import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './assets/Nav/Navbar'
import Home from './Pages/Home'
import Build from './Pages/Build'
import Coverletters from './Pages/Coverletters'
import Template from './Pages/Templates'
import Login from './Pages/Login'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<Build />} />
          <Route path="/cover-letters" element={<Coverletters />} />
          <Route path="/templates" element={<Template />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>    </>
  )
}

export default App
