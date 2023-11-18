import { useState } from "react"
import Add from "./AddTask"
import Row from "./Row"

const Content=()=>{
    const [array,setArray]=useState([])
    const addTask=(task)=>{
        let tasks=[...array,task]
        setArray(tasks)
    }
    const row=()=>array.map((tasks,index)=><Row tasks={tasks} index={index} key={index} Delete={Delete}/> )
    const Delete=(index)=>{
        array.splice(index,1)
        setArray([...array])
    }


    return(<>
     <Add settasks={addTask}/>
     <table >
        <thead>
            <tr>
                <th>Srno</th>
                <th>Task</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
           {row()}
        </tbody>
        </table> 
    </>)
}
export default Content