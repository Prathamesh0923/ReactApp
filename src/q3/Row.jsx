const Row=(props)=>{
    const Del=()=>{
       props.Delete(props.index)
    }
    return(<>
     <tr>
                <td>{props.index+1}</td>
                <td>{props.tasks}</td>
                <td><button onClick={Del}>Delete</button></td>
            </tr>
            </>)
}
export default Row