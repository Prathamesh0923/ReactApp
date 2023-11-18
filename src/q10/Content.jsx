import { useState } from "react"
import Add from "./Addtask"
import Row from "./Row"
import { useReducer } from "react"
import todoReducer from "./Reducer"

const Content = () => {
    // const [array,setArray]=useState([])
    const [array, dispatch] = useReducer(todoReducer, [])
    const add = (task) => {
        // let tasks=[...array,task]
        // setArray(tasks)
        console.log("add")
        dispatch({ type: 'Addtask', payload: task })

    }
    const row = () => array.map((task, index) => <Row task={task} index={index} key={index} Delete={Delete} />)
    const Delete = (index) => {
        // array.splice(index,1)
        // setArray([...array])
        dispatch({ type: 'DeleteTask', payload: index })
    }
    return (
        <>
            <Add settasks={add} />
            <table>
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Tasks</th>
                        <th>Delte</th>
                    </tr>
                </thead>
                {row()}
                <tbody></tbody>
            </table>
        </>
    )
}
export default Content