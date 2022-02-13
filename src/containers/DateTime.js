import logo from '../logo_v1_gradient.svg';
import React from "react";
import "./DateTime.css";

export default function DateTime() {
    return(
    <div>
        <form className="row justify-content-center">
            <div className="col-4">
                <input type="date" class="form-control DateTimeComponent"/>
            </div>
            <div className="col-4">
                <input type="time" class="form-control DateTimeComponent"/>
            </div>
        </form>

        
    </div>
    );
}