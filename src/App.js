/* Main application file to contain the states and the 
    routing information */

import './App.css';
import React, { useState } from "react";
import { Route, Routes} from "react-router-dom";

// all the containers that we need
import Home from "./containers/Home";
import LandLinkShare from "./containers/LandLinkShare";
import Members from "./containers/Members";
import Expectations from "./containers/Expectations";
import Strengths from "./containers/Strengths";
import Tasks from "./containers/Tasks";
import Meetings from "./containers/Meetings";

function App() {
  const cacheEmail = localStorage.getItem("email");
  const cacheName = localStorage.getItem("name");
  const [email, setEmail] = useState(cacheEmail == null ? "" : cacheEmail);
  const [project, setProject] = useState("");
  const [name, setName] = useState(cacheName == null? "" : cacheName);

  const [db, updateDb] = useState({}); // temp solution for db
  
  // if (Object.keys(db).length === 0 && window.location.pathname != "/") {
  //   window.location.href = "/";
  // }

  return (
    <Routes>
      <Route path="/" element={<Home project={project} name={name} email={email} setProject={setProject} setName={setName} setEmail={setEmail} updateDatabase={updateDb} database={db}/>}/>
      <Route path="/landing" element={<LandLinkShare database={db} updateDatabase={updateDb}/>}/>
      <Route path="/members" element={<Members/>}/>
      <Route path="/expectations" element={<Expectations/>}/>
      <Route path="/strengths" element={<Strengths/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/meetings" element={<Meetings/>}/>
    </Routes>
  );
}

export default App;
