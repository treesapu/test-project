import React, {useState } from "react";
import Agenda from "./Agenda";
import GroupInfo from "./GroupInfo";
import Meetings from "./Meetings";
import Navigaton from "./Navigation";
import Notes from "./Notes";
import ShareProject from "./ShareProject";
import Tasks from "./Tasks";
import "./WorkPlace.css";

export default function Workplace({db, setDb, handleShow}) {
    const [state, setState] = useState(0);

    const [tasks, setTasks] = useState(db.tasks ? db.tasks : []);
    const [meetings, setMeetings] = useState(db.meetings ? db.meetings : []);
    const [agenda, setAgenda] = useState(db.agenda ? db.agenda : []);
    const [notes, setNotes] = useState(db.notes ? db.notes : []);

    function updatePage() {
        let page;
        switch(state) {
          case 0:
            page = <Tasks tasks={tasks} setTasks={setTasks}/>
            break;
          case 1:
            page = <Meetings/>
            break;
          case 2:
            page = <Agenda/>
            break;
          case 3:
            page = <Notes/>
            break;
        }
        return page;
      }

    function saveChanges() {
        console.log("Saving changes");
        db.tasks = tasks;
        db.meetings = meetings;
        db.agenda = agenda;
        db.notes = notes;
        setDb(db);
        console.log(db);
    }

    return (
        <div>
          <GroupInfo database={db}/>
          <div class="center-top" onBlur={saveChanges}>
            {updatePage()}
            <ShareProject handleShow={handleShow}/>
            <Navigaton state={state} updateState={setState}/>
          </div>
        </div>
          
      );
}