import { useState } from "react"

const Add=(props)=>{
    const [task,settask]=useState("")
    const add=()=>{
        props.settasks(task)
        settask("")
    }

    return(
        <>
         Enter the Task:<br></br>
         <input type="text" onChange={(e)=>settask(e.target.value)} value={task}></input>
         <button onClick={add}>Addtask</button>
        </>
    )
}
export default Add