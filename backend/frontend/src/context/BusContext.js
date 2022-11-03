import { createContext, useEffect, useReducer } from "react"

const INITIAL_STATE={

    data:JSON.parse(localStorage.getItem('busData')) || null,
    loading:false,
    error:null
   
}

export const BusContext= createContext(INITIAL_STATE)

const BusReducer= (state,action)=>{
    switch (action.type){
        case "FETCH_START":
            return {
                data:null,
                loading:true,
                error:null,
            }
        case "FETCH_SUCCESS":
            return {
                data:action.payload,
                loading:false,
                error:null,
            }
        default:
            return state
    }

}

export const BusContextProvider=({children}) =>{
    const [state,dispatched]= useReducer(BusReducer, INITIAL_STATE)

useEffect(()=>{
    localStorage.setItem('busData',JSON.stringify(state.data))
},[state.data])

    return (
        <BusContext.Provider
        value={{
            data:state.data,
            loading:state.loading,
            error:state.error,
            dispatched

        }}
        >
            {children}
        </BusContext.Provider>
    )
}