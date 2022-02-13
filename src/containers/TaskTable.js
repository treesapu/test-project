import React from "react";
import "./TaskTable.css";

export default function TaskTable({tasks, setTasks}) {
    console.log(tasks);
    const onChange = () => {
        let inputs = document.getElementsByClassName("table-input");
        let temp_tasks = new Set();
        for (let i = 0; i < inputs.length; i = i+3) {
            let date = inputs[i].value;
            let task = inputs[i+1].value;
            let member = inputs[i+2].value;
            if(date.length >0 && task.length > 0 && member.length > 0) {
                temp_tasks.add(JSON.stringify({date:date, task:task, members:member}));
            }
        }
        console.log(temp_tasks);
        if (temp_tasks !== tasks) {
            setTasks(Array.from(temp_tasks));
        }
    }
    const generateExistingRows = tasks.map((task)=> {
            task = JSON.parse(task);
            return( <div class="input-group">
                <input type="text" class="form-control table-input" defaultValue={task.date}/>
                <input type="text" class="form-control table-input" defaultValue={task.task}/>
                <input type="text" class="form-control table-input" defaultValue={task.members}/>
            </div>)
        }
    );

    const generateEmptyRows = [...Array(3).keys()].map(() => {
        return(<div class="input-group">
            <input type="text" class="form-control table-input"/>
            <input type="text" class="form-control table-input"/>
            <input type="text" class="form-control table-input"/>
        </div>
    )});

    return(
        <div onBlur={onChange}>
            <form>
                {generateExistingRows}
                {generateEmptyRows}
            </form>
        </div>
    );
}