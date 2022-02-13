import React from "react";
import DateTime from "./DateTime";
import "./Agenda.css";

export default function Agenda() {
  return (
    <div>
      <div>
        <h1>Agenda Title</h1>
      </div>

      <div>
        <DateTime/>
      </div>

      <div class="row" id="AgendaTableHead">
        <div class="col">
            No.
        </div>
        <div class="col">
            Agenda
        </div>
        <div class="col w-18">
            Done
        </div>
      </div>

      <form class= "AgendaTableFormFields">

      <div class="input-group">
        <input type="text" class="form-control" value ="1"/>
        <input type="text" class="form-control" value= "Discuss Slides"/>
        <div class="input-group-text">
          <input class="form-check-input mt-0 " type="checkbox" checked/>
        </div>
      </div>

      <div class="input-group">
        <input type="text" class="form-control" value ="2"/>
        <input type="text" class="form-control" placeholder="Type here"/>
        <div class="input-group-text">
          <input class="form-check-input mt-0 " type="checkbox"/>
        </div>
      </div>

      <div class="input-group">
        <input type="text" class="form-control"/>
        <input type="text" class="form-control"/>
        <div class="input-group-text">
          <input class="form-check-input mt-0 " type="checkbox"/>
        </div>
      </div>

      <div class="input-group">
        <input type="text" class="form-control"/>
        <input type="text" class="form-control"/>
        <div class="input-group-text">
          <input class="form-check-input mt-0 " type="checkbox"/>
        </div>
      </div>

      <div class="input-group">
        <input type="text" class="form-control"/>
        <input type="text" class="form-control"/>
        <div class="input-group-text">
          <input class="form-check-input mt-0 " type="checkbox"/>
        </div>
      </div>
      
      </form>



    </div>
  );
}

