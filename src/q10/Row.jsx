const Row=(props)=>{
    const del=()=>{
        props.Delete(props.index)
    }

    return(
        <>
         <tr>
                <td>{props.index+1}</td>
                <td>{props.task}</td>
                <td><button onClick={del}>Delte</button></td>
            </tr>
        </>
    )
}
export default Row