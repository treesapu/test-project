import React from "react";

export default function ShareProject({handleShow}) {    
    return(
        <button type="button" class="btn btn-link" onClick={handleShow}>Share Project Link</button>
    );
}