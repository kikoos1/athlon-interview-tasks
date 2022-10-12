import {useAuth} from "../../context/auth.context";
import {WelcomeMessage} from "../WelcomeMessage/WelcomeMessage";
import {LoginForm} from "../LoginForm/LoginForm";
import React from "react";

export const Wrapper = () =>{
    const {state} = useAuth();
    return <>
        {
            state.isAuthorized?  <WelcomeMessage />: <LoginForm />
        }
    </>
}