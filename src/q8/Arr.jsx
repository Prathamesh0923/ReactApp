const Fruits=()=>{
    const f=['apple','banana','cherry','bat']
    return(<>
    This is Fruit array
    {f.filter((e)=>e!=='bat').map((e)=><h1>{e}</h1>)}
    </>)
}
export default Fruits