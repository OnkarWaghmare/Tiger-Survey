import React from "react";
import { Link } from "react-router-dom"
import "./menu.css";

export const Menu=()=>{
  return(
    <>
    <div className="menuContainer">
      <Link to="/createSurvey">
        <button id="createS">Create Survey</button>
      </Link>
      <Link to="/takeSurvey">
        <button id="takeS">Take Survey</button>
      </Link>
    </div>

    <br/>

    </>
  )
}