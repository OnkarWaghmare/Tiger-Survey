import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Options } from "./Options";
import {Question} from "./Question";
import {TypeSelector} from "./TypeSelector";
import "./CreateSurvey.css";


export const CreateSurvey=(props)=>{
  const [optionsArray, setOptionsArray]=useState([{value:"", id:"1"}, {value:"", id:"2"}]);
  const [question, setQuestion]=useState("");

  const addQuestion=()=>{
    props.addQuestion(question, optionsArray);
    // setQuestion("");
    // setOptionsArray([{value:"", id:"1"}, {value:"", id:"2"}])
  }


  const handleQuestion=(input)=>{
    setQuestion(input);
    console.log(question);
  }

  const handleOptionInput=(event)=>{
    const temp=optionsArray;
    temp.find((ele)=>ele.id===event.target.id).value=event.target.value
    //console.log(temp);
  
  }
  const generateId=()=>{
      let number=Math.floor(Math.random()*1000);
      return number;
  }
  const delOption=(id)=>{
    if(optionsArray.length>2){
      //console.log(optionsArray);
      const temp=optionsArray.filter((ele)=>ele.id!==id);
      setOptionsArray(temp);
    }

  }

  const addOption=()=>{
    const obj={
      value:"",
      id:""+generateId()
    }
    let temp=[...optionsArray, obj];
    setOptionsArray(temp);
  }
  
  return (
    <>
    <TypeSelector/>
    <br/>
    <Question handleQuestion={handleQuestion}/>
    <br/>
    {optionsArray.map((item)=>
      <Options id={item.id} handleOptionInput={handleOptionInput} addOption={addOption} delOption={delOption} key={item.id}/>
    )}
    <button onClick={addQuestion} className="btn">Add Question</button>
    <Link to="/takeSurvey"><button className="btn">Publish</button></Link>
    
    </>
  )
}