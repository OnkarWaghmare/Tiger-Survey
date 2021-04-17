import React from "react";
import Options from "./Options";

export const TypeSelector=()=>{

  return(
    <>
    <select style={{width:"20%", textAlign:"center", fontSize:"20px", margin:"25px"}}>Select type of Q:
      <option>Select Question Type</option>
      <option >Multi-select</option>
      <option>Single-select</option>
    </select>
    </>
  )
}