// import './App.css';
import './index.css'
import React from "react"
import { Route, Routes } from 'react-router-dom'; 
import Home from "./routes/Home"
import About from "./routes/About"
import Authentification from "./routes/Authentification"
import Error from "./routes/Error"
import Contact from "./routes/Contact"
import Project from "./routes/Project"
import PrivateRoutesLayout from './Layouts/PrivateRoutesLayout';

function App() {
  return (
    < >
      <Routes>
        {/* Public Page */}
        <Route path = "/" element = {<Home />} />
        <Route path = '/About' element = {<About />} />
        <Route path = '/Signup' element = {<Authentification />} />
        <Route path = "/Error" element = {<Error />} />
        <Route path = '/Contact' element = {<Contact />} />

        {/* Private Page */}
        <Route element={<PrivateRoutesLayout />} >
          <Route path = '/Project' element = {<Project />} />
        </Route>
      </Routes>
        
    </>
  );
}

export default App;
