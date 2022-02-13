import React from "react";
import { Nav } from "react-bootstrap";
import "./Navigation.css";


export default function Navigaton({state, updateState}) {
    
    const generateNav = ["Tasks", "Meetings", "Agenda", "Notes"].map((page, index) =>
        <Nav.Item key={index}>
            <Nav.Link eventKey={index} onClick={()=>updateState(index)}>{page}</Nav.Link>
        </Nav.Item>
    );

    return(
        <Nav className = "Sticky-Nav" fill variant="pills" activeKey={state}>
            {generateNav}
        </Nav>
    );
}