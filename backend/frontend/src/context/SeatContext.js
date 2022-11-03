import { createContext, useEffect, useReducer } from "react"

const INITIAL_STATE={

    data:JSON.parse(localStorage.getItem('seatdata')) || null,
    loading:false,
    error:null,
   
}

export const SeatContext= createContext(INITIAL_STATE)

const SeatReducer= (state,action)=>{
    switch (action.type){
        case "FETCH_DATA":
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

export const SeatContextProvider=({children}) =>{
    const [state,dispatch]= useReducer(SeatReducer, INITIAL_STATE)

useEffect(()=>{
    localStorage.setItem('seatdata',JSON.stringify(state.data))
},[state.data])

    return (
        <SeatContext.Provider
        value={{
            data:state.data,
            loading:state.loading,
            error:state.error,
            dispatch

        }}
        >
            {children}
        </SeatContext.Provider>
    )
}