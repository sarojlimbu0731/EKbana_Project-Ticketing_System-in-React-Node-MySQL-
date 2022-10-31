import { createContext, useEffect, useReducer } from "react"

const INITIAL_STATE={

    user:JSON.parse(localStorage.getItem('user')) || null,
    loading:false,
    error:null,
    isAdmin:undefined
}

export const AuthContext= createContext(INITIAL_STATE)

const AuthReducer= (state,action)=>{

    switch (action.type){
        case "LOGIN_START":
            return {
                user:null,
                loading:true,
                error:null,
                isAdmin:undefined
            }
        case "LOGIN_SUCCESS":
            return {
                user:action.payload.data,
                loading:false,
                error:null,
                isAdmin:action.payload.status
            }
        case "LOGIN_FAILURE":
            return {
                user:null,
                loading:false,
                error:action.payload.data,
                isAdmin:undefined
            }
            case "LOGOUT":
                return {
                    // user:localStorage.clear('user'),
                    user:null,
                    loading:false,
                    error:null,
                    isAdmin:undefined
                }
        default:
            return state
    }

}

export const AuthContextProvider=({children}) =>{
    const [state,dispatch]= useReducer(AuthReducer, INITIAL_STATE)

useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(state.user))
},[state.user])

    return (
        <AuthContext.Provider
        value={{
            user:state.user,
            loading:state.loading,
            error:state.error,
            isAdmin:state.isAdmin,
            dispatch

        }}
        >
            {children}
        </AuthContext.Provider>
    )
}