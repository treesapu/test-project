import React from "react";
import logo from "../logo_v1_gradient.svg";
import "./Expectations.css";
import NavBar from "./NavBar";

function Members({db, setDb, setState}) {

  function updateExpectation() {
    let members = db.group_members;
    for (let i = 0; i < members.length; i++) {
      let member = members[i];
      if (member.email == localStorage.getItem("email")) {
        member.expectation = "A";
        break;
      }
    }
    setDb(db);
    setState(2);
  }

  const fields = db.group_members.map((member) => 
    <div class="row" key={member.email}>
          <p class= "col-4">{localStorage.getItem("email") != member.email ? member.name : "You"}</p>
          <div class="col-8">
            <input type="text" class="form-control form-rounded home-form" placeholder="Grade"/>
          </div>
    </div>
  );
  
  return (
    <div>
      <div class="center">
        <h1>What are your expectations for this project?</h1>
        {fields}
      </div>
      <button type="button" class="btn btn-primary form-rounded" onClick={updateExpectation}>Next</button>
    </div>

    
  );
}

export default Members;