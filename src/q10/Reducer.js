const todoReducer=(state,action)=>{
    console.log(action)
debugger;
    switch(action.type)
    {
        case'Addtask':
            console.log(state)
            return[...state,action.payload]
        case'DeleteTask':
            state.splice(action.payload,1)
            return [...state]
        default:
            return state
    }

}
export default todoReducer