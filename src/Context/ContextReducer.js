export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const GET_TRANSACTION = 'GET_TRANSACTION'

const createTransaction = (state, action) => {
    
    return [...state,action.payload]
}

const getTransaction = (state,action) =>{
    return [...action.payload]
}
const deleteTransaction = (state,action) =>{
    console.log(action.payload)
    return state.filter(transact=>transact.id !== action.payload)
}
export const ContextReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_TRANSACTION":
            console.log("Into State Reduc4er")
            return createTransaction(state, action);
        case "DELETE_TRANSACTION":
            return deleteTransaction(state,action);
        case "GET_TRANSACTION":
            
            return getTransaction(state,action);
        default :
             return state;
    }

}