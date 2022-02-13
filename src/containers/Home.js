import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo_v1_gradient.svg";
import "./Home.css";
import {trial_meredith, trial_john} from "../TrialData";

export default function Home({project, name, email, setProject, setName, setEmail, updateDatabase, database}) {
    function validate() {
        return email.length > 0 && project.length > 0 && name.length > 0; 
    }
    
    let navigate = useNavigate();

    function submit(event) {
        event.preventDefault();
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        let r = Math.floor(Math.random() * 1000 + 1);
        let members = [{email: email, name: name}];
        members.push(trial_meredith, trial_john);
        updateDatabase({
            group_name: project,
            group_id: r,
            group_members: members,
            initialized: false
        });
        navigate("/landing", {replace: true});
    }

  return (
    <div class="container">
        <div class = "row">
        <img src={logo} class="main_logo"/>
        </div>
        <form onSubmit={submit}>
            <div class="form-group row">
                <input type="text" value={project} onChange={(e)=> setProject(e.target.value)} class="form-control form-rounded home-form" id="Input-ProjectName" placeholder="Project name"/>
            </div>
            <div class="form-group row">
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} class="form-control form-rounded home-form" id="Input-Name" placeholder="Your name"/>
            </div>
            <div class="form-group row">
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}  class="form-control form-rounded home-form" id="Input-Email" placeholder="Your email"/>
            </div>
            <button type="submit" class="btn btn-primary row form-rounded" disabled={!validate()}>Go!</button>
        </form>
    </div>
  );
}