import React from "react";
import DateTime from "./DateTime";
import "./Notes.css";

export default function Notes() {
  return (
    <div>
      <div>
        <h1>Notes Compilation</h1>
      </div>

      <div>
        <DateTime/>
      </div>

      <div>
        <textarea id="NotesBox" rows="15" cols="34" placeholder="    Type here"></textarea>
      </div>
    </div>
  );
}