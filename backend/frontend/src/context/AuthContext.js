import { createContext, useEffect, useReducer } from "react"

const INITIAL_STATE={

    user:JSON.parse(localStorage.getItem('user')) || null,
    loading:false,
    error:null,
    isAdmin:JSON.parse(localStorage.getItem('isAdmin')) || null
}

export const AuthContext= createContext(INITIAL_STATE)

const AuthReducer= (state,action)=>{
    switch (action.type){
        case "LOGIN_START":
            return {
                user:null,
                loading:true,
                error:null,
                isAdmin:null,
          
            }
        case "LOGIN_SUCCESS":
            const {password,...otherdata}=action.payload.data
            state.user=otherdata
            return {
                user:otherdata,
                loading:false,
                error:null,
                isAdmin:action.payload.status,
   
            }
            case "USER_DATA":
                return {
                    user:action.payload.data,
                    loading:false,
                    error:null,
                    isAdmin:action.payload.status,
       
                }

            case "LOGIN_FAILURE":
            return {
                user:null,
                loading:false,
                error:action.payload.data,
                isAdmin:null,
   
            }
        case "LOGOUT":
            return {
                // user:localStorage.clear('user'),
                user:null,
                loading:false,
                error:null,
                isAdmin:null,
            
            }
        default:
            return state
    }

}

export const AuthContextProvider=({children}) =>{
    const [state,dispatch]= useReducer(AuthReducer, INITIAL_STATE)

useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(state.user))
    localStorage.setItem('isAdmin',JSON.stringify(state.isAdmin))
},[state.user,state.isAdmin])

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