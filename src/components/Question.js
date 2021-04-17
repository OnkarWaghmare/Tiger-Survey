export const Question=(props)=>{

  const handleInput=(event)=>{
    props.handleQuestion(event.target.value);
  }
  const handleStyle={
      width:"400px",
      height:"auto",
      fontSize:"20px",
      margin:"10px"
      
  }
  return(
    <>
    <label>Q. </label>
    <input type="text" placeholder="type your Question here" onChange={handleInput} style={handleStyle}/>
    </>
  )
}