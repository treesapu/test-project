import React from "react";

function Strengths({db, setDb, setState}) {

  function updateStrength() {
    let members = db.group_members;
    for (let i = 0; i < members.length; i++) {
      let member = members[i];
      if (member.email == localStorage.getItem("email")) {
        member.strength = "charismatic";
        break;
      }
    }
    setDb(db);
    setState(3);
  }

  const fields = db.group_members.map((member) => 
    <div class="row" key={member.email}>
          <p class= "col-4">{localStorage.getItem("email") != member.email ? member.name : "You"}</p>
          <div class="col-8">
            <input type="text" class="form-control form-rounded home-form" placeholder="Type Here"/>
          </div>
    </div>
  );
  
  return (
    <div>
      <div class="center">
        <h1>What are your strengths?</h1>
        {fields}
      </div>

      <button type="button" class="btn btn-primary form-rounded" onClick={()=>setState(3)}>Next</button>
    </div>

    
  );
}

export default Strengths;