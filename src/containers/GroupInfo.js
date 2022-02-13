import React, { useState, useEffect } from "react";
import "./GroupInfo.css";
import plus from "../plus.svg";
import { OverlayTrigger, Popover } from "react-bootstrap";

export default function GroupInfo({database}) {
    const [clicked, setClicked] = useState(false);
    const [firstTrigger, setFirstTrigger] = useState(false);
    const delayedClick = () => setTimeout(
        ()=>{document.getElementById("groupButton").click();}, 10);

    const handleChange = () => {
        document.getElementById("groupButton").click();
        setClicked(true);
        delayedClick();
    }

    useEffect(()=>{
        if (!firstTrigger) {
            delayedClick();
            setFirstTrigger(true);
        }
    });

    const popoverFirst = (
        <Popover id="popover-basic">
            <Popover.Body>
                This is where you can see your group's expectations,
                strengths and weaknesses.
                <button onClick={handleChange} class="btn btn-primary">Next</button>
            </Popover.Body>
        </Popover>
    )

    const listStrengths = database.group_members.map((member) =>
        <div key={member.email}>
            <p>
                <b>{member.email != localStorage.getItem("email") ? member.name : "You"}</b>
                <br/>{member.expectation}
                <br/>{member.strength}
            </p>
        </div>
    );

    const popoverAlways = (
        <Popover id="popover-basic">
            <Popover.Body>
                {listStrengths}
            </Popover.Body>
        </Popover>
    )
    
    return(
        <OverlayTrigger trigger="click" rootClose={true} placement="bottom-start" overlay={clicked ? popoverAlways : popoverFirst}>
            <input type="image" src={plus} className="plus col-6" id="groupButton"/>
        </OverlayTrigger>
    );
}