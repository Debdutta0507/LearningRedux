 const amountReducer=(state=0,action)=>{
    if(action.type==='deposite')
    {return  state=state+action.payload}
    else if(action.payload==='withdraw')
    {return state=state-action.payload}
    else
    return state
}
export default amountReducer