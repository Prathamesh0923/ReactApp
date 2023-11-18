import { useState } from "react"

const Add=(props)=>{
    const[task,setTask]=useState("")
    const handleClick=()=>{

        props.settasks(task)
        setTask("")
    }
    // console.log(task)
    return(
        <>
        Enter the Task:<br></br>
     <input type="text" onChange={e=>setTask(e.target.value)} value={task}></input>
     <button onClick={handleClick}>AddTask</button>  
        </>
    )
}
export default Add