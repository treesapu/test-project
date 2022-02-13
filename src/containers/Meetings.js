import React from "react";
import "./Meetings.css";

export default function Meetings() {
  return (
    <div>
      <h1>Meetings</h1>
      <button type="button" class="btn btn-primary">Select availability</button>
      <form>
        <div class="row" id="MeetingTableHead">
          <div class="col">
              Date
          </div>
          <div class="col">
              Time
          </div>
          <div class="col">
              Member(s) Available
          </div>
        </div>

        <div class= "MeetingTableFormFields">
        <div class="input-group">
            <input type="date" class="form-control"/>
            <input type="time" class="form-control"/>
            <input type="text" class="form-control" value = "You,Meredith"/>
        </div>

        <div class="input-group">
            <input type="date" class="form-control" />
            <input type="time" class="form-control" />
            <input type="text" class="form-control" value = "You, John, Meredith"/>
        </div>
        </div>

      </form>
      

    </div>
  );
}

{/* <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
</div> */}