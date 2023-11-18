const Arrays=()=>{
    const Fruits=['apple','banana']
    const AddFruits=['Cherry','orange']
    const Merged=Fruits.concat(AddFruits)
    return(<>
    <h3>Merging Arays</h3>
    {Merged.map(Fruits=><h1>{Fruits}</h1>)}
    </>)
}
export default Arrays