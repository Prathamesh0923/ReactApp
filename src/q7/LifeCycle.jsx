import { useState } from "react"
import { useEffect } from "react"

const Life = () => {
    const [p, setp] = useState("")
    // useEffect(() => {
    //     console.log("componentDidMount")
    //     setp('Component Did mOunt')
    // }, [])

    useEffect(() => console.log("Componentdidmoub"), [])
    useEffect(() => console.log("Component Did Update"), [p])
    useEffect(() => {
        if (p === "delete") {
            console.log("componentDidUnmount")
            return
        }
    }, [p])

    return (
        <>
            This is LifeCylce Methods
            <button onClick={() => setp("changed")}>Change</button>
            <button onClick={()=> setp("delete")}>Delete</button>
            {p}
        </>
    )
}
export default Life