import React, { useState } from "react";
import "./LandLinkShare.css";
import NavBar from "./NavBar";
import ModalLink from "./ModalLink";
import Members from "./Members";
import Expectations from "./Expectations";
import Strengths from "./Strengths";
import ShareProject from "./ShareProject";
import Workplace from "./WorkPlace";

export default function LandLinkShare({database, updateDatabase}) { // should be a group page
  const [show, setShow] = useState(true);
  const [state, setState] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const proxyUpdate = (d)=>updateDatabase(d);
  
  function updatePage() {
    let page;
    switch(state) {
      case 0:
        page = <Members db={database} setDb={updateDatabase} setState={setState}/>
        break;
      case 1:
        page = <Expectations db={database} setDb={updateDatabase} setState={setState}/>
        break;
      case 2:
        page = <Strengths db={database} setDb={updateDatabase} setState={setState}/>
        break;
      case 3:
        page = <Workplace db={database} setDb={proxyUpdate} handleShow={handleShow}/>
    }
    return page;
  }

  return (
    <div>
      <NavBar/>
      <div class= "row">
        <ModalLink state={show} handleClose={handleClose}/>
        {updatePage()}
        {state < 3 && <ShareProject handleShow={handleShow}/>}
      </div>
    </div>

    
  );
}