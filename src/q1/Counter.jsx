import { useState } from "react"

const Counter=(props)=>{
    const [count,setCount]=useState(props.count)
    const Inc=()=>{
        setCount(count+1)
    }
    const Dec=()=>{
        setCount(count-1)

    }
    return(<>
    Counter :{count}<br></br>
    <button onClick={Inc}>Increment</button><br></br>
    <button onClick={Dec}>Decrement</button>
    </>)
}
export default Counter