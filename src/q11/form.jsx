import { useState } from "react"

const Form=()=>{
    const [username,setUser]=useState("")
    const [password,setPass]=useState("")
    const [message,setMes]=useState("")
    const handleSubmit=()=>{
        if (username==="Admin" && password==="Pass123")
        {
            setMes("validate")
        }
        else{
            setMes("Unauthorized")
        }
    }

    return(
    <>
    Enter the Username:
    <input type="text" onChange={(e)=>setUser(e.target.value)} value={username}></input><br></br>
    Enter the PAsword:
    <input type="password" onChange={(e)=>setPass(e.target.value)} value={password}></input>
    <button onClick={handleSubmit}>Validate</button>
    <span> {message}</span>
    </>)
}
export default Form