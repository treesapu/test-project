import React, { useState } from "react";
import "./Tasks.css";
import TaskTable from "./TaskTable";


export default function Tasks({tasks, setTasks}) {

  return (
    <div>
      <h1>Tasks and Deadlines</h1>
      <div className="EntireTaskTable">
        <div class="row" id="TaskTableHead">
          <div class="col">Date</div>
          <div class="col">Task</div>
          <div class="col">Members</div>
        </div>
        <div id= "TaskTableFormFields">
          <TaskTable tasks={tasks} setTasks={setTasks}/>
        </div>
      </div>
    </div>
  );
}