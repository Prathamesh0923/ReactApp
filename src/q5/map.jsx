const Map=()=>{
    const WeekDays=['Mon','Tue','Wed','Thur','Fri','Sat','Sun']
    return(
        <>
        {WeekDays.map(el=><h1>{el}</h1>)}

        </>
    )
}
export default Map