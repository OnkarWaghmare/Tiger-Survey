import React, {useState} from "react";



export const Options = (props) => {
  const handleInput=(event)=>{
    props.handleOptionInput(event)
  }

  const handleAdd=()=>{
   props.addOption();
  }
  const handleDel=(event)=>{
  //console.log(event.target.id)
  props.delOption(event.target.id);
  }
  const handleStyle={
    margin:"2%"
  }

  return (
      <div style={handleStyle}>
        <label>Options: 
          <input placeholder="Type Answer here" onChange={handleInput} id={props.id}></input>
          <button onClick={handleAdd} style={{margin:"0.1%"}}>+</button>
          <button onClick={handleDel} id={props.id} style={{margin:"0.1%"}}>-</button>
        </label>

      </div>
  );
};
export default Options; 