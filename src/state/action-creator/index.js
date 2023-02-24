export const Deposite=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"deposite",
            payload:amount
        })
    }
}
export const Withdraw=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"withdraw",
            payload:amount
        })
    }
}