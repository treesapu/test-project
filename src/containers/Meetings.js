import React from "react";
import "./Meetings.css";
import meetingUI from '../meeting-popup.jpg';
import { OverlayTrigger, Popover } from "react-bootstrap";

export default function Meetings() {

  const ava_popover = (
    <Popover>
        <Popover.Body>
        <img src={meetingUI}/>
        </Popover.Body>
    </Popover>
)

  return (
    <div>
      <h1>Meetings</h1>
      
      <OverlayTrigger trigger="click" overlay={ava_popover} placement= "bottom-end">
        <button type="button" class="btn btn-primary">Select availability</button>
      </OverlayTrigger>

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
            <input type="date" class="form-control" value="2022-02-06"/>
            <input type="time" class="form-control" value="06:00"/>
            <input type="text" class="form-control" value = "You,Meredith"/>
        </div>

        </div>

      </form>
      

    </div>
  );
}

{/* <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
</div> */}