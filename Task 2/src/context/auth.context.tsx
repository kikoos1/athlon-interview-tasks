import React, {createContext, useContext, useReducer} from "react";
import {userLogin, userLogout} from "../services/auth";
import {User} from "../types/user.type";


type AllowedActions = 'authorized' | 'logout' | 'loading' | 'error';
type ActionPayload = {
    email:string;
    error:string;
}
type Action = { type: AllowedActions, payload: ActionPayload };

type State = {
    isLoading: boolean,
    error: string,
    isAuthorized: boolean,
    email: string,
}
type AuthContextType = {
    state: State,
    login: (user: User) => void
    logout: () => void
}
const AuthContext = createContext<AuthContextType | null >(null);
const initialState:State = {
    isLoading:false,
    isAuthorized:false,
    error:'',
    email:'',
}

//create context with the methods
const AuthReducer = (state: State, action: Action) => {
    const {email,error} = action.payload;
    switch (action.type) {
        case 'loading': {
            return {...state,
                isLoading: true}
        }
        case 'authorized': {
            return {
                ...state,
                isLoading:false,
                isAuthorized:true,
                error:'',
                email
            }
        }
        case 'error':{
            return {
                ...state,
                isLoading: false,
                error,
            }
        }
        case "logout":{
            return {
                isLoading: false,
                isAuthorized:false,
                email:'',
                error:''
            }
        }
        default:{
            console.log('Unknow action')
            return state
        }

    }
}
type AuthProviderProps = {
    children: React.ReactNode;
}
const AuthProvider = ({children}: AuthProviderProps) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const login =  (user: User) => {
      dispatch({type:'loading',payload: {} as ActionPayload})
        userLogin(user.email, user.password).then(() => {
            dispatch({type: 'authorized',payload:{email:user.email}as ActionPayload});
        }).catch(err => {
            dispatch({type: 'error',payload:{error:err.message} as ActionPayload});
        })
    }

    const logout =  () => {
        dispatch({type: 'loading',payload:{} as ActionPayload});
        userLogout().then(() => {
            dispatch({type: 'logout',payload:{} as ActionPayload});
        })
    }

    return (
        <AuthContext.Provider value={{
            state,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )

}
const useAuth = () => {
    const context = useContext(AuthContext) as AuthContextType
    if (context === undefined) {
        throw new Error('useCount must be used within a AuthProvider')
    }
    return context
}
export {AuthProvider, useAuth}