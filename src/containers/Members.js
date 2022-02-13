import React from "react";
import logo from "../logo_v1_gradient.svg";
import "./Members.css";
import NavBar from "./NavBar";

function Members({db, setState}) {
  function allMembersJoin() {
    setState(1);
  }

  const listMembers = db.group_members.map((member) =>
    <p className="fakeFormField" key={member.email}>{member.email != localStorage.getItem("email") ? member.name : "You"}</p>
  );

  return (
    <div>
      <div class="center">
          <h1>Members</h1>
          <div>
          {listMembers}
          </div>
          <button type="button" class="btn btn-primary form-rounded" onClick={allMembersJoin}>All members joined</button>
      </div>
    </div>

    
  );
}

export default Members;