import React from "react";
import { Link } from "react-router-dom";
import "./TakeSurvey.css";

export const TakeSurvey=(props)=>{
  console.log(props.qbank);
  return(
    <>
    {
      props.qbank.map((ele,index)=>
      <div className="queContainer">
        <h2 key={index}>Q: {ele.question}</h2>
        {ele.options.map((opt, index)=>
        <div className="optionContainer">
          <input type="radio" key={index}></input>
          <span>{opt.value}</span>
        </div>
        )}
      </div>
        

      )
    }
    <Link to="/"><button className="btn">Submit</button></Link>
    </>
  )
}